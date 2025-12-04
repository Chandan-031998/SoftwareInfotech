import { useState } from 'react';
import { Mail, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { serviceCategories } from '../types/services';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServiceNavigate = (category: string) => {
    onNavigate(`service-${category}`);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      

      {/* MAIN NAVBAR */}
      <div className="bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                src="/Software Infotech Logo png (3).png"
                alt="Software Infotech"
                className="h-10 sm:h-12 w-auto"
              />
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => onNavigate('home')}
                className={`text-sm md:text-base font-medium transition-colors ${
                  currentPage === 'home'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => onNavigate('about')}
                className={`text-sm md:text-base font-medium transition-colors ${
                  currentPage === 'about'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </button>

              {/* Services dropdown – hover, centered under trigger */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 text-sm md:text-base font-medium transition-colors ${
                    currentPage.startsWith('service')
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div
                    className="
                      absolute left-1/2 top-full -translate-x-1/2 translate-y-2
                      w-[26rem] bg-white rounded-2xl shadow-2xl border border-gray-100
                      py-3 z-40
                    "
                  >
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                        Service Categories
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Explore solutions tailored for your industry and needs.
                      </p>
                    </div>

                    <div className="px-4 pt-3 pb-2">
                      <div className="flex flex-wrap gap-2">
                        {serviceCategories.map((category) => (
                          <button
                            key={category}
                            onClick={() => handleServiceNavigate(category)}
                            className="
                              px-3 py-1.5 rounded-full border border-gray-200
                              text-xs font-medium text-gray-700
                              hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700
                              transition-colors
                            "
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Courses link */}
              <button
                onClick={() => onNavigate('courses')}
                className={`text-sm md:text-base font-medium transition-colors ${
                  currentPage === 'courses'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Courses
              </button>

              {/* Contact button – solid, outline on hover */}
              <button
                onClick={() => onNavigate('contact')}
                className={`ml-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm md:text-base font-semibold border transition-all ${
                  currentPage === 'contact'
                    ? 'bg-blue-600 text-white border-blue-600 hover:bg-white hover:text-blue-600'
                    : 'bg-blue-600 text-white border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPage === 'home'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPage === 'about'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              About
            </button>

            {/* Mobile Services accordion */}
            <div className="py-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-base font-medium text-gray-700 py-2"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="mt-1 ml-3 space-y-1 border-l border-gray-200 pl-3">
                  {serviceCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleServiceNavigate(category)}
                      className="block w-full text-left py-1.5 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Courses in mobile menu */}
            <button
              onClick={() => {
                onNavigate('courses');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPage === 'courses'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Courses
            </button>

            {/* Contact – full-width solid button on mobile */}
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-center mt-2 rounded-full bg-blue-600 px-4 py-2.5 text-base font-semibold text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
