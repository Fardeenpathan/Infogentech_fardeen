
export default function IndHeroSection() {
  return (
    <div className="container mx-auto">
      <video
        className="absolute top-0 left-0 w-full sm:h-240 h-184  object-cover bg-transparent -z-10 "
        src="/assist/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
