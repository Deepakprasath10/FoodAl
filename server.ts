import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { MASTER_KNOWLEDGE_DOCUMENT, MASTER_KNOWLEDGE_FULL_TEXT } from "./src/data/foodScienceKnowledgeBase";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '25mb' }));

// Initialize Gemini API client lazily / safely
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// RAG Search Helper from Knowledge Base when API is quota limited
function generateKnowledgeFallback(query: string, pdfName?: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Find matching sections in our embedded PDF Knowledge Base
  const matchedSections = MASTER_KNOWLEDGE_DOCUMENT.sections.filter(sec => {
    const combined = (sec.title + " " + sec.content + " " + sec.keyParameters.map(p => p.label + " " + p.value).join(" ")).toLowerCase();
    const queryTokens = lowerQuery.split(/\s+/).filter(t => t.length > 3);
    return queryTokens.some(token => combined.includes(token));
  });

  const activeDocTitle = pdfName || MASTER_KNOWLEDGE_DOCUMENT.title;

  if (matchedSections.length > 0) {
    return `### 📄 Knowledge Base Analysis (${activeDocTitle})

Here is the scientific analysis extracted directly from our source document:

${matchedSections.map(sec => `#### ${sec.title} (\`${sec.code}\`)

**Key Specifications & Parameters:**
${sec.keyParameters.map(p => `- **${p.label}:** ${p.value}`).join('\n')}

**Technical Guidance:**
${sec.content}
`).join('\n\n')}

---
💡 *Note: Operating on local PDF knowledge base index (Rate limit safe fallback).*`;
  }

  // Comprehensive fallback if no specific keywords matched
  return `### 📄 Document Analysis: ${activeDocTitle}

Based on our Master R&D Knowledge Base (\`${MASTER_KNOWLEDGE_DOCUMENT.title}\`):

1. **Hydrocolloid Rheology & Emulsification (\`SEC-101\`):**
   - **Xanthan + LBG Synergy:** 1:1 ratio prevents particle sedimentation in emulsion matrices.
   - **Target Zeta Potential:** $> |-30|\\text{ mV}$ for long-term electrostatic dispersion.

2. **Water Activity & Retort Sterilization (\`SEC-202\`):**
   - Keep $a_w < 0.85$ to prevent *C. botulinum* spores and $a_w < 0.60$ for commercial ambient shelf stability.
   - **Retort Sterilization:** Target $F_0 \\ge 3.0$ minutes at $121.1^\\circ\\text{C}$ for low-acid canned/pouch items.

3. **Bitterness Masking & Encapsulation (\`SEC-303\`):**
   - Use $\\beta$-cyclodextrin at a 1:1 to 1:2 molar ratio to encapsulate hydrophobic bitter peptides.

4. **Regulatory Standards (\`SEC-404\`):**
   - Complies with FDA 21 CFR 101.9 & FSSAI Appendix A limits.

---
💡 *Answer generated from integrated PDF knowledge base.*`;
}

