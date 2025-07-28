import React, { useState } from 'react';
import { User, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '../constants/menuItem';
import { useActiveMenu } from '../hooks/useActiveMenu';


interface SidebarProps {
  onMenuClick?: (menu: string) => void;
}

const logo = "/logo-ugm.png";

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick = () => {} }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeMenu = useActiveMenu();


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMenuClick = (menuName: string) => {
    onMenuClick(menuName);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`
          fixed top-4 z-50 p-3 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50
          hover:bg-white transition-all duration-300 transform hover:scale-105 cursor-pointer
          ${isSidebarOpen ? 'left-80 ml-3' : 'left-4'}
        `}
      >
        {isSidebarOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-80
        bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 lg:p-8 border-b border-gray-200/50">
          <div className="flex items-center space-x-4">
            {/* <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/25 flex items-center justify-center">
              <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div> */}
            <img src={logo} alt="Logo UGM" className="w-6 h-16 lg:w-16 lg:h-16" />
            <div className="space-y-1">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">PORTAL APBD</h1>
              <p className="text-xs text-gray-500 font-medium">Sistem Informasi Penyaluran APBD (DEB SV UGM)</p>
            </div>
          </div>
        </div>

        <nav className="p-4 lg:p-6 space-y-2">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">Menu Utama</h3>
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeMenu === item.name;

                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => handleMenuClick(item.name)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-medium transition-all duration-300 group relative overflow-hidden cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-700 shadow-lg shadow-cyan-500/25 border border-cyan-200/50'
                          : 'text-gray-600 hover:bg-gray-100/80 hover:shadow-lg hover:text-gray-900'
                      }`}
                    >
                      {isActive && <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-r-full" />}
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25'
                          : 'bg-gray-100 group-hover:bg-gray-200 group-hover:shadow-md'
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'}`} />
                      </div>
                      <span className={`flex-1 text-left ${isActive ? 'font-semibold' : 'group-hover:font-medium'}`}>
                        {item.name}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-cyan-600" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100/80 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Admin SIKD</p>
              <p className="text-xs text-gray-500 truncate">Pemerintah Aceh</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-sm shadow-green-500/50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
