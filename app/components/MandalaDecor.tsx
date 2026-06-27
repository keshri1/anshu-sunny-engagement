'use client';

interface Props {
  size?: number;
  opacity?: number;
  className?: string;
}

export default function MandalaDecor({ size = 200, opacity = 0.15, className = '' }: Props) {
  const cx = size / 2;
  const r = size / 2;

  const petals = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const x = cx + (r * 0.38) * Math.cos(angle);
    const y = cx + (r * 0.38) * Math.sin(angle);
    return { x, y, angle: i * 30 };
  });

  const dots = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 15 * Math.PI) / 180;
    const dist = r * 0.67;
    return {
      x: cx + dist * Math.cos(angle),
      y: cx + dist * Math.sin(angle),
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={className}
      style={{ opacity }}
    >
      {/* Outer ring */}
      <circle cx={cx} cy={cx} r={r * 0.92} stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="3 6" />
      <circle cx={cx} cy={cx} r={r * 0.78} stroke="#C9A84C" strokeWidth="0.3" />

      {/* Dot ring */}
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.2" fill="#C9A84C" />
      ))}

      {/* Inner petal ring */}
      {petals.map((p, i) => (
        <g key={i} transform={`rotate(${p.angle}, ${cx}, ${cx})`}>
          <ellipse
            cx={cx}
            cy={cx - r * 0.38}
            rx={r * 0.07}
            ry={r * 0.14}
            fill="#C9A84C"
            opacity="0.7"
          />
        </g>
      ))}

      {/* Inner circles */}
      <circle cx={cx} cy={cx} r={r * 0.22} stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx={cx} cy={cx} r={r * 0.12} fill="#C9A84C" opacity="0.4" />
      <circle cx={cx} cy={cx} r={r * 0.06} fill="#C9A84C" opacity="0.8" />

      {/* Diamond accents at cardinals */}
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const dx = cx + r * 0.78 * Math.cos(rad);
        const dy = cx + r * 0.78 * Math.sin(rad);
        return (
          <g key={i} transform={`translate(${dx}, ${dy}) rotate(${angle})`}>
            <polygon points="0,-5 3,0 0,5 -3,0" fill="#C9A84C" opacity="0.8" />
          </g>
        );
      })}
    </svg>
  );
}
