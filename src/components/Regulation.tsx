import React from 'react';
import { 
  Mountain, 
  Clock, 
  Shield, 
  Camera,
  Car,
  FileText,
  CheckCircle,
  XCircle,
  Info,
  Globe,
  CreditCard,
  Phone
} from 'lucide-react';

const MountainRulesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="relative py-12 px-4 text-white"
        style={{ backgroundColor: '#084B65' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Mountain className="w-8 h-8" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            STANDAR OPERASIONAL PROSEDUR<br />
            PELAKSANAAN KUNJUNGAN WISATA ALAM<br />
            GUNUNG BISMO VIA TEGAL SARI
          </h1>
          <div className="w-32 h-1 bg-white/60 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Document Content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            
            {/* Document Header */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Dokumen Resmi</h2>
                    <p className="text-gray-600">Pengelola Gunung Bismo</p>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>Berlaku sejak: 1 Januari 2024</p>
                  <p>Revisi terakhir: Juni 2024</p>
                </div>
              </div>
            </div>

            {/* Rules Content */}
            <div className="p-8 lg:p-12">
              
              {/* Rule Items */}
              <div className="space-y-8">
                
                {/* Rule 1 */}
                <div className="flex gap-6 group hover:bg-blue-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-200 transition-colors">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Globe className="w-5 h-5 text-blue-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Pembelian Tiket Masuk</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Pengunjung wajib melakukan pembelian tiket masuk secara online melalui situs resmi yang dikelola oleh Balai Besar Pengelola Gunung Bismo. Prosedur dan tata cara pembelian tiket secara online dapat dibaca dan dipelajari pada situs resmi Balai Besar Pengelola Gunung Bismo yaitu <span className="text-blue-600 font-medium">https://gunungbismo.id/</span> dan media sosial serta papan informasi yang disediakan di kantor pengelolaan, pos penjagaan dan loket resmi Balai Besar Pengelola Gunung Bismo.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Catatan:</strong> Besaran tiket masuk dan beraktifitas di dalam kawasan Gunung Bismo sesuai dengan PP Nomor 36 Tahun 2024 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak yang Berlaku pada Kementerian Lingkungan Hidup dan Kehutanan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="flex gap-6 group hover:bg-green-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold group-hover:bg-green-200 transition-colors">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-green-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Bukti Pembelian Tiket</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Pengunjung wajib menunjukkan bukti pembelian tiket secara online dan/atau dokumen perizinan kepada petugas di pintu masuk.
                    </p>
                  </div>
                </div>

                {/* Rule 3 */}
                <div className="flex gap-6 group hover:bg-purple-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold group-hover:bg-purple-200 transition-colors">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Camera className="w-5 h-5 text-purple-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Aktivitas Fotografi Non-Komersial</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Pengunjung yang akan melakukan aktivitas pengambilan foto/gambar/video dengan menggunakan drone untuk kepentingan pribadi (non komersial) dapat langsung melakukan pembayaran melalui booking online.
                    </p>
                  </div>
                </div>

                {/* Rule 4 */}
                <div className="flex gap-6 group hover:bg-orange-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold group-hover:bg-orange-200 transition-colors">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Camera className="w-5 h-5 text-orange-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Aktivitas Komersial</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Pengunjung yang akan melakukan aktivitas khusus di dalam kawasan Gunung Bismo, seperti pengambilan foto/gambar/video komersial termasuk kegiatan prewedding dan/atau aktivitas lainnya, agar menyampaikan kepada petugas dan melakukan proses perizinan sesuai prosedur sebelum memasuki kawasan Gunung Bismo.
                    </p>
                  </div>
                </div>

                {/* Rule 5 */}
                <div className="flex gap-6 group hover:bg-indigo-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold group-hover:bg-indigo-200 transition-colors">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Clock className="w-5 h-5 text-indigo-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Pelayanan kunjungan wisata alam di Kawasan Gunung Bismo dilakukan mulai pukul 06.00 WIB s/d pukul 17.00 WIB kecuali pengunjung yang menginap di penginapan (hotel/homestay/lainnya) dengan akses melewati kawasan Gunung Bismo, dengan menunjukkan bukti pembelian tiket online dan atau pemesanan/pembayaran penginapan.
                    </p>
                  </div>
                </div>

                {/* Rule 6 */}
                <div className="flex gap-6 group hover:bg-red-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold group-hover:bg-red-200 transition-colors">
                      6
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Car className="w-5 h-5 text-red-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Kendaraan Bermotor</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Pengunjung dapat melakukan kunjungan wisata alam dengan menggunakan kendaraan roda 2 dan roda 4, dengan tarif masuk kendaraan yang sudah ditetapkan. Setiap pengunjung wajib menggunakan kendaraan roda 4 yang disediakan oleh pelaku jasa transportasi masyarakat setempat, dan disarankan menggunakan kendaraan yang sudah mendapatkan sertifikat uji kelayakan dari Pemerintah Daerah setempat, yang ditandai dengan pemasangan stiker pada kendaraan.
                    </p>
                  </div>
                </div>

                {/* Rule 7 */}
                <div className="flex gap-6 group hover:bg-teal-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold group-hover:bg-teal-200 transition-colors">
                      7
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Shield className="w-5 h-5 text-teal-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Pembatasan Kendaraan Roda 4</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Pengecualian ketentuan penggunaan jenis kendaraan roda 4 pada poin 6 diberlakukan bagi pengunjung yang hanya berkunjung ke penginapan dan tempat makan dengan akses melewati kawasan Gunung Bismo kecuali kawasan Kaldera Tengger (Laut Pasir dan Savana).
                    </p>
                  </div>
                </div>

                {/* Rule 8 */}
                <div className="flex gap-6 group hover:bg-cyan-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold group-hover:bg-cyan-200 transition-colors">
                      8
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Ketentuan Konservasi</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Selama berada di dalam kawasan Gunung Bismo, pengunjung wajib mematuhi seluruh ketentuan masuk kawasan konservasi.
                    </p>
                  </div>
                </div>

                {/* Rule 9 - Prohibited Items */}
                <div className="flex gap-6 group hover:bg-red-50/50 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold group-hover:bg-red-200 transition-colors">
                      9
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <XCircle className="w-5 h-5 text-red-600 mt-1" />
                      <h3 className="font-semibold text-gray-800">Larangan Selama Kunjungan</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Selama melaksanakan kunjungan wisata alam, pengunjung dilarang:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Memasuki areal yang tidak diperkenankan bagi pengunjung</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Merusak dan mengambil bagian dari fasilitas yang ada di Kawasan Gunung Bismo</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Mengambil, memetik, memotong tumbuhan dan/atau bagian-bagiannya, serta benda-benda lainnya</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Menangkap, melukai, membunuh dan/atau membawa keluar satwa yang ada di dalam Kawasan Gunung Bismo</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Membawa binatang peliharaan ke dalam Kawasan Gunung Bismo</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Membawa minuman keras atau minuman yang mengandung alkohol</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Membawa obat-obatan terlarang, seperti putau, heroin, ganja dan sejenisnya</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-red-800">Membawa alat musik dan alat bunyi-bunyian lainnya</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div 
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ backgroundColor: '#084B65' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Informasi Kontak</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Pos Pendakian Tegal Sari</h4>
                    <p className="text-blue-100">+62 813-2345-6789</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tim SAR Gunung Bismo</h4>
                    <p className="text-blue-100">+62 856-7890-1234</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Website Resmi</h4>
                    <p className="text-blue-100">https://gunungbismo.id/</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Peringatan Penting</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="font-medium">Setiap pelanggaran terhadap peraturan ini akan dikenakan sanksi sesuai dengan ketentuan perundang-undangan yang berlaku.</p>
                <p>Untuk keselamatan bersama, mohon patuhi seluruh peraturan yang telah ditetapkan.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center py-8 bg-gray-50 rounded-2xl">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Selamat Menikmati Keindahan Gunung Bismo
            </h3>
            <p className="text-gray-600">
              Mari bersama-sama menjaga kelestarian alam untuk generasi mendatang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainRulesPage;