import { useEffect, useState } from 'react';

export default function CursorBlob() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Background Soft Spotlight Glow */}
      <div
        className="fixed pointer-events-none z-30 transition-transform duration-300 ease-out hidden lg:block"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '400px' : '300px',
          height: isHovered ? '400px' : '300px',
          background: 'radial-gradient(circle, rgba(254, 178, 26, 0.08) 0%, rgba(0, 75, 132, 0.04) 40%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      {/* Tiny Precision Precision Cursor Ring */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-75 ease-out hidden lg:block rounded-full border border-[#FEB21A]/50 mix-blend-difference"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '32px' : '16px',
          height: isHovered ? '32px' : '16px',
          backgroundColor: isHovered ? 'rgba(254, 178, 26, 0.2)' : 'transparent',
        }}
      />
    </>
  );
}
