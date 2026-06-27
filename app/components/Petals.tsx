'use client';
import { useEffect, useRef } from 'react';

const EMOJIS = ['🌹','🌸','✿','❀','🌺'];

export default function Petals() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'petal';
      const dur = 8 + Math.random() * 12;
      const sway = (Math.random() - 0.5) * 120;
      p.style.cssText = `left:${Math.random()*100}%;--sway:${sway}px;animation-duration:${dur}s;animation-delay:${-Math.random()*dur}s`;
      p.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      frag.appendChild(p);
    }
    ref.current.appendChild(frag);
  }, []);
  return <div ref={ref} className="fixed inset-0 pointer-events-none z-10 overflow-hidden" />;
}
