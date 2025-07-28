import React, { useState, useEffect } from 'react';
import { TrendingUp, PieChart, BarChart3, Download, Eye, DollarSign, Calendar, MapPin, Target, Award, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell, Area, AreaChart, Pie } from 'recharts';

const APBDDashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Data wilayah/kabupaten dengan anggaran tertinggi
  const topRegionsData = [
    { name: 'Kab. Aceh Utara', anggaran: 1890.45, realisasi: 756.32, percentage: 39.98 },
    { name: 'Kab. Bireuen', anggaran: 1654.78, realisasi: 623.81, percentage: 37.70 },
    { name: 'Kab. Aceh Timur', anggaran: 1523.92, realisasi: 689.42, percentage: 45.24 },
    { name: 'Kab. Pidie', anggaran: 1398.65, realisasi: 578.96, percentage: 41.40 },
    { name: 'Kab. Aceh Besar', anggaran: 1267.33, realisasi: 534.28, percentage: 42.16 }
  ];

  // Data untuk grafik pie kategori belanja
  const expenseCategories = [
    { name: 'Belanja Pegawai', value: 3680.71, color: '#06B6D4' },
    { name: 'Belanja Barang & Jasa', value: 3877.20, color: '#3B82F6' },
    { name: 'Belanja Modal', value: 1004.23, color: '#8B5CF6' },
    { name: 'Belanja Lainnya', value: 2444.30, color: '#10B981' }
  ];

  // Data trend realisasi bulanan
  const monthlyTrend = [
    { month: 'Jan', target: 450, realisasi: 298 },
    { month: 'Feb', target: 920, realisasi: 567 },
    { month: 'Mar', target: 1380, realisasi: 842 },
    { month: 'Apr', target: 1840, realisasi: 1156 },
    { month: 'Mei', target: 2300, realisasi: 1523 },
    { month: 'Jun', target: 2760, realisasi: 1889 }
  ];

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(amount)) + ' M';
  };

  const getPercentageColor = (percentage: number): string => {
    if (percentage >= 80) return 'from-emerald-500 to-green-600';
    if (percentage >= 60) return 'from-blue-500 to-cyan-600';
    if (percentage >= 40) return 'from-amber-500 to-yellow-600';
    if (percentage >= 20) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-pink-600';
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-2xl">
          <p className="text-white font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-cyan-200">
              {entry.dataKey}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const totalBudget = 10796.57;
  const totalRealization = 3510.21;
  const overallPercentage = (totalRealization / totalBudget) * 100;
  const totalKabupaten = 23;
  const avgRealization = overallPercentage;

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
                DASHBOARD APBD
              </h1>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-xl text-cyan-100">
                <span className="font-semibold bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Provinsi Aceh</span>
                <span className="hidden md:block w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></span>
                <span className="bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Tahun {selectedYear}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-cyan-200">
                <Clock className="w-4 h-4" />
                <span>Last Updated: {currentTime.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                <option value="2025" className="bg-blue-800 text-white">2025</option>
                <option value="2024" className="bg-blue-800 text-white">2024</option>
                <option value="2023" className="bg-blue-800 text-white">2023</option>
              </select>
              <button className="group flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer">
                <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                <span className="font-semibold text-sm md:text-base">Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-cyan-200 font-medium text-xs md:text-sm">Total Anggaran</p>
                <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{formatCurrency(totalBudget)}</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:scale-110">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-cyan-200 font-medium text-xs md:text-sm">Total Realisasi</p>
                <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{formatCurrency(totalRealization)}</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/50 transition-all duration-300 transform group-hover:scale-110">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-cyan-200 font-medium text-xs md:text-sm">Jumlah Kabupaten</p>
                <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{totalKabupaten}</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-cyan-200 font-medium text-xs md:text-sm">Rata-rata Realisasi</p>
                <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{avgRealization.toFixed(1)}%</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/50 transition-all duration-300 transform group-hover:scale-110">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Top 5 Kabupaten Chart */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Top 5 Kabupaten - Anggaran Tertinggi</h3>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topRegionsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#A5F3FC', fontSize: 10 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#A5F3FC', fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="anggaran" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="realisasi" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Expense Categories Pie Chart */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg">
                  <PieChart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Komposisi Belanja Daerah</h3>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">Trend Realisasi Bulanan vs Target</h3>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrend} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" tick={{ fill: '#A5F3FC' }} />
                <YAxis tick={{ fill: '#A5F3FC' }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="target" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                <Area type="monotone" dataKey="realisasi" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Kinerja Terbaik</h4>
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Kab. Aceh Timur</span>
                <span className="text-white font-bold">45.24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Kab. Aceh Besar</span>
                <span className="text-white font-bold">42.16%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Kab. Pidie</span>
                <span className="text-white font-bold">41.40%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Status Anggaran</h4>
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Sisa Anggaran</span>
                <span className="text-white font-bold">{formatCurrency(totalBudget - totalRealization)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Persentase Tersisa</span>
                <span className="text-white font-bold">{(100 - overallPercentage).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${overallPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Informasi Periode</h4>
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Periode Laporan</span>
                <span className="text-white font-bold">Jun 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Bulan Tersisa</span>
                <span className="text-white font-bold">6 Bulan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200 text-sm">Target Realisasi</span>
                <span className="text-white font-bold">50%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 bg-white/10 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Eye className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
              <span className="text-cyan-100 font-medium text-sm md:text-base">Dashboard APBD Provinsi Aceh Tahun {selectedYear}</span>
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