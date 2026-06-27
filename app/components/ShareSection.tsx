'use client';

const MSG = '🌟 You are cordially invited to the Engagement Ceremony of Anshu Kumari & Sunny Keshri! 20th August 2026 at Emerald Garden Banquet Hall, Danapur, Patna 💛';

export default function ShareSection() {
  const copy = () => navigator.clipboard?.writeText(MSG).then(() => alert('Invite copied! Share the love 💛'));
  const wa   = () => window.open('https://wa.me/?text=' + encodeURIComponent(MSG), '_blank');

  const icons = [
    { label:'WhatsApp', emoji:'💬', fn: wa },
    { label:'Copy Link', emoji:'🔗', fn: copy },
  ];

  return (
    <div style={{ padding:'40px 30px', textAlign:'center', borderTop:'1px solid rgba(212,175,55,.08)' }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:'10px', letterSpacing:'5px', color:'rgba(212,175,55,.4)', textTransform:'uppercase', marginBottom:'16px' }}>
        Spread the Joy
      </div>
      <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
        {icons.map(({ label, emoji, fn }) => (
          <button key={label} onClick={fn} title={label} style={{
            width:'44px', height:'44px', border:'1px solid rgba(212,175,55,.2)',
            display:'flex', alignItems:'center', justifyContent:'center',
            cursor:'pointer', fontSize:'18px', transition:'all .3s ease',
            background:'rgba(212,175,55,.03)', color:'rgba(212,175,55,.6)',
          }}>
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
