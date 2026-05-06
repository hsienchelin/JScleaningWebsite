import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/common/FloatingContact';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';

function Analytics() {
  useGoogleAnalytics();
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </BrowserRouter>
  );
}
