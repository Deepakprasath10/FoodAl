import { useRef, useState, useEffect } from 'react';
import {
  FlaskConical, UtensilsCrossed, BarChart3,
  Settings2, ShieldCheck, ClipboardList, Users
} from 'lucide-react';
import logoIcon from '../assets/logo-icon.svg';
import heroBg from '../assets/Home page floater.jpeg';

/* ── Card data ── */
const CARDS = [
  {
    id: 1,
    title: 'Formulation Development',
    sub: 'Ingredient optimization',
    Icon: FlaskConical,
    iconBg: '#FDB913',
    iconColor: '#1B4F8A',
    anim: 'floatCard1 5.2s ease-in-out infinite 0s',
    pos: { top: '5%', left: '2%' },
  },
  {
    id: 2,
    title: 'Sensory Evaluation',
    sub: 'Taste • Texture • Aroma',
    Icon: UtensilsCrossed,
    iconBg: '#1B4F8A',
    iconColor: '#FDB913',
    anim: 'floatCard2 6.0s ease-in-out infinite 0.8s',
    pos: { top: '5%', right: '2%' },
  },
  {
    id: 3,
    title: 'Cost Optimization',
    sub: 'Better nutrition, better margins',
    Icon: BarChart3,
    iconBg: '#1B4F8A',
    iconColor: '#ffffff',
    anim: 'floatCard3 5.6s ease-in-out infinite 1.4s',
    pos: { top: '40%', left: '0%' },
  },
  {
    id: 4,
    title: 'Scale-Up Trials',
    sub: 'Lab to pilot to factory',
    Icon: Settings2,
    iconBg: '#FDB913',
    iconColor: '#1B4F8A',
    anim: 'floatCard4 6.4s ease-in-out infinite 0.4s',
    pos: { top: '40%', right: '0%' },
  },
  {
    id: 5,
    title: 'Shelf Life & Quality',
    sub: 'Stability & safety validation',
    Icon: ShieldCheck,
    iconBg: '#FDB913',
    iconColor: '#1B4F8A',
    anim: 'floatCard5 4.9s ease-in-out infinite 1.1s',
    pos: { bottom: '16%', left: '2%' },
  },
  {
    id: 6,
    title: 'Regulatory Support',
    sub: 'Labeling, compliance & documentation',
    Icon: ClipboardList,
    iconBg: '#1B4F8A',
    iconColor: '#FDB913',
    anim: 'floatCard6 5.8s ease-in-out infinite 1.8s',
    pos: { bottom: '16%', right: '2%' },
  },
];

/* Gold connector dots */
const DOTS = [
  { top: '21%', left: '30%' },
  { top: '21%', right: '27%' },
  { top: '50%', left: '16%' },
  { top: '50%', right: '16%' },
  { bottom: '29%', left: '28%' },
  { bottom: '29%', right: '25%' },
  { bottom: '16%', left: '48%' },
];

