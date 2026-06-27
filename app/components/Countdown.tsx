'use client';
import { Fragment, useEffect, useState } from 'react';

export default function Countdown() {
  const [t, setT] = useState({ d:'00', h:'00', m:'00', s:'00' });
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
    { val: t.d, label: 'Days' },
    { val: t.h, label: 'Hours' },
    { val: t.m, label: 'Mins' },
    { val: t.s, label: 'Secs' },
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
