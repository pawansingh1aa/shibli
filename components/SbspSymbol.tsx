// SBSP election symbol — छड़ी (Walking Stick)
// Inline SVG so no external image needed

export default function SbspSymbol({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="सुभासपा चुनाव चिन्ह — छड़ी"
      className={className}
    >
      {/* Stick handle (curved top) */}
      <path
        d="M8 3 C8 3 6 3 6 5 C6 7 8 7 8 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Stick shaft going down */}
      <line
        x1="8"
        y1="7"
        x2="8"
        y2="21"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Small foot at bottom */}
      <line
        x1="6"
        y1="21"
        x2="10"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
