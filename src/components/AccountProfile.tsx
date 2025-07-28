import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Eye, 
  Calendar, 
  Shield, 
  Activity, 
  Camera, 
  Edit3, 
  Save, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  UserCheck,
  Lock,
  Key,
  Bell,
  Globe,
  Download,
  Upload
} from 'lucide-react';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  location: string;
  avatar: string;
  totalVisits: number;
  status: 'aktif' | 'nonaktif';
  lastSeen: string;
  joinDate: string;
}

const AccountProfileDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'settings' | 'security'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 'USR-2025-001',
    name: 'Ahmad Fadhil Rahman',
    email: 'ahmad.fadhil@acehprov.go.id',
    phone: '+62 812-3456-7890',
    position: 'Kepala Bagian Keuangan',
    department: 'Biro Keuangan',
    location: 'Banda Aceh, Provinsi Aceh',
    avatar: '/api/placeholder/150/150',
    totalVisits: 1247,
    status: 'aktif',
    lastSeen: '2025-06-23 14:30:25',
    joinDate: '2023-01-15'
  });

  const [editForm, setEditForm] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone,
    position: userProfile.position,
    department: userProfile.department,
    location: userProfile.location
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSaveProfile = () => {
    setUserProfile(prev => ({
      ...prev,
      ...editForm
    }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditForm({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone,
      position: userProfile.position,
      department: userProfile.department,
      location: userProfile.location
    });
    setIsEditing(false);
  };

  const handlePasswordChange = () => {
    // Logic untuk mengubah password
    console.log('Password changed');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setShowPasswordForm(false);
  };

  const formatLastSeen = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const ProfileSection = () => (
    <div className="space-y-6 md:space-y-8">
      {/* Profile Header */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/25">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </div>
            <button className="absolute bottom-0 right-0 p-2 md:p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer">
              <Camera className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </button>
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-2 md:space-y-4">
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{userProfile.name}</h2>
              <p className="text-cyan-200 text-sm md:text-lg">{userProfile.position}</p>
              <p className="text-cyan-300 text-xs md:text-base">{userProfile.department}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
              <div className={`inline-flex items-center space-x-2 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold ${
                userProfile.status === 'aktif' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  userProfile.status === 'aktif' ? 'bg-emerald-400' : 'bg-red-400'
                }`}></div>
                <span>Status: {userProfile.status.charAt(0).toUpperCase() + userProfile.status.slice(1)}</span>
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/20">
                <UserCheck className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                <span className="text-cyan-200 text-xs md:text-sm font-medium">ID: {userProfile.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1 md:space-y-2">
              <p className="text-cyan-200 font-medium text-sm md:text-base">Total Kunjungan</p>
              <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{userProfile.totalVisits.toLocaleString('id-ID')}</p>
            </div>
            <div className="p-2 md:p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
              <Activity className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1 md:space-y-2">
              <p className="text-cyan-200 font-medium text-sm md:text-base">Terakhir Dilihat</p>
              <p className="text-sm md:text-base font-semibold text-white drop-shadow-lg">{formatLastSeen(userProfile.lastSeen).split(' ').slice(0, 3).join(' ')}</p>
              <p className="text-xs md:text-sm text-cyan-300">{formatLastSeen(userProfile.lastSeen).split(' ').slice(3).join(' ')}</p>
            </div>
            <div className="p-2 md:p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/50 transition-all duration-300 transform group-hover:scale-110">
              <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="group bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1 md:space-y-2">
              <p className="text-cyan-200 font-medium text-sm md:text-base">Bergabung Sejak</p>
              <p className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                {new Date(userProfile.joinDate).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
              </p>
            </div>
            <div className="p-2 md:p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:scale-110">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white">Detail Profile</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            <Edit3 className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold text-sm md:text-base">{isEditing ? 'Batal' : 'Edit Profile'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { icon: User, label: 'Nama Lengkap', key: 'name' },
            { icon: Mail, label: 'Email', key: 'email' },
            { icon: Phone, label: 'Nomor Telepon', key: 'phone' },
            { icon: Building, label: 'Jabatan', key: 'position' },
            { icon: Shield, label: 'Departemen', key: 'department' },
            { icon: MapPin, label: 'Lokasi', key: 'location' }
          ].map(({ icon: Icon, label, key }) => (
            <div key={key} className="space-y-2">
              <label className="flex items-center space-x-2 text-cyan-200 font-medium text-sm md:text-base">
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{label}</span>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm[key as keyof typeof editForm]}
                  onChange={(e) => setEditForm(prev => ({ ...prev, [key]: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                />
              ) : (
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 text-white">
                  {userProfile[key as keyof UserProfile]}
                </div>
              )}
            </div>
          ))}
        </div>

        {isEditing && (
          <div className="flex space-x-4 mt-6 md:mt-8">
            <button
              onClick={handleSaveProfile}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Save className="w-4 h-4 md:w-5 md:h-5" />
              <span>Simpan</span>
            </button>
            <button
              onClick={handleCancelEdit}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
              <span>Batal</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const SecuritySection = () => (
    <div className="space-y-6 md:space-y-8">
      {/* Password Change */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white">Keamanan Akun</h3>
            <p className="text-cyan-200 text-sm md:text-base">Kelola password dan pengaturan keamanan akun Anda</p>
          </div>
          <div className="p-3 md:p-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg shadow-red-500/25">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="text-white font-semibold text-sm md:text-base">Password</h4>
                <p className="text-cyan-200 text-xs md:text-sm">Terakhir diubah 30 hari yang lalu</p>
              </div>
              <button
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                <Key className="w-4 h-4" />
                <span className="text-sm font-medium">Ubah Password</span>
              </button>
            </div>
          </div>

          {showPasswordForm && (
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20 space-y-4">
              <div className="space-y-2">
                <label className="text-cyan-200 font-medium text-sm">Password Saat Ini</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-cyan-200 font-medium text-sm">Password Baru</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-cyan-200 font-medium text-sm">Konfirmasi Password Baru</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handlePasswordChange}
                  className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Update Password</span>
                </button>
                <button
                  onClick={() => setShowPasswordForm(false)}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  <span>Batal</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Pengaturan Keamanan</h3>
        
        <div className="space-y-4">
          {[
            { title: 'Notifikasi Login', desc: 'Dapatkan notifikasi saat ada login dari perangkat baru', enabled: true },
            { title: 'Verifikasi 2 Langkah', desc: 'Tambahkan lapisan keamanan ekstra untuk akun Anda', enabled: false },
            { title: 'Logout Otomatis', desc: 'Logout otomatis setelah 30 menit tidak aktif', enabled: true }
          ].map(({ title, desc, enabled }, index) => (
            <div key={index} className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="space-y-1">
                <h4 className="text-white font-semibold">{title}</h4>
                <p className="text-cyan-200 text-sm">{desc}</p>
              </div>
              <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                enabled ? 'bg-cyan-500' : 'bg-white/20'
              }`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SettingsSection = () => (
    <div className="space-y-6 md:space-y-8">
      {/* General Settings */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Pengaturan Umum</h3>
            <p className="text-cyan-200 text-sm">Sesuaikan preferensi aplikasi Anda</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { icon: Bell, title: 'Notifikasi', desc: 'Kelola notifikasi yang Anda terima' },
            { icon: Globe, title: 'Bahasa', desc: 'Indonesia', hasArrow: true },
            { icon: Eye, title: 'Tema Tampilan', desc: 'Mode Gelap', hasArrow: true },
            { icon: Download, title: 'Auto Download', desc: 'Download laporan secara otomatis' },
            { icon: Upload, title: 'Auto Backup', desc: 'Backup data secara berkala' }
          ].map(({ icon: Icon, title, desc, hasArrow }, index) => (
            <div key={index} className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">{title}</h4>
                  <p className="text-cyan-200 text-sm">{desc}</p>
                </div>
              </div>
              {hasArrow && (
                <div className="text-cyan-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Export Data */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Data & Privasi</h3>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Download className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <h4 className="text-white font-semibold">Export Data</h4>
                <p className="text-cyan-200 text-sm">Download semua data akun Anda</p>
              </div>
            </div>
          </button>
          
          <button className="w-full flex items-center justify-between bg-red-500/20 backdrop-blur-sm p-4 rounded-xl border border-red-500/30 hover:bg-red-500/30 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3">
              <X className="w-5 h-5 text-red-400" />
              <div className="text-left">
                <h4 className="text-red-300 font-semibold">Hapus Akun</h4>
                <p className="text-red-200 text-sm">Hapus akun dan semua data secara permanen</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

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
          <div className="flex flex-col space-y-6">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold drop-shadow-lg bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                PROFILE AKUN
              </h1>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-xl text-cyan-100">
                <span className="font-semibold bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Sistem Informasi Keuangan Daerah</span>
                <span className="hidden md:block w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></span>
                <span className="bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-white/30">Provinsi Aceh</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-2 md:space-x-4">
              {[
                { id: 'profile', label: 'Profile', icon: User },
                { id: 'settings', label: 'Pengaturan', icon: Settings },
                { id: 'security', label: 'Keamanan', icon: Shield }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as never)}
                  className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    activeTab === id
                      ? 'bg-white/30 backdrop-blur-sm text-white border border-white/40 shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-cyan-200 border border-white/20 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        {activeTab === 'profile' && <ProfileSection />}
        {activeTab === 'settings' && <SettingsSection />}
        {activeTab === 'security' && <SecuritySection />}

        {/* Footer */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 bg-white/10 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center space-x-2 md:space-x-3">
              <User className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
              <span className="text-cyan-100 font-medium text-sm md:text-base">Profile Management System</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-cyan-200 text-xs md:text-sm">Sistem Informasi Keuangan Daerah Provinsi Aceh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfileDashboard;