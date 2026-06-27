'use client';
import { useEffect, useRef } from 'react';

export default function Stars() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 130; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const sz = Math.random() * 2.5 + 0.5;
      s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--dur:${2+Math.random()*4}s;--delay:${-Math.random()*5}s`;
      frag.appendChild(s);
    }
    ref.current.appendChild(frag);
  }, []);
  return <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
}
