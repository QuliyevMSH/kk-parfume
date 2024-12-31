const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
          KK Parfüm
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Özünüzü xüsusi hiss etmək üçün premium ətirlər
        </p>
        <a href="#products" className="btn-primary">
          Məhsullarımız
        </a>
      </div>
    </div>
  );
};

export default Hero;