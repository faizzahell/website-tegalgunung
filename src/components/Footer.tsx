import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/images/footer-2.png')` 
      }}
    >
      <div className="bg-[#171717]/80 backdrop-brightness-50 w-full h-full py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Pendakian Gn. Bismo via Tegalsari</h3>
            <p className="text-sm text-gray-300">
              Platform informasi resmi basecamp pendakian Gunung Bismo. Nikmati pengalaman mendaki yang aman, nyaman, dan terorganisir.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Beranda</a></li>
              <li><a href="/booking" className="hover:text-white">Pemantauan</a></li>
              <li><a href="/booking" className="hover:text-white">Berita & Informasi</a></li>
              <li><a href="/panduan" className="hover:text-white">Peraturan</a></li>
              <li><a href="/kontak" className="hover:text-white">Kontak</a></li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <p className="text-sm text-gray-300">Basecamp Gunung Bismo</p>
            <p className="text-sm text-gray-300">Siwades, Tegalsari, Kec. Garung, Kabupaten Wonosobo, Jawa Tengah 56353</p>
            <p className="text-sm text-gray-300 mt-2">Email: <a href="mailto:info@gunungbismo.id" className="hover:text-white">info@gunungbismo.id</a></p>
            <p className="text-sm text-gray-300">Telp: 0812-3456-7890</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Gunung Bismo Booking. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
