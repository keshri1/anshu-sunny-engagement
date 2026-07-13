'use client';
import { Fragment, useEffect, useState } from 'react';
import { translations } from '../utils/translations';
import { localizeNumbers } from '../utils/numberFormatting';

interface CountdownProps {
  language: string;
}

export default function Countdown({ language }: CountdownProps) {
  const [t, setT] = useState({ d:'00', h:'00', m:'00', s:'00' });
  const labels = translations[language as 'en' | 'hi'];
  useEffect(() => {
    const target = new Date('2026-08-20T10:00:00+05:30');
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setT({ d:'00', h:'00', m:'00', s:'00' }); return; }
      const pad = (n:number) => String(n).padStart(2,'0');
      setT({
        d: pad(Math.floor(diff/86400000)),
        h: pad(Math.floor((diff%86400000)/3600000)),
        m: pad(Math.floor((diff%3600000)/60000)),
        s: pad(Math.floor((diff%60000)/1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { val: localizeNumbers(t.d, language), label: labels.days },
    { val: localizeNumbers(t.h, language), label: labels.hours },
    { val: localizeNumbers(t.m, language), label: labels.mins },
    { val: localizeNumbers(t.s, language), label: labels.secs },
  ];

  return (
    <div style={{ display:'flex', gap:'20px', justifyContent:'center', alignItems:'flex-start', flexWrap:'wrap' }}>
      {items.map(({ val, label }, i) => (
        <Fragment key={label}>
          {i > 0 && (
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:'36px', color:'rgba(212,175,55,.3)', paddingTop:'6px' }}>:</span>
          )}
          <div style={{ textAlign:'center', minWidth:'70px' }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'42px', color:'#f0d080', lineHeight:1, fontWeight:600, textShadow:'0 0 20px rgba(212,175,55,.4)' }}>{val}</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'11px', color:'rgba(212,175,55,.5)', letterSpacing:'3px', textTransform:'uppercase', marginTop:'4px' }}>{label}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
