import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import CorporateConsultingPage from '../pages/CorporateConsultingPage';
import GovernmentConsultingPage from '../pages/GovernmentConsultingPage';
import IndustriesPage from '../pages/IndustriesPage';
import MethodologyPage from '../pages/MethodologyPage';
import AuditPage from '../pages/AuditPage';
import TrainingPage from '../pages/TrainingPage';
import PartnersPage from '../pages/PartnersPage';
import ClientsPartnersPage from '../pages/ClientsPartnersPage';
import ContactPage from '../pages/ContactPage';
import PlaceholderPage from '../pages/PlaceholderPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Home */}
      <Route path="/" element={<HomePage />} />

      {/* 2. About */}
      <Route path="/about" element={<AboutPage />} />

      {/* 3. Services Suite & Individual 7 Division Deep-Dives */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />

      {/* 4. Practices Group */}
      <Route path="/corporate-consulting" element={<CorporateConsultingPage />} />
      <Route path="/government-consulting" element={<GovernmentConsultingPage />} />
      <Route path="/industries" element={<IndustriesPage />} />

      {/* 5. Approach & Audit Group */}
      <Route path="/methodology" element={<MethodologyPage />} />
      <Route path="/audit" element={<AuditPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/partners" element={<ClientsPartnersPage />} />
      <Route path="/clients" element={<ClientsPartnersPage />} />
      <Route path="/clients-and-partners" element={<ClientsPartnersPage />} />

      {/* 6. Contact */}
      <Route path="/contact" element={<ContactPage />} />

      {/* 404 Fallback */}
      <Route
        path="*"
        element={
          <PlaceholderPage
            title="404 - Page Not Found"
            category="Error"
            description="The requested page could not be found. Please navigate back to the home page or select an item from the navigation menu."
          />
        }
      />
    </Routes>
  );
}
