import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import PublicRoute from '../components/PublicRoute';

import HomePage from '../pages/HomePage';
import MonitoringPage from '../pages/MonitoringPage';
import RegulationPage from '../pages/RegulationPage';
import ContactPage from '../pages/ContactPage';

const routes: RouteObject[] = [
  {
    path: '/pemantauan',
    element: (
      <PublicRoute>
        <MonitoringPage />
      </PublicRoute>
    ),
  },
  {
    path: '/peraturan',
    element: (
      <PublicRoute>
        <RegulationPage />
      </PublicRoute>
    ),
  },
  {
    path: '/kontak',
    element: (
      <PublicRoute>
        <ContactPage />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <PublicRoute>
        <HomePage />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default routes;