export default function FloatingIngredients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - r.left - r.width / 2) / (r.width / 2),
        y: (e.clientY - r.top - r.height / 2) / (r.height / 2),
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  /* Scene transform: auto live-photo OR mouse-driven tilt */
  const sceneStyle: React.CSSProperties = isHovered
    ? {
        transform: `perspective(1000px) rotateX(${-mousePos.y * 7}deg) rotateY(${mousePos.x * 7}deg) scale(1.015)`,
        transition: 'transform 0.12s ease-out',
      }
    : { animation: 'livePhoto 10s ease-in-out infinite' };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      className="relative w-full select-none"
      style={{ height: 'clamp(500px, 58vw, 660px)' }}
    >
      {/* ── Outer ambient glow ── */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(253,185,19,0.15) 0%, transparent 75%)' }} />

      {/* ── Tilting scene ── */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{ ...sceneStyle, transformOrigin: 'center center', willChange: 'transform' }}
      >
        {/* Lab background */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.05)' }}
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-[#004B84]/10" />

        {/* ── Dashed orbit ring — centred absolutely ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="310" height="310" viewBox="0 0 310 310" fill="none">
            <circle
              cx="155" cy="155" r="148"
              stroke="#FDB913"
              strokeWidth="1.4"
              strokeDasharray="9 5"
              opacity="0.40"
              style={{ animation: 'dashedSpin 22s linear infinite' }}
            />
          </svg>
        </div>

        {/* ── Gold dots ── */}
        {DOTS.map((pos, i) => (
          <div key={i} className="absolute w-3 h-3 rounded-full pointer-events-none z-10"
            style={{
              ...pos,
              background: '#FDB913',
              boxShadow: '0 0 7px 2px rgba(253,185,19,0.55)',
              animation: `pulseDot ${2.6 + i * 0.32}s ease-in-out infinite ${i * 0.38}s`,
            }}
          />
        ))}

        {/* ── 6 service cards ── */}
        {CARDS.map((c) => (
          <div key={c.id} className="absolute z-20" style={{ ...c.pos, animation: c.anim }}>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(255,255,255,0.6)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                minWidth: '170px',
                maxWidth: '198px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)',
              }}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: c.iconBg }}>
                <c.Icon size={19} color={c.iconColor} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-[11px] font-extrabold leading-tight text-[#1B4F8A]">{c.title}</p>
                <p className="text-[9.5px] font-medium mt-0.5 leading-tight text-[#6B7280]">{c.sub}</p>
              </div>
            </div>
          </div>
        ))}

        {/* ── CENTER CIRCLE — centred via flex ── */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div
            className="flex flex-col items-center justify-center rounded-full"
            style={{
              width: '252px',
              height: '252px',
              background: 'radial-gradient(circle at 38% 32%, rgba(255,255,255,0.98) 0%, rgba(235,244,255,0.96) 100%)',
              border: '2.5px solid rgba(27,79,138,0.20)',
              boxShadow: '0 16px 60px rgba(0,0,0,0.35), 0 0 0 10px rgba(253,185,19,0.08)',
              backdropFilter: 'blur(24px)',
              textAlign: 'center',
              padding: '22px 18px',
            }}
          >
            <img src={logoIcon} alt="Food Alchemist" style={{ width: 44, height: 44, marginBottom: 6 }} />
            <p style={{ fontWeight: 900, fontSize: 15, letterSpacing: '0.12em', color: '#1B4F8A', lineHeight: 1.1, margin: 0 }}>FOOD</p>
            <p style={{ fontWeight: 900, fontSize: 15, letterSpacing: '0.12em', color: '#1B4F8A', lineHeight: 1.1, marginBottom: 8 }}>ALCHEMIST</p>
            <p style={{ fontWeight: 800, fontSize: 12, color: '#1B4F8A', lineHeight: 1.35, marginBottom: 4 }}>
              From Idea<br />
              <span style={{ color: '#FDB913' }}>→</span> Product <span style={{ color: '#FDB913' }}>→</span> Market
            </p>
            <p style={{ fontSize: 9, fontWeight: 500, color: '#6B7280', lineHeight: 1.5, maxWidth: 180 }}>
              Science-led innovation to create healthy, tasty and commercially successful food products.
            </p>
          </div>
        </div>

        {/* ── Bottom pill ── */}
        <div className="absolute z-20"
          style={{ bottom: '3%', left: '50%', transform: 'translateX(-50%)', animation: 'floatCard7 5.5s ease-in-out infinite 0.6s', whiteSpace: 'nowrap' }}>
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl"
            style={{
              background: '#1B4F8A',
              border: '1px solid rgba(253,185,19,0.40)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.40)',
            }}
          >
            <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(253,185,19,0.18)' }}>
              <Users size={17} color="#FDB913" strokeWidth={2.2} />
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Market Ready Solutions</p>
              <p style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.70)', lineHeight: 1.4 }}>
                Consumer-focused. Scientifically proven. Commercially successful.
              </p>
            </div>
          </div>
        </div>

      </div>{/* end scene */}
    </div>
  );
}
