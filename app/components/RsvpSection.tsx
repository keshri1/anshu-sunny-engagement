'use client';
import { useState } from 'react';
import type { Translations } from '../utils/translations';

interface RsvpSectionProps {
  t: Pick<Translations, 'willYouJoinUs' | 'rsvp' | 'rsvpSubtext' | 'attending' | 'notAttending'>;
  isHindi?: boolean;
}

function launch() {
  const emojis = ['🎉','✨','💛','🌟','🎊','💍','🌸'];
  for (let i = 0; i < 14; i++) {
    setTimeout(() => {
      const fw = document.createElement('div');
      fw.className = 'firework';
      fw.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      fw.style.left = (15 + Math.random() * 70) + '%';
      fw.style.top  = (15 + Math.random() * 60) + '%';
      document.body.appendChild(fw);
      setTimeout(() => fw.remove(), 1400);
    }, i * 90);
  }
}

function launchSad() {
  const emojis = ['🤍','💙','🌧️','🫂'];
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'float-emoji';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = (20 + Math.random() * 60) + '%';
      el.style.top  = (30 + Math.random() * 40) + '%';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1500);
    }, i * 120);
  }
}

export default function RsvpSection({ t, isHindi = false }: RsvpSectionProps) {
  const [msg, setMsg] = useState('');

  const yes = () => {
    setMsg(isHindi ? '💛 हम आपके साथ उत्सव मनाने के लिए बहुत उत्साहित हैं!' : '💛 Yay! We cannot wait to celebrate with you!');
    launch();
  };
  const no = () => {
    setMsg(isHindi ? '🤍 हम आपको याद करेंगे, लेकिन आपके आशीर्वाद हमारे लिए बहुत महत्वपूर्ण हैं!' : '🤍 We will miss you, but your blessings mean the world!');
    launchSad();
  };

  return (
    <div style={{ padding:'80px 30px', textAlign:'center', borderTop:'1px solid rgba(212,175,55,.08)' }}>
      <div style={{ fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "'Cinzel',serif", fontSize:'10px', letterSpacing:isHindi ? '0px' : '5px', color:'rgba(212,175,55,.5)', textTransform: isHindi ? 'none' : 'uppercase', marginBottom:'20px' }}>
        {t.willYouJoinUs}
      </div>
      <div style={{ fontFamily:"'Dancing Script',cursive", fontSize:'52px', color:'#f0d080', marginBottom:'12px', fontWeight:400 }}>
        {t.rsvp}
      </div>
      <div style={{ fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "'Cormorant Garamond',serif", fontSize:'16px', color:'rgba(255,240,200,.5)', fontStyle:'italic', marginBottom:'40px' }}>
        {t.rsvpSubtext}
      </div>
      <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
        <button onClick={yes} style={{
          padding:'14px 40px', fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "'Cinzel',serif", fontSize:'11px', letterSpacing:isHindi ? '0px' : '4px',
          textTransform: isHindi ? 'none' : 'uppercase', cursor:'pointer', border:'none',
          background:'linear-gradient(135deg,#d4af37,#b8960c)', color:'#0a0208', fontWeight:600,
          transition:'all .3s ease',
        }}>{t.attending}</button>
        <button onClick={no} style={{
          padding:'14px 40px', fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "'Cinzel',serif", fontSize:'11px', letterSpacing:isHindi ? '0px' : '4px',
          textTransform: isHindi ? 'none' : 'uppercase', cursor:'pointer',
          background:'transparent', border:'1px solid rgba(212,175,55,.3)', color:'rgba(212,175,55,.6)',
          transition:'all .3s ease',
        }}>{t.notAttending}</button>
      </div>
      {msg && (
        <div style={{ marginTop:'24px', fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontStyle:'italic', color:'rgba(240,208,128,.8)' }}>
          {msg}
        </div>
      )}
    </div>
  );
}
