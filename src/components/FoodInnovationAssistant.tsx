import { useState, useRef, useEffect } from 'react';
import {
  User,
  Send,
  X,
  Sparkles,
  Minimize2,
  Maximize2,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  FlaskConical,
  RotateCcw,
  Check,
  Copy,
  Atom,
  Dna,
  Binary
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { getMockBotResponse } from '../data/chatbotKnowledgeBase';

// TODO: Replace mock responses with RAG API
// TODO: Integrate OpenAI
// TODO: Connect Vector Database
// TODO: Connect Knowledge Base

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  showCTA?: boolean;
}

const SUGGESTED_QUESTIONS = [
  '• I want to launch a protein bar',
  '• Can you improve shelf life?',
  '• What services do you provide?',
  '• How does product development work?',
  '• Do you help startups?',
  '• How can I book a consultation?'
];

export default function FoodInnovationAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const initialWelcomeMsg: Message = {
    id: 'welcome_msg',
    role: 'assistant',
    text: `👋 Welcome!

I'm your **Food AI Consultant**.

I can help you with:
🧪 **Product Formulation**
📦 **Shelf-Life Improvement**
🏭 **Manufacturing Support**
📋 **FSSAI Guidance**
🚀 **Launching New Food Products**

Choose a topic below or ask me anything.`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    showCTA: false
  };

  const [messages, setMessages] = useState<Message[]>([initialWelcomeMsg]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleOpenConsultation = () => {
    window.dispatchEvent(new CustomEvent('open-consultation'));
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).replace(/^[•\s]+/, '').trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI typing for 1.2 seconds before showing mock response
    setTimeout(() => {
      const response = getMockBotResponse(query);

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showCTA: response.showCTA
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleResetChat = () => {
    setMessages([initialWelcomeMsg]);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          whileHover={{
            y: -4,
            boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
            borderColor: 'rgba(244, 185, 66, 0.4)'
          }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: '#0D2B5C',
            borderColor: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '999px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)'
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-4 px-[22px] py-[18px] text-white border transition-all group duration-300 cursor-pointer"
          aria-label="Ask Food AI Assistant"
        >
          {/* Left Side 48x48 Golden Badge with Flask + Sparkles */}
          <div className="relative shrink-0">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FFD76A] to-[#F4B942] text-[#0D2B5C] flex items-center justify-center shadow-lg border border-white/20 relative"
            >
              <FlaskConical className="w-6 h-6 text-[#0D2B5C]" />
              <Sparkles className="w-3.5 h-3.5 text-[#0D2B5C] absolute -top-0.5 -right-0.5 animate-pulse" />
            </motion.div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#16C784] border-2 border-[#0D2B5C] rounded-full shadow-sm" />
          </div>

          {/* Launcher Text */}
          <div className="text-left pr-1 min-w-[170px]">
            <span className="block text-sm font-extrabold font-heading text-white tracking-wide leading-tight flex items-center gap-1.5">
              Ask Food AI
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 text-[#F4B942]" />
                </motion.span>
              )}
            </span>

            <div className="text-xs font-medium text-gray-300 transition-all duration-300 mt-0.5 flex items-center gap-1.5">
              {!isHovered ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16C784] inline-block shrink-0" />
                  <span className="text-[11px] text-[#F4B942] font-semibold">
                    Product Development Expert
                  </span>
                </>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[11px] text-white font-medium line-clamp-1"
                >
                  Helping founders build successful food products.
                </motion.span>
              )}
            </div>
          </div>
        </motion.button>
      )}

      {/* Main Chat Assistant Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`fixed z-[100] flex flex-col bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl overflow-hidden backdrop-blur-xl ${
              isExpanded
                ? 'inset-3 sm:inset-8'
                : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[460px] h-[680px] max-h-[88vh]'
            }`}
          >
            {/* Header */}
            <div className="bg-[#0D2B5C] text-white p-4 border-b border-[#F4B942]/30 flex items-center justify-between shrink-0 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#FFD76A] to-[#F4B942] text-[#0D2B5C] flex items-center justify-center font-bold shadow-md border border-white/20 relative">
                  <FlaskConical className="w-5 h-5 text-[#0D2B5C]" />
                  <Sparkles className="w-3 h-3 text-[#0D2B5C] absolute -top-0.5 -right-0.5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-2">
                    Food AI Consultant
                  </h3>
                  <p className="text-[11px] text-gray-300">
                    Food Scientist • Formulation Expert
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#16C784] animate-pulse" />
                    <span className="text-[10px] text-[#16C784] font-medium">● Online</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  title="Reset Conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
                  title={isExpanded ? 'Minimize' : 'Maximize'}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  title="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60">
              {/* Premium Empty State Visual Hero if user cleared chat */}
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#0D2B5C] to-[#1A438A] text-[#F4B942] flex items-center justify-center border border-[#F4B942]/30 shadow-xl">
                      <FlaskConical className="w-10 h-10 text-[#F4B942]" />
                    </div>
                    <div className="absolute -top-2 -right-2 p-2 rounded-xl bg-gradient-to-b from-[#FFD76A] to-[#F4B942] text-[#0D2B5C] shadow-md border border-white">
                      <Atom className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-extrabold text-base text-[#0D2B5C]">
                      Let's build your next successful food product.
                    </h4>
                    <p className="text-xs text-[#6B7280] max-w-xs leading-relaxed mt-1">
                      Ask me about product formulation, shelf life, food regulations, manufacturing, or commercialization.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[10px] text-gray-500 font-medium pt-2">
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-2xs">
                      <Dna className="w-3 h-3 text-[#F4B942]" />
                      Biochemistry
                    </span>
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-2xs">
                      <Binary className="w-3 h-3 text-[#0D2B5C]" />
                      Rheology & SOPs
                    </span>
                  </div>
                </div>
              )}

              {/* Message Feed */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#FFD76A] to-[#F4B942] text-[#0D2B5C] flex items-center justify-center font-bold shrink-0 mt-1 shadow-sm border border-white relative">
                      <FlaskConical className="w-4.5 h-4.5 text-[#0D2B5C]" />
                    </div>
                  )}

                  <div className="max-w-[85%] space-y-3">
                    <div
                      className={`p-4 rounded-2xl text-xs leading-relaxed relative group shadow-sm ${
                        msg.role === 'user'
                          ? 'bg-[#0D2B5C] text-white rounded-br-none'
                          : 'bg-white text-[#1F2937] border border-[#E5E7EB] rounded-bl-none'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="markdown-body space-y-2">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      )}

                      <div className="flex items-center justify-between pt-2 border-t border-black/5 text-[9px] text-gray-400 mt-2">
                        <span>{msg.timestamp}</span>
                        {msg.role === 'assistant' && (
                          <button
                            onClick={() => copyToClipboard(msg.text, msg.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[#0D2B5C] hover:underline font-medium"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-[#16C784]" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Copy
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Lead Generation CTA Card */}
                    {msg.showCTA && msg.role === 'assistant' && (
                      <div className="bg-gradient-to-br from-[#0D2B5C] to-[#1A438A] text-white p-4 rounded-2xl border border-[#F4B942]/40 shadow-lg space-y-3">
                        <div className="flex items-start gap-2.5">
                          <div className="p-2 rounded-xl bg-[#F4B942] text-[#0D2B5C] shrink-0 font-bold">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="font-heading font-extrabold text-xs text-white">
                              Need expert guidance?
                            </h5>
                            <p className="text-[11px] text-gray-300 mt-0.5 leading-relaxed">
                              Our food scientists and product development experts are ready to help bring your idea to market.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5 pt-1">
                          <button
                            onClick={handleOpenConsultation}
                            className="px-2.5 py-2 rounded-xl bg-[#F4B942] hover:bg-[#e0a734] text-[#0D2B5C] font-bold text-[10px] transition-all flex items-center justify-center gap-1 shadow"
                          >
                            <Calendar className="w-3 h-3" />
                            Book
                          </button>

                          <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-2.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-[10px] transition-all flex items-center justify-center gap-1 border border-white/20 text-center"
                          >
                            Contact
                          </Link>

                          <a
                            href="https://wa.me/916383042701?text=Hi%20Food%20Alchemist%20Team,%20I'm%20interested%20in%20food%20product%20development."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-2 rounded-xl bg-[#16C784] hover:bg-emerald-600 text-white font-semibold text-[10px] transition-all flex items-center justify-center gap-1 text-center shadow"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-[#F4B942] text-[#0D2B5C] flex items-center justify-center font-bold shrink-0 mt-1 shadow-sm">
                      <User className="w-4.5 h-4.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Animated Typing Dots Loading State */}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#FFD76A] to-[#F4B942] text-[#0D2B5C] flex items-center justify-center font-bold shrink-0 mt-1 shadow-sm border border-white">
                    <FlaskConical className="w-4.5 h-4.5 text-[#0D2B5C]" />
                  </div>
                  <div className="bg-white text-[#1F2937] border border-[#E5E7EB] rounded-2xl rounded-bl-none px-4 py-3 text-xs flex items-center gap-1.5 shadow-sm">
                    <span className="text-gray-400 font-medium">Food AI Consultant is analyzing</span>
                    <span className="flex items-center gap-1 ml-1">
                      <span className="w-1.5 h-1.5 bg-[#0D2B5C] rounded-full animate-bounce [animation-delay:-0.32s]" />
                      <span className="w-1.5 h-1.5 bg-[#F4B942] rounded-full animate-bounce [animation-delay:-0.16s]" />
                      <span className="w-1.5 h-1.5 bg-[#0D2B5C] rounded-full animate-bounce" />
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Question Chips */}
            <div className="p-2.5 bg-white border-t border-[#E5E7EB] overflow-x-auto no-scrollbar shrink-0">
              <div className="flex gap-1.5 min-w-max">
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    disabled={isTyping}
                    className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#0D2B5C] hover:text-white border border-[#E5E7EB] text-[#1F2937] text-[11px] font-medium transition-all whitespace-nowrap shadow-2xs"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <div className="p-3 bg-white border-t border-[#E5E7EB] shrink-0 space-y-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask about formulation, shelf life, packaging..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-slate-50 text-xs text-[#1F2937] focus:outline-none focus:border-[#0D2B5C] focus:bg-white transition-all placeholder:text-gray-400"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-[#0D2B5C] hover:bg-[#1A438A] text-[#F4B942] disabled:opacity-40 transition-all border border-[#F4B942]/40 shadow-sm shrink-0"
                  aria-label="Send query"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Bottom Quick Action Bar */}
              <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[10px] text-gray-500">
                <button
                  onClick={handleOpenConsultation}
                  className="hover:text-[#0D2B5C] font-medium flex items-center gap-1 transition-colors"
                >
                  <Calendar className="w-3 h-3 text-[#F4B942]" />
                  Book Consultation
                </button>

                <a
                  href="tel:+916383042701"
                  className="hover:text-[#0D2B5C] font-medium flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#16C784]" />
                  Call Us
                </a>

                <a
                  href="mailto:foodalchemist269@gmail.com"
                  className="hover:text-[#0D2B5C] font-medium flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3 h-3 text-blue-600" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
