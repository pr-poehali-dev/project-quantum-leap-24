export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Car icon */}
      <path
        d="M8 26H32V30H8V26Z"
        fill="white"
        opacity="0.4"
      />
      <path
        d="M6 22L10 14H30L34 22H6Z"
        fill="white"
      />
      <path
        d="M13 14L16 8H24L27 14H13Z"
        fill="white"
        opacity="0.7"
      />
      <circle cx="12" cy="28" r="3" fill="white" />
      <circle cx="12" cy="28" r="1.5" fill="#0a0a0a" />
      <circle cx="28" cy="28" r="3" fill="white" />
      <circle cx="28" cy="28" r="1.5" fill="#0a0a0a" />

      {/* ASIA AUTO text */}
      <text
        x="44"
        y="27"
        fontFamily="monospace"
        fontSize="14"
        fontWeight="600"
        fill="white"
        letterSpacing="1"
      >
        ASIA AUTO
      </text>
    </svg>
  );
};
