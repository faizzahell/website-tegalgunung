import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search, TrendingUp, PieChart, BarChart3, Download, Filter, Eye, DollarSign } from 'lucide-react';

interface BudgetItem {
  name: string;
  budget: number;
  realization: number;
  percentage: number;
  children?: BudgetItem[];
  level: number;
}

const APBDDashboard: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const budgetData: BudgetItem[] = [
    {
      name: 'Pendapatan Daerah',
      budget: 10796.57,
      realization: 3510.21,
      percentage: 32.51,
      level: 0,
      children: [
        {
          name: 'PAD',
          budget: 2869.12,
          realization: 1179.73,
          percentage: 41.14,
          level: 1,
          children: [
            { name: 'Pajak Daerah', budget: 1722.01, realization: 604.61, percentage: 35.11, level: 2 },
            { name: 'Retribusi Daerah', budget: 700.48, realization: 222.33, percentage: 31.74, level: 2 },
            { name: 'Hasil Pengelolaan Kekayaan Daerah yang Dipisahkan', budget: 265.78, realization: 243.55, percentage: 91.63, level: 2 },
            { name: 'Lain-Lain PAD yang Sah', budget: 170.85, realization: 109.28, percentage: 63.96, level: 2 }
          ]
        },
        {
          name: 'TKDD',
          budget: 7935.48,
          realization: 2328.89,
          percentage: 29.35,
          level: 1,
          children: [
            { name: 'Pendapatan Transfer Pemerintah Pusat', budget: 7935.48, realization: 2328.89, percentage: 29.35, level: 2 }
          ]
        },
        {
          name: 'Pendapatan Lainnya',
          budget: 1.97,
          realization: 1.59,
          percentage: 78.53,
          level: 1,
          children: [
            { name: 'Pendapatan Hibah', budget: 1.97, realization: 1.59, percentage: 78.53, level: 2 }
          ]
        }
      ]
    },
    {
      name: 'Belanja Daerah',
      budget: 11006.44,
      realization: 3244.77,
      percentage: 29.48,
      level: 0,
      children: [
        {
          name: 'Belanja Pegawai',
          budget: 3680.71,
          realization: 1468.38,
          percentage: 39.89,
          level: 1,
          children: [
            { name: 'Belanja Pegawai', budget: 3680.71, realization: 1468.38, percentage: 39.89, level: 2 }
          ]
        },
        {
          name: 'Belanja Barang dan Jasa',
          budget: 3877.20,
          realization: 1016.07,
          percentage: 26.21,
          level: 1,
          children: [
            { name: 'Belanja Barang dan Jasa', budget: 3877.20, realization: 1016.07, percentage: 26.21, level: 2 }
          ]
        },
        {
          name: 'Belanja Modal',
          budget: 1004.23,
          realization: 120.61,
          percentage: 12.01,
          level: 1,
          children: [
            { name: 'Belanja Modal', budget: 1004.23, realization: 120.61, percentage: 12.01, level: 2 }
          ]
        },
        {
          name: 'Belanja Lainnya',
          budget: 2444.30,
          realization: 639.71,
          percentage: 26.17,
          level: 1,
          children: [
            { name: 'Belanja Bagi Hasil', budget: 657.45, realization: 278.58, percentage: 42.37, level: 2 },
            { name: 'Belanja Bantuan Keuangan', budget: 1104.97, realization: 292.34, percentage: 26.46, level: 2 },
            { name: 'Belanja Subsidi', budget: 4.76, realization: 0.32, percentage: 6.72, level: 2 },
            { name: 'Belanja Hibah', budget: 380.33, realization: 49.49, percentage: 13.01, level: 2 },
            { name: 'Belanja Bantuan Sosial', budget: 251.36, realization: 18.98, percentage: 7.55, level: 2 },
            { name: 'Belanja Tidak Terduga', budget: 45.42, realization: 0.00, percentage: 0.00, level: 2 }
          ]
        }
      ]
    },
    {
      name: 'Pembiayaan Daerah',
      budget: 209.87,
      realization: -37.62,
      percentage: -17.93,
      level: 0,
      children: [
        {
          name: 'Penerimaan Pembiayaan Daerah',
          budget: 261.87,
          realization: 0.00,
          percentage: 0.00,
          level: 1,
          children: [
            { name: 'Sisa Lebih Perhitungan Anggaran Tahun Sebelumnya', budget: 261.87, realization: 0.00, percentage: 0.00, level: 2 }
          ]
        },
        {
          name: 'Pengeluaran Pembiayaan Daerah',
          budget: 52.00,
          realization: 37.62,
          percentage: 72.35,
          level: 1,
          children: [
            { name: 'Pembentukan Dana Cadangan', budget: 52.00, realization: 37.62, percentage: 72.35, level: 2 }
          ]
        }
      ]
    }
  ];

  const toggleExpand = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
    setExpandedItems(newExpanded);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(amount)) + ' M';
  };

  const getPercentageColor = (percentage: number): string => {
    if (percentage >= 80) return 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-green-500/25';
    if (percentage >= 60) return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25';
    if (percentage >= 40) return 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/25';
    if (percentage >= 20) return 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25';
    if (percentage >= 0) return 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/25';
    return 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25';
  };

  const renderTreeItem = (item: BudgetItem, index: number): React.ReactNode => {
    const isExpanded = expandedItems.has(item.name);
    const hasChildren = item.children && item.children.length > 0;
    const paddingLeft = item.level * (window.innerWidth < 768 ? 16 : 32);

    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return null;
    }

    return (
      <React.Fragment key={`${item.name}-${index}`}>
        <tr className={`
          border-b border-white/10 hover:bg-white/5 transition-all duration-300 group
          ${item.level === 0 ? 'bg-gradient-to-r from-white/10 to-cyan-500/5 backdrop-blur-sm' : 
            item.level === 1 ? 'bg-white/5' : 'bg-transparent'}
        `}>
          <td className="py-3 md:py-6 px-2 md:px-8" style={{ paddingLeft: `${paddingLeft + (window.innerWidth < 768 ? 16 : 32)}px` }}>
            <div className="flex items-center space-x-2 md:space-x-3">
              {hasChildren && (
                <button
                  onClick={() => toggleExpand(item.name)}
                  className="p-1 md:p-2 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm cursor-pointer"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  )}
                </button>
              )}
              <span className={`font-medium transition-colors duration-300 ${
                item.level === 0 ? 'text-base md:text-xl text-white group-hover:text-cyan-200' :
                item.level === 1 ? 'text-sm md:text-lg text-cyan-100 group-hover:text-white' : 
                'text-xs md:text-base text-cyan-200 group-hover:text-cyan-100'
              }`}>
                {item.name}
              </span>
            </div>
          </td>
          
          <td className="py-3 md:py-6 px-2 md:px-8 text-right">
            <div className="inline-flex items-center space-x-1 md:space-x-2 bg-white/10 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <DollarSign className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
              <span className="font-mono text-white font-semibold text-xs md:text-sm">
                {formatCurrency(item.budget)}
              </span>
            </div>
          </td>
          
          <td className="py-3 md:py-6 px-2 md:px-8 text-right">
            <div className={`inline-flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-105 ${
              item.realization >= 0 ? 'bg-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/30' : 'bg-red-500/20 backdrop-blur-sm hover:bg-red-500/30'
            }`}>
              <TrendingUp className={`w-3 h-3 md:w-4 md:h-4 ${item.realization >= 0 ? 'text-emerald-400' : 'text-red-400'}`} />
              <span className="font-mono text-white font-semibold text-xs md:text-sm">
                {formatCurrency(item.realization)}
              </span>
            </div>
          </td>
          
          <td className="py-3 md:py-6 px-2 md:px-8 text-right">
            <div className={`inline-flex items-center px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transform transition-all duration-300 hover:scale-110 ${getPercentageColor(item.percentage)}`}>
              {item.percentage.toFixed(2)}%
            </div>
          </td>
        </tr>
        {hasChildren && isExpanded && item.children?.map((child, childIndex) => renderTreeItem(child, childIndex))}
      </React.Fragment>
    );
  };

  const totalBudget = budgetData.reduce((sum, item) => sum + item.budget, 0);
  const totalRealization = budgetData.reduce((sum, item) => sum + item.realization, 0);
  const overallPercentage = (totalRealization / totalBudget) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 backdrop-blur-sm bg-white/10 border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold drop-shadow-lg bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                POSTUR APBD
              </h1>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-xl text-cyan-100">
                <span className="font-semibold bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Provinsi Aceh</span>
                <span className="hidden md:block w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></span>
                <span className="bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Tahun 2025</span>
              </div>
              <p className="text-xs md:text-base text-cyan-200 max-w-2xl leading-relaxed">
                Data APBD Murni, realisasi APBD s.d Desember 2025 • Data diterima SIKD per 17 Juni 2025
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => {}}
                className="group flex items-center space-x-2 md:space-x-3 bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer"
              >
                <Filter className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
                <span className="font-semibold text-sm md:text-base">Filter Data</span>
              </button>

              <button
                className="group flex items-center space-x-2 md:space-x-3 bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                <span className="font-semibold text-sm md:text-base">Export Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="flex items-center justify-between">
              <div className="space-y-1 md:space-y-2">
                <p className="text-cyan-200 font-medium text-sm md:text-base">Total Anggaran</p>
                <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{formatCurrency(totalBudget)}</p>
              </div>
              <div className="p-2 md:p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:scale-110">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="flex items-center justify-between">
              <div className="space-y-1 md:space-y-2">
                <p className="text-cyan-200 font-medium text-sm md:text-base">Total Realisasi</p>
                <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{formatCurrency(totalRealization)}</p>
              </div>
              <div className="p-2 md:p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl md:rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/50 transition-all duration-300 transform group-hover:scale-110">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="flex items-center justify-between">
              <div className="space-y-1 md:space-y-2">
                <p className="text-cyan-200 font-medium text-sm md:text-base">Realisasi</p>
                <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{overallPercentage.toFixed(2)}%</p>
              </div>
              <div className="p-2 md:p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl md:rounded-2xl shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
                <PieChart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 mb-6 md:mb-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="relative group">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
              <input
                type="text"
                placeholder="Cari item anggaran..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 bg-white/20 backdrop-blur-sm text-white placeholder-cyan-200 border border-white/30 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent w-full lg:w-96 shadow-lg transition-all duration-300 group-hover:bg-white/30 text-sm md:text-base"
              />
            </div>
            
            <div className="flex space-x-2 md:space-x-4">
              <button
                onClick={() => setExpandedItems(new Set(budgetData.flatMap(item => [item.name, ...(item.children?.map(child => child.name) || [])])))}
                className="flex-1 lg:flex-none px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold text-cyan-100 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={() => setExpandedItems(new Set())}
                className="flex-1 lg:flex-none px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold text-cyan-100 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-gradient-to-r from-white/20 to-cyan-500/20 backdrop-blur-sm border-b border-white/20">
                <tr>
                  <th className="text-left py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Akun</th>
                  <th className="text-right py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Anggaran</th>
                  <th className="text-right py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Realisasi</th>
                  <th className="text-right py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">%</th>
                </tr>
              </thead>
              <tbody>
                {budgetData.map((item, index) => renderTreeItem(item, index))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 bg-white/10 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Eye className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
              <span className="text-cyan-100 font-medium text-sm md:text-base">Data APBD Provinsi Aceh Tahun 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-cyan-200 text-xs md:text-sm">Sistem Informasi Keuangan Daerah</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APBDDashboard;