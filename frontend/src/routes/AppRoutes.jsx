import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlaceholderPage from '../pages/PlaceholderPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/about"
        element={
          <PlaceholderPage
            title="About GROW India"
            category="Corporate Overview"
            description="Govind Raadhaa Organizational Wonders (GROW) – Business Growth & Systems Partner India. Building Systems, Managing Risks, and Driving Growth across India."
          />
        }
      />
      <Route
        path="/services"
        element={
          <PlaceholderPage
            title="Core Divisions & Services"
            category="Solutions Suite"
            description="Our specialized divisions: GROW Shield, GROW Engine, GROW Consulting, GROW Systems, GROW Marketing, GROW Scale, and GROW Legal."
          />
        }
      />
      <Route
        path="/services/grow-shield"
        element={
          <PlaceholderPage
            title="GROW Shield"
            category="Legal, Compliance & Risk Protection"
            description="Corporate governance systems, statutory compliance registers, enterprise risk assessments, and internal control frameworks."
          />
        }
      />
      <Route
        path="/services/grow-engine"
        element={
          <PlaceholderPage
            title="GROW Engine"
            category="SOPs, Systems & Process Structuring"
            description="Standard Operating Procedures (SOPs), process mapping, workflow design, operational systemization, and departmental execution playbooks."
          />
        }
      />
      <Route
        path="/services/grow-consulting"
        element={
          <PlaceholderPage
            title="GROW Consulting"
            category="Business Strategy & Growth Consulting"
            description="Business health diagnostics, strategic growth roadmaps, organizational restructuring, and executive leadership advisory."
          />
        }
      />
      <Route
        path="/services/grow-systems"
        element={
          <PlaceholderPage
            title="GROW Systems"
            category="KPI, MIS & Performance Management"
            description="Key Performance Indicators (KPIs), Management Information Systems (MIS), executive dashboards, and performance review protocols."
          />
        }
      />
      <Route
        path="/services/grow-marketing"
        element={
          <PlaceholderPage
            title="GROW Marketing"
            category="Branding, Advertising & Lead Generation"
            description="Corporate brand positioning, marketing system structuring, customer acquisition frameworks, and lead generation coordination."
          />
        }
      />
      <Route
        path="/services/grow-scale"
        element={
          <PlaceholderPage
            title="GROW Scale"
            category="Business Expansion & Revenue Growth"
            description="Scalability models, multi-branch expansion templates, channel partner structuring, and revenue system optimization."
          />
        }
      />
      <Route
        path="/services/grow-legal"
        element={
          <PlaceholderPage
            title="GROW Legal"
            category="Agreements & Documentation Support"
            description="Commercial contracts, agreement drafting templates, policy documentation, and contractual risk checklists. (Non-advocacy corporate documentation advisory)."
          />
        }
      />
      <Route
        path="/corporate-consulting"
        element={
          <PlaceholderPage
            title="Corporate Consulting Practice"
            category="Practice Areas"
            description="Institutional systems, governance, and scalability advisory for promoter-led companies, growing enterprises, and MSMEs across India."
          />
        }
      />
      <Route
        path="/government-consulting"
        element={
          <PlaceholderPage
            title="Government & Public Sector Consulting"
            category="Practice Areas"
            description="Administrative process modernization, institutional governance documentation, and monitoring frameworks for potential government client segments."
          />
        }
      />
      <Route
        path="/industries"
        element={
          <PlaceholderPage
            title="Industry Practices"
            category="Sectors Across India"
            description="Tailored systems architecture for Manufacturing, Retail & Wholesale, Healthcare, Construction, IT Services, Education, Food Processing, and Public Sector."
          />
        }
      />
      <Route
        path="/methodology"
        element={
          <PlaceholderPage
            title="GROW Frameworks & Methodology"
            category="Methodology"
            description="The 6-Stage GROW Operating Model (Understand, Assess, Design, Implement, Measure, Improve) and 9-Phase GRC Implementation Methodology."
          />
        }
      />
      <Route
        path="/partners"
        element={
          <PlaceholderPage
            title="Strategic Partner Ecosystem"
            category="Technology & Growth Partners"
            description="Collaborations with Gamotech Solutions (ERP & Digital Transformation) and Digital Buddies (Digital Marketing & Growth)."
          />
        }
      />
      <Route
        path="/training"
        element={
          <PlaceholderPage
            title="Executive Training & Capacity Building"
            category="Capacity Building"
            description="Structured workshops on SOP adoption, risk and compliance awareness, KPI management, and leadership systems governance."
          />
        }
      />
      <Route
        path="/audit"
        element={
          <PlaceholderPage
            title="Systems & Compliance Audit"
            category="Audits & Diagnostics"
            description="Comprehensive 360-degree organizational health check, compliance risk assessment, and process bottleneck diagnostic."
          />
        }
      />
      <Route
        path="/contact"
        element={
          <PlaceholderPage
            title="Contact GROW India"
            category="Get in Touch"
            description="Connect with GROW India for diagnostic audits, corporate systems consulting, and strategic advisory across India."
          />
        }
      />
      <Route
        path="*"
        element={
          <PlaceholderPage
            title="404 - Page Not Found"
            category="Error"
            description="The requested page could not be found. Please navigate back to the home page or select from the navigation menu."
          />
        }
      />
    </Routes>
  );
}
