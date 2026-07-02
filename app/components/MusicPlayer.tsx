'use client';
import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopSynth = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }

    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.1);
    }
  };

  const startSynth = () => {
    const AudioCtx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioCtx();
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.gain.value = 0.03;
      gainNodeRef.current.connect(audioContextRef.current.destination);
    }

    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }

    const notes = [261.63, 329.63, 392, 523.25, 392, 329.63];
    let step = 0;

    const oscillator = ctx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = notes[0];
    oscillator.connect(gainNodeRef.current!);
    oscillator.start();

    oscillatorRef.current = oscillator;

    intervalRef.current = window.setInterval(() => {
      const nextNote = notes[step % notes.length];
      oscillator.frequency.setValueAtTime(nextNote, ctx.currentTime);
      step += 1;
    }, 400);
  };

  useEffect(() => {
    return () => {
      stopSynth();
      audioRef.current?.pause();

      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!playing) {
      stopSynth();
      audioRef.current?.pause();
      return;
    }

    const audio = audioRef.current;
    if (audio) {
      const playAudio = async () => {
        try {
          audio.currentTime = 0;
          await audio.play();
          stopSynth();
        } catch {
          startSynth();
        }
      };

      void playAudio();
      return;
    }

    startSynth();
  }, [playing]);

  const toggle = () => setPlaying((value) => !value);

  return (
    <div style={{
      position:'fixed', bottom:'24px', right:'24px', zIndex:100,
      display:'flex', alignItems:'center', gap:'12px',
      background:'rgba(10,2,8,.85)', border:'1px solid rgba(212,175,55,.3)',
      padding:'10px 16px', backdropFilter:'blur(10px)',
    }}>
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        style={{
          width:'36px', height:'36px', borderRadius:'50%',
          background:'rgba(212,175,55,.15)', border:'1px solid rgba(212,175,55,.4)',
          display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer', color:'#f0d080', fontSize:'14px', flexShrink:0,
          transition:'background .3s',
        }}
      >
        {playing ? '⏸' : '▶'}
      </button>
      <div>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'9px', letterSpacing:'2px', color:'rgba(212,175,55,.9)', textTransform:'uppercase', whiteSpace:'nowrap' }}>
          Kesariya Tera Ishq Hai Piya
        </div>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'12px', color:'rgba(255,240,200,.4)', fontStyle:'italic' }}>
          Arijit Singh
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'2px', marginLeft:'4px' }}>
        {[0,1,2,3].map((item) => (
          <div
            key={item}
            className={`wave-bar${playing ? '' : ' paused'}`}
            style={{ width:'3px', background:'rgba(212,175,55,.6)', borderRadius:'2px' }}
          />
        ))}
      </div>
    </div>
  );
}
