export default function CardBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">

      <div className="absolute inset-0 bg-[#0b1116]" />

      <div className="absolute inset-0 
        bg-[linear-gradient(120deg,#0b1116_20%,#1a242b_45%,#3a2a12_75%,#5a3e14_100%)]
        opacity-70" 
      />

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_80%_20%,rgba(255,196,110,.35),transparent_45%)]" 
      />

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_50%_110%,rgba(190,130,60,.25),transparent_50%)]" 
      />

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,.45))]" 
      />

    </div>
  );
}
