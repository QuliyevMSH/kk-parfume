const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">KK Parfüm</h3>
            <p className="text-gray-400">
              Premium ətirlər və xüsusi təkliflər üçün bizi seçin
            </p>
          </div>
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Əlaqə</h3>
            <p className="text-gray-400">Telefon: +994 50 684 78 34</p>
            <p className="text-gray-400">Email: info@kkparfum.az</p>
          </div>
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Ünvan</h3>
            <p className="text-gray-400">
              Bakı şəhəri, Nizami küçəsi 5
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 KK Parfüm. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;