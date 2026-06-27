'use client';
import { useState } from 'react';

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

export default function RsvpSection() {
  const [msg, setMsg] = useState('');

  const yes = () => { setMsg('💛 Yay! We cannot wait to celebrate with you!'); launch(); };
  const no  = () => { setMsg('🤍 We will miss you, but your blessings mean the world!'); launchSad(); };

  return (
    <div style={{ padding:'80px 30px', textAlign:'center', borderTop:'1px solid rgba(212,175,55,.08)' }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:'10px', letterSpacing:'5px', color:'rgba(212,175,55,.5)', textTransform:'uppercase', marginBottom:'20px' }}>
        Will You Join Us?
      </div>
      <div style={{ fontFamily:"'Dancing Script',cursive", fontSize:'52px', color:'#f0d080', marginBottom:'12px', fontWeight:400 }}>
        RSVP
      </div>
      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', color:'rgba(255,240,200,.5)', fontStyle:'italic', marginBottom:'40px' }}>
        Your presence is our greatest gift
      </div>
      <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
        <button onClick={yes} style={{
          padding:'14px 40px', fontFamily:"'Cinzel',serif", fontSize:'11px', letterSpacing:'4px',
          textTransform:'uppercase', cursor:'pointer', border:'none',
          background:'linear-gradient(135deg,#d4af37,#b8960c)', color:'#0a0208', fontWeight:600,
          transition:'all .3s ease',
        }}>💛 Joyfully Attending</button>
        <button onClick={no} style={{
          padding:'14px 40px', fontFamily:"'Cinzel',serif", fontSize:'11px', letterSpacing:'4px',
          textTransform:'uppercase', cursor:'pointer',
          background:'transparent', border:'1px solid rgba(212,175,55,.3)', color:'rgba(212,175,55,.6)',
          transition:'all .3s ease',
        }}>Will Miss You Both</button>
      </div>
      {msg && (
        <div style={{ marginTop:'24px', fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontStyle:'italic', color:'rgba(240,208,128,.8)' }}>
          {msg}
        </div>
      )}
    </div>
  );
}