// AI Food Formulation Assistant Endpoint
app.post("/api/ai-formulate", async (req, res) => {
  const { productName, category, targetClaims, targetPackaging, challenges, budget } = req.body;

  if (!productName || !category) {
    return res.status(400).json({ error: "Product Name and Category are required." });
  }

  const fallbackData = {
    productName,
    category,
    feasibilityScore: "94%",
    roadmap: [
      { phase: "Phase 1: Benchtop Matrix & Hydrocolloid Selection", duration: "2 Weeks", action: `Develop baseline formulation for ${productName} with stabilized viscosity & emulsification.` },
      { phase: "Phase 2: Accelerated Shelf Life & Water Activity Test", duration: "3 Weeks", action: `Optimize $a_w < 0.60$ and natural antioxidants for ${targetClaims || 'Clean Label'} claims.` },
      { phase: "Phase 3: Pilot Scale Factory Trial & SOP", duration: "2 Weeks", action: `Scale recipe to pilot plant batching with ${targetPackaging || 'Barrier packaging'}.` }
    ],
    scientificConsiderations: [
      `Hydrocolloid rheology & emulsion stability for: ${challenges || 'Texture & shelf stability'}`,
      `Target budget alignment: ${budget || 'Standard R&D tier'}`,
      "Regulatory compliance verification under FDA 21 CFR & FSSAI standards"
    ],
    recommendedServices: ["Food Formulation", "Shelf Life Extension", "Manufacturing Support"],
    estimatedTimeline: "6-7 Weeks Total"
  };

  try {
    const ai = getAIClient();
    if (!ai) {
      return res.json(fallbackData);
    }

    const prompt = `You are the lead Food Alchemist Senior R&D Chemist. Generate a concise, highly professional food R&D preliminary feasibility analysis for a client.
Product Name: ${productName}
Category: ${category}
Target Claims: ${targetClaims || "Clean Label, High Quality"}
Target Packaging: ${targetPackaging || "Standard Food Grade"}
Specific Challenges: ${challenges || "Shelf life & flavor profile"}
Estimated Target Budget: ${budget || "Not specified"}

Return ONLY a JSON object with this exact shape:
{
  "productName": "${productName}",
  "category": "${category}",
  "feasibilityScore": "92%",
  "roadmap": [
    { "phase": "Phase 1: Benchtop Formula & Matrix Design", "duration": "2-3 Weeks", "action": "Specific scientific formulation step..." },
    { "phase": "Phase 2: Micro & Accelerated Shelf Life Test", "duration": "3-4 Weeks", "action": "Specific preservation strategy..." },
    { "phase": "Phase 3: Pilot Scale Factory Trial & SOP", "duration": "2 Weeks", "action": "Co-packer scale-up strategy..." }
  ],
  "scientificConsiderations": [
    "Point 1 about hydrocolloids / water activity / flavor masking...",
    "Point 2 about thermal processing / barrier packaging...",
    "Point 3 about regulatory claims..."
  ],
  "recommendedServices": ["Food Formulation", "Shelf Life Extension", "Manufacturing Support"],
  "estimatedTimeline": "6-8 Weeks Total"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });

    const resultText = response.text || "{}";
    const parsed = JSON.parse(resultText);
    res.json(parsed);

  } catch (error: any) {
    console.warn("AI Formulate API call failed (returning resilient fallback):", error?.message || error);
    res.json(fallbackData);
  }
});

// Contact Submission Endpoint
app.post("/api/contact", (req, res) => {
  const { name, company, email, phone, requirements, budget, message } = req.body;
  console.log("New Food Alchemist Inquiry Received:", { name, company, email, phone, requirements, budget, message });
  res.json({
    success: true,
    message: "Thank you! Your inquiry has been received by our Food Science R&D team. An Alchemist Specialist will review your product goals and contact you within 24 hours.",
    referenceId: `FA-ORD-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

// PDF Food Science AI Chatbot Endpoint
app.post("/api/pdf-chat", async (req, res) => {
  const { message, history, pdfBase64, pdfName, samplePdfId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const activeDocName = pdfName || samplePdfId || MASTER_KNOWLEDGE_DOCUMENT.title;

  try {
    const ai = getAIClient();
    if (!ai) {
      const answer = generateKnowledgeFallback(message, activeDocName);
      return res.json({ answer });
    }

    const systemInstruction = `You are "Food Alchemist PDF Science Chatbot", an expert Senior Food Biochemist and Industrial R&D Consultant.
Your goal is to thoroughly read, analyze, and comprehend the user's PDF document and answer questions with technical precision.
- Reference key sections, ingredient specs, thermal processing parameters, pH limits, or regulatory numbers in the document when answering.
- Provide practical advice on food formulation, shelf-life, emulsification, and compliance.
- Format responses clearly using Markdown (headers, bullet points, bold text).`;

    let parts: any[] = [];

    // If custom base64 PDF is uploaded, pass as inlineData
    if (pdfBase64) {
      const cleanBase64 = pdfBase64.replace(/^data:application\/pdf;base64,/, "");
      parts.push({
        inlineData: {
          mimeType: "application/pdf",
          data: cleanBase64
        }
      });
    } else {
      // Inject the embedded Master Knowledge Base Document text into the model prompt
      parts.push({
        text: `ATTACHED SOURCE CODE KNOWLEDGE DOCUMENT:\n${MASTER_KNOWLEDGE_FULL_TEXT}\n\n`
      });
    }

    // Include chat history context if provided
    let conversationHistory = "";
    if (history && Array.isArray(history) && history.length > 0) {
      conversationHistory = "Recent Conversation History:\n" +
        history.slice(-6).map((h: any) => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.text}`).join("\n") + "\n\n";
    }

    const promptText = `${conversationHistory}Document Title: ${activeDocName}
User Question: ${message}`;

    parts.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: { parts },
      config: {
        systemInstruction,
        temperature: 0.3
      }
    });

    const answer = response.text || generateKnowledgeFallback(message, activeDocName);
    res.json({ answer });

  } catch (error: any) {
    console.warn("PDF Chatbot Gemini API call failed (using knowledge base RAG fallback):", error?.message || error);
    const fallbackAnswer = generateKnowledgeFallback(message, activeDocName);
    res.json({ answer: fallbackAnswer });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Food Alchemist V2 server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
