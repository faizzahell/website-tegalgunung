import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda', path: '/' },
  { id: 'pemantauan', label: 'Pemantauan', path: '/pemantauan' },
  // { id: 'berita', label: 'Berita & Informasi', path: '/tentang' },
  { id: 'peraturan', label: 'Peraturan', path: '/peraturan' },
  { id: 'kontak', label: 'Kontak', path: '/kontak' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('beranda');
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const active = NAV_ITEMS.find(item => item.path === currentPath);
    if (active) setActiveItem(active.id);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center">
              <img src="/basecamp.png" alt="logo" className="h-10 w-10 lg:h-14 lg:w-14 text-[#084B65]" />
              <div className="ml-3">
                <h1 className="text-xl lg:text-2xl font-bold tracking-wide text-[#084B65]">
                  Gunung Bismo
                </h1>
                <p className="text-xs lg:text-sm hidden sm:block text-[#084B65]/80">
                  Pendakian via Tegalsari
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition duration-300 group ${
                  activeItem === item.id ? 'text-[#084B65]' : 'text-[#084B65]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#084B65] rounded-full transition-all duration-300 ${
                    activeItem === item.id ? 'w-3/4' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="ml-3">
              <h1 className="text-xl lg:text-2xl font-bold tracking-wide text-[#084B65]">
                Tegal Gunung
              </h1>
              <p className="text-xs text-right lg:text-sm hidden sm:block text-[#084B65]/80">
                Adventure Team
              </p>
            </div>
            <img src="/tegal-gunung.png" alt="logo" className="h-10 w-10 lg:h-14 lg:w-14 text-[#084B65]" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#084B65] hover:bg-[#084B65]/10 transition duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-200">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeItem === item.id
                    ? 'text-[#084B65] bg-[#084B65]/10 border-l-4 border-[#084B65]'
                    : 'text-[#084B65] hover:bg-[#084B65]/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button className="w-full px-4 py-3 rounded-lg text-sm font-medium text-[#084B65] border border-[#084B65] hover:bg-[#084B65]/10 transition-all duration-200">
                Masuk
              </button>
              <button className="w-full px-4 py-3 rounded-lg text-sm font-medium bg-[#084B65] text-white hover:bg-[#0A5F7F] transition-all duration-200">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
