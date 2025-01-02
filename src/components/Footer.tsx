const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">
              <div className="inline-flex bg-white dark:bg-gray-800 px-2 py-1 rounded">
                <span className="text-black dark:text-white">KK</span>
              </div>
              <span className="text-gold ml-1">Parfüm</span>
            </h3>
            <p className="text-gray-400">
            ✨ Sizin qoxunuz, sizin tərziniz 💫
            </p>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
            <h3 className=" text-xl font-playfair font-semibold mb-4">Əlaqə</h3>
            <a className="text-gray-400" href="https://wa.me/994506847834?text=Salam,%2C%20KK%20Parfüm." target="_blank" rel="noopener noreferrer">Telefon: +994 50 684 78 34</a>
            <a className="text-gray-400" href="mailto:masallahquliyev78@gmail.com?subject=Subject&body=Message" target="_blank" rel="noopener noreferrer">Email: info@kkparfum.az</a>
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