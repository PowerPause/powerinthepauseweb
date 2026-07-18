export function HandwrittenLogo() {
  return (
    <svg
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto"
      role="img"
      aria-label="Power In The Pause®"
    >
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
            .handwritten {
              font-family: 'Pinyon Script', cursive;
              fill: #C6A55C;
              font-weight: 400;
            }
          `}
        </style>
      </defs>
      
      {/* Power */}
      <text
        x="400"
        y="120"
        className="handwritten"
        textAnchor="middle"
        fontSize="110"
        letterSpacing="3"
      >
        Power
      </text>
      
      {/* In The */}
      <text
        x="400"
        y="200"
        className="handwritten"
        textAnchor="middle"
        fontSize="70"
        letterSpacing="2"
      >
        In The
      </text>
      
      {/* Pause */}
      <text
        x="400"
        y="300"
        className="handwritten"
        textAnchor="middle"
        fontSize="130"
        letterSpacing="3"
      >
        Pause
      </text>
      
      {/* ® symbol */}
      <text
        x="620"
        y="270"
        className="handwritten"
        textAnchor="middle"
        fontSize="40"
      >
        ®
      </text>
    </svg>
  );
}
