import type { Metadata } from 'next';
import Stars from './components/Stars';
import Petals from './components/Petals';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import SectionReveal from './components/SectionReveal';
import RsvpSection from './components/RsvpSection';
// import ShareSection from './components/ShareSection';

export const metadata: Metadata = {
  title: 'Anshu & Sunny — Ring Ceremony · 20 August 2026',
  description: 'You are cordially invited to celebrate the Engagement of Anshu Kumari & Sunny Keshri on 20th August 2026 at Emerald Garden Banquet Hall, Danapur, Patna.',
  openGraph: {
    title: '💍 Anshu & Sunny — Ring Ceremony · 20 August 2026',
    description: 'Join us to celebrate love at Emerald Garden Banquet Hall, Patna.',
  },
};

const G = 'rgba(212,175,55,';
const gold     = (a=1)   => `${G}${a})`;
const goldText = { color: '#f0d080' } as const;

export default function Page() {
  const mapUrl = 'https://maps.google.com/?q=Emerald+Garden+Banquet+Hall+Danapur+Patna+Bihar';

  return (
    <>
      {/* Fixed layers */}
      <Stars />
      <Petals />
      <MusicPlayer />

      {/* ── Main wrapper ── */}
      <div style={{
        position:'relative', zIndex:10,
        width:'100%', maxWidth:'680px', margin:'0 auto',
        animation:'fadeIn 1s ease both',
      }}>

        {/* ══════════ HERO ══════════ */}
        <section style={{
          minHeight:'100vh', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', textAlign:'center',
          padding:'40px 30px', position:'relative',
          background:'radial-gradient(ellipse at 50% 0%, #1a0510 0%, #0a0208 60%)',
        }}>

          {/* Top ornament SVG */}
          <svg className="anim-2" width="180" height="60" viewBox="0 0 200 70" fill="none" style={{ marginBottom:'30px' }}>
            <path d="M100 10 L110 25 L130 20 L120 35 L135 45 L115 45 L110 65 L100 50 L90 65 L85 45 L65 45 L80 35 L70 20 L90 25 Z"
              fill={gold(.15)} stroke={gold(.5)} strokeWidth="0.5"/>
            <circle cx="100" cy="37" r="8" fill="none" stroke={gold(.4)} strokeWidth="0.5"/>
            <path d="M20 35 Q50 20 90 33" stroke={gold(.3)} strokeWidth="0.5" fill="none"/>
            <path d="M180 35 Q150 20 110 33" stroke={gold(.3)} strokeWidth="0.5" fill="none"/>
            <circle cx="15" cy="35" r="3" fill={gold(.4)}/>
            <circle cx="185" cy="35" r="3" fill={gold(.4)}/>
          </svg>

          {/* Badge */}
          <div className="anim-3" style={{
            display:'inline-block', border:`1px solid ${gold(.4)}`,
            padding:'6px 24px', fontFamily:"'Cinzel',serif",
            fontSize:'10px', letterSpacing:'5px', color:gold(.8),
            textTransform:'uppercase', marginBottom:'40px',
          }}>
            We warmly invite you to join us to celebrate the engagement of
          </div>

          {/* Names */}
          <div className="anim-4" style={{ marginBottom:'20px' }}>
            <div className="shimmer-text" style={{ fontFamily:"'Dancing Script',cursive", fontSize:'clamp(52px,10vw,72px)', lineHeight:1.1, fontWeight:400 }}>
              Anshu
            </div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:'rgba(255,240,200,.65)', lineHeight:1.6, marginTop:'8px' }}>
              Daughter of Shri. &amp; Smt. Manoj<br/>
              and Sushma Keshri
            </div>
            <div className="heartbeat" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'44px', color:gold(.5), display:'block', lineHeight:1.2, margin:'12px 0' }}>
              ♡
            </div>
            <div className="shimmer-text" style={{ fontFamily:"'Dancing Script',cursive", fontSize:'clamp(52px,10vw,72px)', lineHeight:1.1, fontWeight:400 }}>
              Sunny
            </div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:'rgba(255,240,200,.65)', lineHeight:1.6, marginTop:'8px' }}>
              Son of Shri. &amp; Smt. Omkar<br/>
              and Prabhawati Keshri
            </div>
          </div>

          {/* Tagline */}
          <div className="anim-5" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'18px', color:'rgba(240,208,128,.6)', margin:'30px 0 40px', letterSpacing:'2px' }}>
            Two souls. One beautiful beginning.
          </div>

          {/* Divider */}
          <div className="anim-6" style={{ display:'flex', alignItems:'center', gap:'16px', justifyContent:'center', margin:'0 0 24px' }}>
            <div style={{ width:'80px', height:'1px', background:`linear-gradient(to right,transparent,${gold(.6)},transparent)` }}/>
            <div style={{ width:'8px', height:'8px', background:gold(.6), transform:'rotate(45deg)' }}/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L14 8 L20 8 L15.5 12 L17.5 18 L12 14.5 L6.5 18 L8.5 12 L4 8 L10 8 Z" fill={gold(.5)}/>
            </svg>
            <div style={{ width:'8px', height:'8px', background:gold(.6), transform:'rotate(45deg)' }}/>
            <div style={{ width:'80px', height:'1px', background:`linear-gradient(to right,transparent,${gold(.6)},transparent)` }}/>
          </div>

          {/* Date label */}
          <div className="anim-6" style={{ fontFamily:"'Cinzel',serif", fontSize:'13px', letterSpacing:'6px', color:gold(.7), textTransform:'uppercase', margin:'20px 0 8px' }}>
            20 · August · 2026
          </div>

          {/* Ring SVG */}
          <svg className="ring-pulse anim-7" width="90" height="90" viewBox="0 0 90 90" fill="none" style={{ display:'block', margin:'0 auto 24px' }}>
            <circle cx="45" cy="48" r="22" stroke={gold(.7)} strokeWidth="2" fill="none"/>
            <circle cx="45" cy="48" r="17" stroke={gold(.3)} strokeWidth="1" fill="none"/>
            <path d="M30 28 L38 18 L45 22 L52 18 L60 28 L45 22 Z" fill={gold(.15)} stroke={gold(.6)} strokeWidth="0.8"/>
            <path d="M38 18 L45 26 L52 18" fill={gold(.08)} stroke={gold(.4)} strokeWidth="0.8"/>
            <circle cx="45" cy="22" r="4" fill={gold(.2)} stroke={gold(.6)} strokeWidth="0.8"/>
            <path d="M30 28 L34 36 L45 28 L56 36 L60 28" fill="none" stroke={gold(.5)} strokeWidth="0.8"/>
          </svg>

          {/* Countdown */}
          <div className="anim-8" style={{ margin:'10px 0 30px' }}>
            <Countdown />
          </div>

          {/* Scroll hint */}
          <div className="scroll-hint" style={{
            position:'absolute', bottom:'20px', left:'50%',
            display:'flex', flexDirection:'column', alignItems:'center', gap:'6px',
            color:gold(.4), fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', fontFamily:"'Cinzel',serif",
            transform:'translateX(-50%)',
            pointerEvents:'none',
            opacity:0.9,
          }}>
            Scroll
            <div style={{ width:'16px', height:'16px', borderRight:`1px solid ${gold(.4)}`, borderBottom:`1px solid ${gold(.4)}`, transform:'rotate(45deg)' }}/>
          </div>
        </section>

        {/* ══════════ STORY ══════════ */}
        <SectionReveal>
          <section style={{ padding:'60px 30px', textAlign:'center', borderTop:`1px solid ${gold(.08)}` }}>
            {/* <div style={{ fontFamily:"'Cinzel',serif", fontSize:'10px', letterSpacing:'5px', color:gold(.5), textTransform:'uppercase', marginBottom:'30px' }}>Their Story</div> */}
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'36px', color:'rgba(240,208,128,.9)', marginBottom:'20px', fontWeight:300 }}>
              A Love Destined to Be
            </div>
            {/* Quote block */}
            <div style={{ background:gold(.06), border:`1px solid ${gold(.15)}`, padding:'24px', margin:'30px 0', position:'relative', fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'17px', color:'rgba(255,240,200,.65)', lineHeight:1.8 }}>
              <span style={{ fontFamily:"'Cinzel',serif", fontSize:'60px', color:gold(.2), position:'absolute', top:'-10px', left:'12px', lineHeight:1, fontStyle:'normal' }}>"</span>
              They say when the universe conspires, two hearts find their way to each other.
              For <span style={{ color:'rgba(240,208,128,.9)', fontStyle:'italic' }}>Anshu &amp; Sunny</span>, that moment has arrived —
              and we couldn't be more overjoyed to share it with the people who matter most.
            </div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', color:'rgba(255,240,200,.6)', lineHeight:1.9, maxWidth:'500px', margin:'0 auto', fontWeight:300 }}>
              With hearts full of joy and eyes full of starlight, two families invite you to witness the beautiful beginning of a lifelong love story. Come, celebrate, dance, laugh — because love is best when shared.
            </p>
          </section>
        </SectionReveal>

        {/* ══════════ DETAILS ══════════ */}
        <SectionReveal>
          <section style={{ padding:'60px 30px', textAlign:'center', borderTop:`1px solid ${gold(.08)}`, background:gold(.03) }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'10px', letterSpacing:'5px', color:gold(.5), textTransform:'uppercase', marginBottom:'30px' }}>Celebrate With Us</div>

            {/* Cards grid */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px' }}>
              {/* Date */}
              <div style={{ background:gold(.04), border:`1px solid ${gold(.15)}`, padding:'28px 20px', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(to right,transparent,${gold(.5)},transparent)` }}/>
                <div style={{ fontSize:'24px', marginBottom:'12px' }}>📅</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'9px', letterSpacing:'4px', color:gold(.5), textTransform:'uppercase', marginBottom:'8px' }}>Date</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', color:'rgba(240,208,128,.9)', lineHeight:1.4, fontWeight:300 }}>Thursday<br/>20th August 2026</div>
              </div>
              {/* Occasion */}
              <div style={{ background:gold(.04), border:`1px solid ${gold(.15)}`, padding:'28px 20px', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(to right,transparent,${gold(.5)},transparent)` }}/>
                <div style={{ fontSize:'24px', marginBottom:'12px' }}>✨</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'9px', letterSpacing:'4px', color:gold(.5), textTransform:'uppercase', marginBottom:'8px' }}>Occasion</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', color:'rgba(240,208,128,.9)', lineHeight:1.4, fontWeight:300 }}>Ring Ceremony<br/>&amp; Engagement</div>
              </div>
              {/* Venue — full width */}
              <div style={{ gridColumn:'1 / -1', background:gold(.04), border:`1px solid ${gold(.15)}`, padding:'28px 20px', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(to right,transparent,${gold(.5)},transparent)` }}/>
                <div style={{ fontSize:'24px', marginBottom:'12px' }}>📍</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'9px', letterSpacing:'4px', color:gold(.5), textTransform:'uppercase', marginBottom:'8px' }}>Venue</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', color:'rgba(240,208,128,.9)', lineHeight:1.4, fontWeight:300 }}>Emerald Garden Banquet Hall</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', color:'rgba(255,240,200,.55)', lineHeight:1.8, maxWidth:'450px', margin:'10px auto 0', fontStyle:'italic' }}>
                  Opp. Trimurti Apartment, Near Majestic Janki City,<br/>
                  Near Digha Bridge Link Road (Pillar No. 242),<br/>
                  Danapur, Patna, Bihar — 801503
                </div>
              </div>
            </div>

            <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{
              display:'inline-block', border:`1px solid ${gold(.4)}`, padding:'12px 36px',
              fontFamily:"'Cinzel',serif", fontSize:'11px', letterSpacing:'4px', color:gold(.8),
              textTransform:'uppercase', textDecoration:'none', cursor:'pointer',
              background:gold(.05), transition:'all .3s ease', marginTop:'28px',
            }}>
              Open in Maps ↗
            </a>
          </section>
        </SectionReveal>

        {/* ══════════ DRESS CODE / FUN ══════════ */}
        <SectionReveal>
          <section style={{ padding:'60px 30px', textAlign:'center', borderTop:`1px solid ${gold(.08)}` }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'10px', letterSpacing:'5px', color:gold(.5), textTransform:'uppercase', marginBottom:'30px' }}>Things to Know</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'36px', color:'rgba(240,208,128,.9)', marginBottom:'20px', fontWeight:300 }}>
              Dress to Impress 💛
            </div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', color:'rgba(255,240,200,.6)', lineHeight:1.9, maxWidth:'500px', margin:'0 auto 30px', fontWeight:300 }}>
              Wear your finest ethnic wear — think royal, think vibrant, think <span style={{ color:'rgba(240,208,128,.9)', fontStyle:'italic' }}>gold</span>. Come hungry, come happy, and come ready to dance!
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
              {['🪴 Wear your finest ethnic','🎶 Live Music & DJ','🍽 Grand Feast Awaits','📸 Photo Booth Fun','💃 Dance Like Nobody\'s Watching'].map(n => (
                <span key={n} style={{ display:'inline-block', background:gold(.08), border:`1px solid ${gold(.2)}`, padding:'10px 20px', fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'14px', color:'rgba(240,208,128,.7)', margin:'8px' }}>
                  {n}
                </span>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* ══════════ FAMILIES ══════════ */}
        <SectionReveal>
          <section style={{ padding:'60px 30px', textAlign:'center', borderTop:`1px solid ${gold(.08)}` }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'10px', letterSpacing:'5px', color:gold(.5), textTransform:'uppercase', marginBottom:'30px' }}>With Blessings From</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'36px', color:'rgba(240,208,128,.9)', marginBottom:'30px', fontWeight:300 }}>Our Beloved Families</div>
            {[
              { side: "Bride's Family", name: 'Kumari Family, Patna' },
              { side: "Groom's Family", name: 'Keshri Family, Patna' },
            ].map(({ side, name }) => (
              <div key={side} style={{ margin:'20px 0' }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'13px', letterSpacing:'4px', textTransform:'uppercase', color:gold(.4), marginBottom:'12px' }}>{side}</div>
                <span style={{ display:'inline-block', border:`1px solid ${gold(.25)}`, padding:'6px 18px', fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', color:'rgba(255,240,200,.5)', fontStyle:'italic' }}>
                  {name}
                </span>
              </div>
            ))}
          </section>
        </SectionReveal>

        {/* ══════════ RSVP ══════════ */}
        <SectionReveal>
          <RsvpSection />
        </SectionReveal>

        {/* ══════════ SHARE ══════════ */}
        {/* <SectionReveal>
          <ShareSection />
        </SectionReveal> */}

        {/* ══════════ FOOTER ══════════ */}
        <SectionReveal>
          <footer style={{ padding:'40px 30px', textAlign:'center', borderTop:`1px solid ${gold(.08)}` }}>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" style={{ display:'block', margin:'0 auto 20px' }}>
              <path d="M10 20 Q30 5 60 20 Q90 35 110 20" stroke={gold(.3)} strokeWidth="0.8" fill="none"/>
              <circle cx="60" cy="20" r="4" fill={gold(.3)}/>
              <circle cx="10" cy="20" r="2" fill={gold(.2)}/>
              <circle cx="110" cy="20" r="2" fill={gold(.2)}/>
            </svg>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'15px', color:'rgba(255,240,200,.3)', lineHeight:2 }}>
              "Two hearts, one beautiful forever."<br/>
              With love &amp; a million blessings — see you soon! 🌸
            </div>
            <div style={{ fontFamily:"'Dancing Script',cursive", fontSize:'28px', color:'rgba(240,208,128,.5)', marginTop:'16px' }}>
              Anshu ♡ Sunny
            </div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'9px', letterSpacing:'3px', color:gold(.2), marginTop:'30px', textTransform:'uppercase' }}>
              20 · August · 2026 · Patna, Bihar
            </div>
          </footer>
        </SectionReveal>

      </div>
    </>
  );
}
