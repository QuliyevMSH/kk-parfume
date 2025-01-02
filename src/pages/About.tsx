import { useTheme } from "next-themes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Cart from "../components/Cart";
import { useTranslation } from "react-i18next";

const About = () => {
  const { theme } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="flex justify-center text-2xl font-playfair font-bold" style={{marginBottom:"20px"}}>
          <div className="inline-flex bg-black dark:bg-white px-2 py-1 rounded">
            <span className="text-white dark:text-black">KK</span>
          </div>
          <span className="text-gold ml-1">Parfüm</span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            KK Parfüm olaraq, 2015-ci ildən bəri Azərbaycanın ətir bazarında
            premium keyfiyyətli ətirlər təqdim edirik. Biz hər bir müştərimizə
            xüsusi yanaşır və onların zövqünə uyğun ən ideal ətrləri təklif
            edirik.
          </p>

          <p className="text-lg leading-relaxed">
            Kolleksiyamızda dünyanın ən məşhur brendlərinin orijinal ətirlərini
            tapacaqsınız. Biz keyfiyyətə və müştəri məmnuniyyətinə xüsusi diqqət
            yetiririk.
          </p>

          <div className="bg-cream dark:bg-gray-800 p-6 rounded-lg shadow-lg my-8">
            <h2 className="text-2xl font-playfair font-bold mb-4 text-black dark:text-white">
              Bizim Dəyərlərimiz
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Premium keyfiyyətli məhsullar</li>
              <li>Peşəkar məsləhət xidməti</li>
              <li>100% orijinal ətirlər</li>
              <li>Sərfəli qiymətlər</li>
              <li>Geniş çeşid</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            Hər bir ətir bir hekayə danışır və biz sizə öz hekayənizi tapmaqda
            kömək etməyə hazırıq. KK Parfüm ilə özünüzü xüsusi hiss edin!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
