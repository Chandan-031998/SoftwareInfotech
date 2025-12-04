// src/App.tsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import FloatingWhatsApp from './components/FloatingWhatsApp'; // 👈 add this

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={handleNavigate} />;
    } else if (currentPage === 'about') {
      return <About onNavigate={handleNavigate} />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    } else if (currentPage === 'courses') {
      return <Courses />;
    } else if (currentPage.startsWith('service-')) {
      const category = currentPage.replace('service-', '');
      return <ServiceDetail category={category} onNavigate={handleNavigate} />;
    }
    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
      <FloatingWhatsApp /> {/* 👈 floating button */}
    </div>
  );
}

export default App;
