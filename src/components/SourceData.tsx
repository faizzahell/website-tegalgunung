import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search, Database, Calendar, Download, Filter, Eye, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface DataItem {
  year: number;
  status: string;
  dataType: string;
  lastUpdate: string;
  isAvailable: boolean;
}

const SourceDataDashboard: React.FC = () => {
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set([2025]));
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const sourceData: DataItem[] = [
    // 2025 Data
    { year: 2025, status: 'Anggaran', dataType: 'Ringkasan', lastUpdate: '28 Mei 2025', isAvailable: true },
    { year: 2025, status: 'Anggaran', dataType: 'Belanja per Fungsi', lastUpdate: '-', isAvailable: false },
    { year: 2025, status: 'Anggaran', dataType: 'Pendapatan per Jenis Pajak', lastUpdate: '28 Mei 2025', isAvailable: true },
    { year: 2025, status: 'Anggaran', dataType: 'Pendapatan per Jenis Retribusi', lastUpdate: '28 Mei 2025', isAvailable: true },
    { year: 2025, status: 'Realisasi', dataType: 'Ringkasan', lastUpdate: '-', isAvailable: false },
    { year: 2025, status: 'Realisasi', dataType: 'Belanja per Fungsi', lastUpdate: '-', isAvailable: false },
    { year: 2025, status: 'Realisasi', dataType: 'Pendapatan per Jenis Pajak', lastUpdate: '-', isAvailable: false },
    { year: 2025, status: 'Realisasi', dataType: 'Pendapatan per Jenis Retribusi', lastUpdate: '-', isAvailable: false },
    { year: 2025, status: 'Realisasi', dataType: 'Semester I', lastUpdate: '-', isAvailable: false },
    { year: 2025, status: 'Realisasi', dataType: 'Neraca', lastUpdate: '-', isAvailable: false },

    // 2024 Data
    { year: 2024, status: 'Anggaran', dataType: 'Ringkasan', lastUpdate: '8 Juli 2024', isAvailable: true },
    { year: 2024, status: 'Anggaran', dataType: 'Belanja per Fungsi', lastUpdate: '8 Juli 2024', isAvailable: true },
    { year: 2024, status: 'Anggaran', dataType: 'Pendapatan per Jenis Pajak', lastUpdate: '8 Juli 2024', isAvailable: true },
    { year: 2024, status: 'Anggaran', dataType: 'Pendapatan per Jenis Retribusi', lastUpdate: '8 Juli 2024', isAvailable: true },
    { year: 2024, status: 'Realisasi', dataType: 'Ringkasan', lastUpdate: '-', isAvailable: false },
    { year: 2024, status: 'Realisasi', dataType: 'Belanja per Fungsi', lastUpdate: '-', isAvailable: false },
    { year: 2024, status: 'Realisasi', dataType: 'Pendapatan per Jenis Pajak', lastUpdate: '-', isAvailable: false },
    { year: 2024, status: 'Realisasi', dataType: 'Pendapatan per Jenis Retribusi', lastUpdate: '-', isAvailable: false },
    { year: 2024, status: 'Realisasi', dataType: 'Semester I', lastUpdate: '-', isAvailable: false },
    { year: 2024, status: 'Realisasi', dataType: 'Neraca', lastUpdate: '-', isAvailable: false },

    // 2023 Data
    { year: 2023, status: 'Anggaran', dataType: 'Ringkasan', lastUpdate: '12 Mei 2023', isAvailable: true },
    { year: 2023, status: 'Anggaran', dataType: 'Belanja per Fungsi', lastUpdate: '5 Juni 2023', isAvailable: true },
    { year: 2023, status: 'Anggaran', dataType: 'Pendapatan per Jenis Pajak', lastUpdate: '12 Mei 2023', isAvailable: true },
    { year: 2023, status: 'Anggaran', dataType: 'Pendapatan per Jenis Retribusi', lastUpdate: '12 Mei 2023', isAvailable: true },
    { year: 2023, status: 'Realisasi', dataType: 'Ringkasan', lastUpdate: '18 November 2024', isAvailable: true },
  ];

  const years = [...new Set(sourceData.map(item => item.year))].sort((a, b) => b - a);

  const toggleYear = (year: number) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const getDataForYear = (year: number) => {
    return sourceData.filter(item => item.year === year);
  };

  const getStatusColor = (status: string) => {
    return status === 'Anggaran' 
      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
      : 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/25';
  };

  const getAvailabilityIcon = (isAvailable: boolean) => {
    return isAvailable 
      ? <CheckCircle className="w-4 h-4 text-emerald-400" />
      : <AlertCircle className="w-4 h-4 text-red-400" />;
  };

  // const filteredData = sourceData.filter(item => 
  //   searchTerm === '' || 
  //   item.dataType.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   item.status.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const availableCount = sourceData.filter(item => item.isAvailable).length;
  const totalCount = sourceData.length;
  const availabilityPercentage = (availableCount / totalCount) * 100;

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
                SOURCE DATA
              </h1>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-xl text-cyan-100">
                <span className="font-semibold bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Provinsi Aceh</span>
                <span className="hidden md:block w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></span>
                <span className="bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Setelah TA 2006</span>
              </div>
              <p className="text-xs md:text-base text-cyan-200 max-w-2xl leading-relaxed">
                Cakupan: APBD, Realisasi APBD, dan Neraca • Periode: Tahunan dan Semesteran • Sumber: Pemerintah Daerah
              </p>
              <p className="text-xs md:text-sm text-cyan-300 font-medium">
                Diolah oleh: Subdit Data Keuangan Daerah, Direktorat Evaluasi dan Sistem Informasi
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="flex items-center justify-between">
              <div className="space-y-1 md:space-y-2">
                <p className="text-cyan-200 font-medium text-sm md:text-base">Total Dataset</p>
                <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{totalCount}</p>
              </div>
              <div className="p-2 md:p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:scale-110">
                <Database className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="flex items-center justify-between">
              <div className="space-y-1 md:space-y-2">
                <p className="text-cyan-200 font-medium text-sm md:text-base">Data Tersedia</p>
                <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{availableCount}</p>
              </div>
              <div className="p-2 md:p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl md:rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/50 transition-all duration-300 transform group-hover:scale-110">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="flex items-center justify-between">
              <div className="space-y-1 md:space-y-2">
                <p className="text-cyan-200 font-medium text-sm md:text-base">Ketersediaan</p>
                <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{availabilityPercentage.toFixed(1)}%</p>
              </div>
              <div className="p-2 md:p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl md:rounded-2xl shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="flex items-center justify-between">
              <div className="space-y-1 md:space-y-2">
                <p className="text-cyan-200 font-medium text-sm md:text-base">Tahun Tersedia</p>
                <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{years.length}</p>
              </div>
              <div className="p-2 md:p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl md:rounded-2xl shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/50 transition-all duration-300 transform group-hover:scale-110">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
                placeholder="Cari jenis data atau status..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 bg-white/20 backdrop-blur-sm text-white placeholder-cyan-200 border border-white/30 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent w-full lg:w-96 shadow-lg transition-all duration-300 group-hover:bg-white/30 text-sm md:text-base"
              />
            </div>
            
            <div className="flex space-x-2 md:space-x-4">
              <button
                onClick={() => setExpandedYears(new Set(years))}
                className="flex-1 lg:flex-none px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold text-cyan-100 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={() => setExpandedYears(new Set())}
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
                  <th className="text-left py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Tahun</th>
                  <th className="text-left py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Status Data</th>
                  <th className="text-left py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Jenis Data</th>
                  <th className="text-center py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Tanggal Update</th>
                  <th className="text-center py-3 md:py-6 px-2 md:px-8 font-bold text-white text-sm md:text-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {years.map((year) => {
                  const isYearExpanded = expandedYears.has(year);
                  const yearData = getDataForYear(year);
                  const filteredYearData = yearData.filter(item => 
                    searchTerm === '' || 
                    item.dataType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.status.toLowerCase().includes(searchTerm.toLowerCase())
                  );

                  if (searchTerm && filteredYearData.length === 0) return null;

                  return (
                    <React.Fragment key={year}>
                      {/* Year Header */}
                      <tr className="border-b border-white/10 bg-gradient-to-r from-white/15 to-cyan-500/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                        <td className="py-4 md:py-6 px-2 md:px-8" colSpan={5}>
                          <button
                            onClick={() => toggleYear(year)}
                            className="flex items-center space-x-3 w-full group cursor-pointer"
                          >
                            {isYearExpanded ? (
                              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:text-cyan-300" />
                            ) : (
                              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:text-cyan-300" />
                            )}
                            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-200">
                              {year}
                            </span>
                            <div className="flex items-center space-x-2 ml-auto">
                              <span className="text-sm text-cyan-200">
                                {yearData.filter(item => item.isAvailable).length}/{yearData.length} tersedia
                              </span>
                            </div>
                          </button>
                        </td>
                      </tr>
                      
                      {/* Year Data */}
                      {isYearExpanded && filteredYearData.map((item, index) => (
                        <tr key={`${year}-${index}`} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300 group">
                          <td className="py-3 md:py-4 px-2 md:px-8 pl-12 md:pl-16">
                            <span className="text-cyan-200 font-medium text-xs md:text-sm">{item.year}</span>
                          </td>
                          <td className="py-3 md:py-4 px-2 md:px-8">
                            <div className={`inline-flex items-center px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transform transition-all duration-300 hover:scale-105 ${getStatusColor(item.status)}`}>
                              {item.status}
                            </div>
                          </td>
                          <td className="py-3 md:py-4 px-2 md:px-8">
                            <span className="text-white font-medium text-xs md:text-sm group-hover:text-cyan-200 transition-colors duration-300">
                              {item.dataType}
                            </span>
                          </td>
                          <td className="py-3 md:py-4 px-2 md:px-8 text-center">
                            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl border border-white/20">
                              <Clock className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                              <span className="text-cyan-100 font-mono text-xs md:text-sm">
                                {item.lastUpdate || '-'}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 md:py-4 px-2 md:px-8 text-center">
                            <div className={`inline-flex items-center space-x-2 px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transform transition-all duration-300 hover:scale-105 ${
                              item.isAvailable 
                                ? 'bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/30'
                                : 'bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 hover:bg-red-500/30'
                            }`}>
                              {getAvailabilityIcon(item.isAvailable)}
                              <span>{item.isAvailable ? 'Tersedia' : 'Tidak Tersedia'}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 bg-white/10 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Eye className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
              <span className="text-cyan-100 font-medium text-sm md:text-base">Data Series APBD 2 Desember 2024</span>
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

export default SourceDataDashboard;