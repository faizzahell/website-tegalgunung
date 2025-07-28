import React, { useState, useEffect, type JSX } from 'react';
import { 
  Calendar, 
  Users, 
  Cloud, 
  CloudSun,
  Sun, 
  CloudRain, 
  Thermometer, 
  Wind, 
  Eye, 
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Activity,
  Droplets,
  Mountain,
  Sparkles,
  Zap,
  Loader2,
  RefreshCw,
  SatelliteDish,
} from 'lucide-react';
import { fetchWeather } from "../library/openMeteo"
import type { WeatherData } from "../library/openMeteo"

const weatherIcons: Record<string, JSX.Element> = {
  "Cerah": <Sun size={20} className="text-amber-400" />,
  "Cerah Berawan": <CloudSun size={20} className="text-amber-400" />,
  "Berawan": <Cloud size={20} className="text-slate-500" />,
  "Hujan Ringan": <CloudRain size={20} className="text-sky-500" />,
  "Hujan Lebat": <CloudRain size={20} className="text-sky-700" />,
  "Badai Petir": <Sparkles size={20} className="text-yellow-400" />,
  default: <Cloud size={20} className="text-slate-400" />
};

const Monitoring: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const [selectedWeatherDay, setSelectedWeatherDay] = useState(0)
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setIsLoadingWeather(true);
        setWeatherError(null);
        const data = await fetchWeather();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeatherError('Gagal memuat data cuaca');
        // Set fallback data
        setWeatherData([
          {
            day: "Hari Ini",
            date: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short" }),
            condition: "Data tidak tersedia",
            icon: <Cloud size={24} className="text-slate-400" />,
            temp: 25,
            humidity: 70,
            windSpeed: 5,
            precipitation: 0,
          },
          {
            day: "Besok",
            date: new Date(Date.now() + 24*60*60*1000).toLocaleDateString("id-ID", { day: "2-digit", month: "short" }),
            condition: "Data tidak tersedia",
            icon: <Cloud size={24} className="text-slate-400" />,
            temp: 25,
            humidity: 70,
            windSpeed: 5,
            precipitation: 0,
          },
          {
            day: "Lusa",
            date: new Date(Date.now() + 48*60*60*1000).toLocaleDateString("id-ID", { day: "2-digit", month: "short" }),
            condition: "Data tidak tersedia",
            icon: <Cloud size={24} className="text-slate-400" />,
            temp: 25,
            humidity: 70,
            windSpeed: 5,
            precipitation: 0,
          }
        ]);
      } finally {
        setIsLoadingWeather(false);
      }
    };

    loadWeatherData();
  }, []);

  const refreshWeather = () => {
    const loadWeatherData = async () => {
      try {
        setIsLoadingWeather(true);
        setWeatherError(null);
        const data = await fetchWeather();
        setWeatherData(data);
      } catch (error) {
        console.error('Error refreshing weather:', error);
        setWeatherError('Gagal memuat data cuaca');
      } finally {
        setIsLoadingWeather(false);
      }
    };

    loadWeatherData();
  };

  // Mock data - in real app, this would come from API
  const bookingData = {
    totalSlots: 50,
    bookedToday: 32,
    availableSlots: 18,
    waitingList: 5,
    peakHours: "06:00 - 08:00",
    nextAvailable: "14:30"
  };

  const crowdData = {
    current: "Sedang",
    level: 65,
    prediction: [
      { time: "06:00", level: 85, label: "Tinggi" },
      { time: "10:00", level: 95, label: "Sangat Tinggi" },
      { time: "14:00", level: 45, label: "Rendah" },
      { time: "18:00", level: 25, label: "Sangat Rendah" }
    ]
  };

  const getCrowdColor = (level: number) => {
    if (level >= 80) return "from-red-500 to-red-600";
    if (level >= 60) return "from-amber-500 to-orange-500";
    if (level >= 40) return "from-[#084B65] to-[#0a5d7a]";
    return "from-emerald-500 to-teal-600";
  };

  const getCrowdGlow = (level: number) => {
    if (level >= 80) return "shadow-red-500/30";
    if (level >= 60) return "shadow-amber-500/30";
    if (level >= 40) return "shadow-[#084B65]/30";
    return "shadow-emerald-500/30";
  };

  const currentWeatherData = weatherData[selectedWeatherDay] || weatherData[0];
  const displayWeatherData = weatherData.length > 0 ? weatherData : [];

  if (isLoadingWeather && weatherData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 text-[#084B65] animate-spin" size={48} />
          <p className="text-[#084B65] font-bold text-lg">Memuat data cuaca...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#084B65_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="relative">
                <div className="relative">
                  <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#084B65] via-[#0a5d7a] to-[#0c6b8a] bg-clip-text text-transparent mb-3 drop-shadow-sm">
                    Pemantauan Gunung Bismo
                  </h1>
                  <p className="text-slate-600 text-lg flex items-center gap-2 font-medium">
                    <MapPin size={20} className="text-[#084B65]" />
                    Via Tegalsari, Garung, Wonosobo, Jawa Tengah.
                    <Sparkles size={16} className="text-[#084B65] animate-pulse" />
                  </p>
                </div>
              </div>
              
              {/* Time Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#084B65]/20 to-[#0c6b8a]/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-[#084B65]/10 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#084B65] to-[#0a5d7a] rounded-xl shadow-lg">
                      <Clock className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="text-slate-600 font-bold text-sm">
                        {currentTime.toLocaleDateString('id-ID', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-[#084B65] text-2xl font-black tracking-wider">
                        {currentTime.toLocaleTimeString('id-ID', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Available Slots */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                    <Calendar className="text-white" size={28} />
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    TERSEDIA
                  </div>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent mb-1">
                  {bookingData.availableSlots}
                </h3>
                <p className="text-slate-600 text-sm font-semibold">Slot Tersisa Hari Ini</p>
              </div>
            </div>

            {/* Current Visitors */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#084B65]/20 to-[#0c6b8a]/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-[#084B65]/10 p-6 rounded-2xl shadow-lg hover:shadow-[#084B65]/10 transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#084B65] to-[#0c6b8a] rounded-xl shadow-lg">
                    <Users className="text-white" size={28} />
                  </div>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    SEDANG
                  </div>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-[#084B65] to-[#0c6b8a] bg-clip-text text-transparent mb-1">
                  {bookingData.bookedToday}
                </h3>
                <p className="text-slate-600 text-sm font-semibold">Pendaki Hari Ini</p>
              </div>
            </div>

            {/* Temperature */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-amber-200/50 p-6 rounded-2xl shadow-lg hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
                    <Thermometer className="text-white" size={28} />
                  </div>
                  <div className="p-2 bg-white/50 backdrop-blur-sm rounded-xl">
                    {weatherData[0].icon}
                  </div>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-1">
                  {weatherData[0].temp}°C
                </h3>
                <p className="text-slate-600 text-sm font-semibold">{weatherData[0].condition}</p>
              </div>
            </div>

            {/* Waiting List */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-red-200/50 p-6 rounded-2xl shadow-lg hover:shadow-red-500/10 transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                    <AlertTriangle className="text-white" size={28} />
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    ANTRI
                  </div>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-1">
                  {bookingData.waitingList}
                </h3>
                <p className="text-slate-600 text-sm font-semibold">Daftar Tunggu</p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            
            {/* Booking Information */}
            <div className="lg:col-span-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#084B65]/20 to-[#0c6b8a]/20 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-[#084B65] to-[#0a5d7a] backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-xl text-white">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl shadow-xl backdrop-blur-sm">
                      <Mountain className="text-white" size={36} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black">Info Booking</h2>
                      <p className="text-slate-200 font-medium">Real-time Status</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative group/item">
                      <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur group-hover/item:blur-sm transition duration-300"></div>
                      <div className="relative flex justify-between items-center p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <span className="text-slate-200 font-semibold">Total Kapasitas</span>
                        <span className="font-black text-2xl">{bookingData.totalSlots}</span>
                      </div>
                    </div>

                    <div className="relative group/item">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-xl blur group-hover/item:blur-sm transition duration-300"></div>
                      <div className="relative flex justify-between items-center p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <span className="text-slate-200 font-semibold">Sudah Booking</span>
                        <span className="font-black text-2xl text-red-300">{bookingData.bookedToday}</span>
                      </div>
                    </div>

                    <div className="relative group/item">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 rounded-xl blur group-hover/item:blur-sm transition duration-300"></div>
                      <div className="relative flex justify-between items-center p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <span className="text-slate-200 font-semibold">Jam Sibuk</span>
                        <span className="font-bold text-cyan-300">{bookingData.peakHours}</span>
                      </div>
                    </div>

                    <div className="relative group/item">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-xl blur group-hover/item:blur-sm transition duration-300"></div>
                      <div className="relative flex justify-between items-center p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <span className="text-slate-200 font-semibold">Slot Berikutnya</span>
                        <span className="font-bold text-emerald-300">{bookingData.nextAvailable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-16">
                    <div className="flex justify-between text-sm mb-5">
                      <span className="text-slate-200 font-semibold">Tingkat Hunian</span>
                      <span className="font-black text-lg">{Math.round((bookingData.bookedToday / bookingData.totalSlots) * 100)}%</span>
                    </div>
                    <div className="relative w-full bg-white/20 backdrop-blur-sm rounded-full h-4 border border-white/30">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-[#0c6b8a] h-4 rounded-full transition-all duration-1000 shadow-lg relative overflow-hidden"
                        style={{ width: `${(bookingData.bookedToday / bookingData.totalSlots) * 100}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <button className="relative group/btn overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl blur opacity-60 group-hover/btn:opacity-100 transition duration-300"></div>
                      <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        <CheckCircle size={18} />
                        <span>Booking</span>
                      </div>
                    </button>
                    
                    <button className="relative group/btn overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-xl blur opacity-60 group-hover/btn:opacity-100 transition duration-300"></div>
                      <div className="relative bg-gradient-to-r from-slate-500 to-slate-700 text-white px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        <Eye size={18} />
                        <span>Antrian</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather & Crowd Information */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Weather Forecast */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-300/20 to-slate-400/20 rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <div className="relative bg-white/80 backdrop-blur-2xl border border-slate-200/50 p-8 rounded-3xl shadow-lg">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl shadow-xl">
                        <Cloud className="text-white" size={36} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-[#084B65]">Prakiraan Cuaca</h2>
                        <p className="text-slate-600 font-medium">3 Hari Kedepan</p>
                      </div>
                    </div>
                    
                    {/* Refresh Button */}
                    <button
                      onClick={refreshWeather}
                      disabled={isLoadingWeather}
                      className="p-3 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl shadow-lg hover:shadow-slate-500/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <RefreshCw 
                        className={`text-white ${isLoadingWeather ? 'animate-spin' : ''}`} 
                        size={20} 
                      />
                    </button>
                  </div>

                  {/* Error Message */}
                  {weatherError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="text-red-500" size={20} />
                        <span className="text-red-700 font-medium">{weatherError}</span>
                      </div>
                    </div>
                  )}

                  {/* Weather Days Tabs */}
                  <div className="flex gap-3 mb-8 overflow-x-auto">
                    {displayWeatherData.map((weather, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedWeatherDay(index)}
                        disabled={isLoadingWeather}
                        className={`relative flex-shrink-0 px-6 py-3 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 disabled:opacity-50 ${
                          selectedWeatherDay === index
                            ? 'bg-gradient-to-r from-[#084B65] to-[#0a5d7a] text-white shadow-lg shadow-[#084B65]/25'
                            : 'bg-white/60 backdrop-blur-sm text-[#084B65] hover:bg-white/80 border border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {weatherIcons[weather.condition] || weatherIcons.default}
                          <span>{weather.day}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Weather Details */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { 
                        icon: Thermometer, 
                        label: "Suhu", 
                        value: isLoadingWeather ? '...' : `${currentWeatherData?.temp || 25}°C`, 
                        color: "from-amber-500 to-orange-500" 
                      },
                      { 
                        icon: Droplets, 
                        label: "Lembab", 
                        value: isLoadingWeather ? '...' : `${currentWeatherData?.humidity || 70}%`, 
                        color: "from-[#084B65] to-[#0c6b8a]" 
                      },
                      { 
                        icon: Wind, 
                        label: "Angin", 
                        value: isLoadingWeather ? '...' : `${currentWeatherData?.windSpeed || 5} km/h`, 
                        color: "from-slate-500 to-slate-600" 
                      },
                      { 
                        icon: CloudRain, 
                        label: "Hujan", 
                        value: isLoadingWeather ? '...' : `${currentWeatherData?.precipitation || 0} mm`, 
                        color: "from-slate-400 to-slate-500" 
                      }
                    ].map((item, index) => (
                      <div key={index} className="relative group/weather">
                        <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover/weather:opacity-40 transition duration-500`}></div>
                        <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl hover:bg-white/80 transition-all duration-500 hover:scale-105">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}>
                              {isLoadingWeather ? (
                                <Loader2 className="text-white animate-spin" size={20} />
                              ) : (
                                <item.icon className="text-white" size={20} />
                              )}
                            </div>
                            <span className="text-slate-700 font-bold text-sm">{item.label}</span>
                          </div>
                          <p className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Crowd Density */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#084B65]/20 to-[#0c6b8a]/20 rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-xl text-white">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-[#084B65] to-[#0c6b8a] rounded-2xl shadow-xl">
                      <Activity className="text-white" size={36} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black">Prediksi Kepadatan</h2>
                      <p className="text-slate-300 font-medium">Pengunjung Real-time</p>
                    </div>
                  </div>

                  {/* Current Crowd Level */}
                  <div className="relative group/crowd overflow-hidden rounded-2xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl blur"></div>
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Zap className="text-amber-400" size={24} />
                          <span className="text-slate-200 font-bold text-lg">Kepadatan Saat Ini</span>
                        </div>
                        <div className={`bg-gradient-to-r ${getCrowdColor(crowdData.level)} px-4 py-2 rounded-full font-black text-white shadow-lg ${getCrowdGlow(crowdData.level)}`}>
                          {crowdData.current}
                        </div>
                      </div>
                      <div className="relative w-full bg-white/20 backdrop-blur-sm rounded-full h-6 border border-white/30 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${getCrowdColor(crowdData.level)} h-6 rounded-full transition-all duration-1000 shadow-lg relative`}
                          style={{ width: `${crowdData.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">
                            {crowdData.level}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-2xl shadow-lg p-6 bg-white/80 backdrop-blur-xl border border-[#084B65]/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-[#084B65] to-[#0c6b8a] rounded-2xl shadow-xl">
                <SatelliteDish className="text-white" size={36} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#084B65]">Pemantauan Kondisi Gunung Bismo via Tegalsari</h2>
                <p className="text-slate-600 font-medium">Real-Time Data Monitoring</p>
              </div>
            </div>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://embed.windy.com/embed2.html?lat=-7.252461019484249&lon=109.89264339200045&detailLat=-7.252461019484249&detailLon=109.89264339200045&zoom=7&level=surface&overlay=wind&menu=&message=&marker=-7.252461019484249,109.89264339200045&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                className="absolute top-0 left-0 w-full h-full rounded-2xl border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;