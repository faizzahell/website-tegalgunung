export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
}

export interface AuthButton {
  id: string;
  label: string;
  path: string;
  variant: 'primary' | 'secondary';
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'beranda',
    label: 'Beranda',
    path: '/',
  },
  {
    id: 'destinasi',
    label: 'Destinasi Wisata',
    path: '/destinasi',
  },
  {
    id: 'panduan',
    label: 'Panduan Booking',
    path: '/panduan-booking',
  },
  {
    id: 'kuota',
    label: 'Cek Kuota',
    path: '/cek-kuota',
  },
  {
    id: 'berita',
    label: 'Berita',
    path: '/berita',
  },
  {
    id: 'sop',
    label: 'SOP',
    path: '/sop',
  },
];

export const AUTH_BUTTONS: AuthButton[] = [
  {
    id: 'login',
    label: 'Masuk',
    path: '/login',
    variant: 'secondary',
  },
  {
    id: 'register',
    label: 'Daftar',
    path: '/register',
    variant: 'primary',
  },
];

export const SITE_CONFIG = {
  siteName: 'Tegalsari Wonosobo',
  siteDescription: 'Booking Online Objek Wisata Tegalsari Wonosobo',
  logo: '/logo-tegalsari.png',
};