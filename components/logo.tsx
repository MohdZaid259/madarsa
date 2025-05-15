export default function AnimatedText() {
  const text = "مدرسة للبنات";

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <svg
        width="800"
        height="200"
        viewBox="0 0 800 200"
        className="w-full max-w-3xl"
        aria-label="Arabic text: مدرسة للبنات"
      >
        <title>Arabic Text: مدرسة للبنات</title>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <text
          x="400"
          y="120"
          fontSize="100"
          fontFamily="Amiri, Arial, sans-serif"
          fontWeight="bold"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="2"
          className="animated-text"
          textAnchor="middle"
          direction="rtl"
        >
          {text}
        </text>

        <style jsx>{`
          @keyframes drawStroke {
            0% {
              stroke-dashoffset: 500;
              fill-opacity: 0;
            }
            70% {
              stroke-dashoffset: 0;
              fill-opacity: 0;
            }
            100% {
              stroke-dashoffset: 0;
              fill-opacity: 1;
            }
          }

          .animated-text {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            animation: drawStroke 4s ease-in-out forwards;
          }
        `}</style>
      </svg>
    </div>
  );
}
