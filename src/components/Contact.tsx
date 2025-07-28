import React from 'react';
import { Phone, MapPin, Users, AlertTriangle, Shield, Compass, MessageCircle } from 'lucide-react';

interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
} 

interface ServiceInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

interface RentalInfo {
  icon: string;
  name: string;
  options: {
    label: string;
    price: string;
  }[];
};

const GunungBismoContact: React.FC = () => {
  const contacts: ContactInfo[] = [
    {
      name: "Mas Boim",
      role: "Koordinator Pendakian",
      phone: "0812-3456-7890",
      whatsapp: "6281234567890"
    },
    {
      name: "Mas Nyock",
      role: "Guide Berpengalaman",
      phone: "0813-9876-5432",
      whatsapp: "6281398765432"
    },
    {
      name: "Mas Yasin",
      role: "Koordinator Basecamp",
      phone: "0856-1122-3344",
      whatsapp: "6285611223344"
    }
  ];

  const services: ServiceInfo[] = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Paket Guide",
      description: "Guide berpengalaman untuk grup 1-8 orang",
      price: "Rp 200.000"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sewa Peralatan",
      description: "Tenda, sleeping bag, carrier, dan peralatan lainnya",
      price: "Mulai Rp 50.000"
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Paket Lengkap",
      description: "Guide + peralatan + logistik untuk 2D1N",
      price: "Rp 350.000/orang"
    }
  ];

  const rentalItems: RentalInfo[] = [
  {
    icon: "/images/tent.png",
    name: "Tenda",
    options: [
      { label: "Kapasitas 2 orang", price: "25K" },
      { label: "Kapasitas 4 orang", price: "45K" },
      { label: "Kapasitas 6 orang", price: "55K" },
    ],
  },
  {
    icon: "/images/carrier.png",
    name: "Carrier",
    options: [
      { label: "30-40L", price: "15K" },
      { label: "45-55L", price: "25K" },
      { label: "60-80L", price: "35K" },
    ],
  },
  {
    icon: "/images/cookingset.png",
    name: "Cooking Set",
    options: [
      { label: "Kompor", price: "15K" },
      { label: "Nesting", price: "15K" },
      { label: "Set Alat Masak", price: "40K" },
    ],
  },
  {
    icon: "/images/sleepingbag.png",
    name: "Perlengkapan Lainnya",
    options: [
      { label: "Sleeping Bag", price: "15K" },
      { label: "Matras", price: "10K" },
      { label: "Headlamp", price: "10K" },
    ],
  },
];


  const handleWhatsAppClick = (phoneNumber: string, name: string): void => {
    const message = encodeURIComponent(`Halo ${name}, saya tertarik untuk mendaki Gunung Bismo via Tegalsari. Bisa bantu informasi lebih lanjut?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Kontak Pendakian */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#084B65] via-[#0a5d7a] to-[#0c6b8a] bg-clip-text text-transparent drop-shadow-sm mb-4">
                Kontak Pendakian
              </h2>

              <div className="flex items-center gap-2 mb-3 text-slate-600">
                <Phone className="w-6 h-6" />
                <span className="text-slate-600 text-lg font-medium">Informasi & Layanan Pendakian Gunung Bismo</span>
              </div>
              
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#084B65]/20 to-[#0c6b8a]/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>

                    <div className="relative bg-white/80 backdrop-blur-xl border border-[#084B65]/10 p-6 rounded-2xl shadow-lg hover:shadow-[#084B65]/10 transition-all duration-500 hover:scale-105">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-[#084B65] to-[#0c6b8a] rounded-xl shadow-md">
                          <Users className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold bg-gradient-to-r from-[#084B65] to-[#0c6b8a] bg-clip-text text-transparent">
                            {contact.name}
                          </h3>
                          <p className="text-slate-600 text-sm">{contact.role}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center justify-center gap-2 bg-[#084B65] text-white px-4 py-2 rounded-lg hover:bg-[#0c6b8a] transition-colors text-sm font-medium shadow"
                        >
                          <Phone className="w-4 h-4" />
                          {contact.phone}
                        </a>

                        <button
                          onClick={() => handleWhatsAppClick(contact.whatsapp, contact.name)}
                          className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium shadow hover:cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#084B65] via-[#0a5d7a] to-[#0c6b8a] bg-clip-text text-transparent drop-shadow-sm mb-4">
                Lokasi & Akses
              </h2>

              <div className="flex items-center gap-2 mb-3 text-slate-600">
                <MapPin className="w-6 h-6" />
                <span className="text-slate-600 text-lg font-medium">Informasi Alamat Basecamp Pendakian via Tegalsari</span>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-[#084B65] mb-4">Alamat Basecamp</h3>
                <p className="text-slate-700 mb-4">
                  Siwades, Tegalsari, Kec. Garung, Kabupaten Wonosobo, Jawa Tengah 56353
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                  <h4 className="font-semibold text-[#084B65] mb-2">Rute Transportasi:</h4>
                  <ul className="text-slate-700 space-y-1 text-sm">
                    <li>• Terminal Wonosobo → Angkot ke Tegalsari</li>
                    <li>• Dari Semarang: 3-4 jam perjalanan</li>
                    <li>• Dari Jakarta: 6-7 jam perjalanan</li>
                    <li>• Parkir tersedia di basecamp</li>
                  </ul>
                </div>

                {/* Peta Lokasi */}
                <div className="w-full h-56 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20113.376315399455!2d109.88687487032867!3d-7.283745950147815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700bf176de5ba9%3A0xfdf41a505c846c5d!2sBasecamp%20Pendakian%20Gunung%20Bismo%20Via%20Tegalsari!5e0!3m2!1sid!2sid!4v1751711643377!5m2!1sid!2sid"
                    width="650"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Layanan & Paket */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#084B65] via-[#0a5d7a] to-[#0c6b8a] bg-clip-text text-transparent drop-shadow-sm mb-8 text-center">Layanan & Paket</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#084B65] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#084B65] mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-green-600">{service.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {rentalItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#084B65]/30 via-[#0a5d7a]/30 to-[#0c6b8a]/30 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>

                <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#084B65] via-[#0a5d7a] to-[#0c6b8a] text-white shadow-lg hover:scale-[1.02] transition-all duration-500 border border-white/10">
                  <div className="overflow-hidden rounded-xl shadow-md w-full md:w-64 flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="flex-1 w-full">
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <ul className="space-y-1 text-sm font-medium">
                      {item.options.map((opt, i) => (
                        <li key={i} className="flex justify-between border-b border-white/10 pb-1">
                          <span>{opt.label}</span>
                          <span className="font-semibold">{opt.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Informasi Penting */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Informasi Penting
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-amber-800">
              <div>
                <h4 className="font-semibold mb-2">Persyaratan:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Membawa KTP/identitas</li>
                  <li>• Kondisi fisik sehat</li>
                  <li>• Pengalaman pendakian minimal</li>
                  <li>• Peralatan pendakian lengkap</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Fasilitas:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Pos pendakian di basecamp</li>
                  <li>• Toilet umum</li>
                  <li>• Warung makan</li>
                  <li>• Area parkir</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 bg-gradient-to-r from-[#084B65] to-blue-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Siap Menaklukkan Gunung Bismo?</h3>
            <p className="text-blue-100 mb-6">Hubungi kami sekarang untuk informasi lebih lanjut dan booking pendakian Anda!</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => handleWhatsAppClick('6281234567890', 'Pak Slamet')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Chat WhatsApp
              </button>
              
              <a 
                href="tel:081234567890"
                className="bg-white text-[#084B65] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GunungBismoContact;
