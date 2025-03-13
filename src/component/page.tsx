import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import dashboard from '../assets/img/dashboard.png';
import catoff from '../assets/img/catoff.png';
import armidah from '../assets/img/amidarh.png';

const LinkupLandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observedElements = useRef<Record<string, HTMLElement>>({});

  // Initialize Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all registered elements
    Object.values(observedElements.current).forEach((el: HTMLElement) => {
      if (el) observer.observe(el);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  // Register a ref for Intersection Observer
  const registerRef = (id: string) => (element: HTMLElement | null) => {
    if (element) {
      observedElements.current[id] = element;
      element.id = id;
    }
  };

  // Animation utility functions
  const fadeInUp = (id: string) => (isVisible[id] ? 'animate-in fade-in-0 slide-in-from-bottom-10 duration-700' : 'opacity-0 translate-y-10');
  const fadeIn = (id: string) => (isVisible[id] ? 'animate-in fade-in-0 duration-1000' : 'opacity-0');
  const scaleIn = (id: string) => (isVisible[id] ? 'animate-in fade-in-0 zoom-in-95 duration-700' : 'opacity-0 scale-95');
  const slideInRight = (id: string) => (isVisible[id] ? 'animate-in fade-in-0 slide-in-from-right-10 duration-700' : 'opacity-0 translate-x-10');

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
              <div className="bg-white rounded-full w-6 h-6"></div>
            </div>
            <span className="ml-2 font-bold text-lg">LinkUp</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href='http://linkup-ruddy.vercel.app/' className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            Launch App
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <a href='http://linkup-ruddy.vercel.app/' className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium mt-2">
              Launch App
            </a>
          </div>
        </div>
      )}

      {/* Main grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 flex-grow">
        {/* Left panel */}
        <div
          ref={registerRef('left-panel')}
          className={`bg-white rounded-3xl p-6 flex flex-col justify-center items-center relative overflow-hidden ${fadeInUp('left-panel')}`}
        >
          <div className="absolute inset-0 bg-gray-100 z-0"></div>
          <div className="relative z-10 text-center">
            <div className="text-xs text-gray-500">
              Your portal to
              <br />
              leading Solana jobs
            </div>

            <h1 className="text-3xl font-bold mt-4 leading-tight">
              A community powered
              <br />
              recruiting agency
            </h1>

            <p className="mt-4 text-sm text-gray-700">
              Building careers in the Solana ecosystem.
            </p>

            <button className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm mt-6">
              Get Started
            </button>
          </div>
        </div>

        {/* Center panel */}
        <div
          ref={registerRef('center-panel')}
          className={`bg-white rounded-3xl p-6 md:col-span-1 overflow-hidden ${fadeIn('center-panel')}`}
        >
          <div className="flex justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                <div className="bg-white rounded-full w-4 h-4"></div>
              </div>
              <span className="text-sm font-medium">Solana</span>
              <span className="text-sm font-medium">Jobs</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">About</span>
              <span className="text-sm font-medium">Blog</span>
              <button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Browse Jobs</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4">
              <div className="text-xs text-gray-500">
                Your portal to leading Solana jobs
                <br />
                Redefining African community
              </div>

              <h1 className="text-5xl font-bold mt-4 leading-tight">
                Earn
                <br />
                USDC
              </h1>

              <p className="mt-4 text-sm text-gray-700">
                Our mission is to help community members and global talent find jobs with leading Solana ecosystem projects.
              </p>
            </div>

            <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
              <div
                ref={registerRef('usdc-image')}
                className={`w-full h-64 relative ${scaleIn('usdc-image')}`}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/024/093/471/non_2x/usd-coin-usdc-glass-crypto-coin-3d-illustration-free-png.png"
                  alt="USDC"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div
          ref={registerRef('right-panel')}
          className={`bg-white rounded-3xl p-6 overflow-hidden ${slideInRight('right-panel')}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">
                Scaling
                <br />
                Solana
              </h2>

              <p className="text-sm mb-8">Scaling the Solana Job Network in Africa</p>

              <div className="space-y-8 mt-8">
                <div>
                  <h3 className="font-bold mb-2">Bridging the Gap</h3>
                  <p className="text-sm text-gray-600">
                    We connect top talent with Solana projects, making the right hires happen fast and reliable.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={registerRef('solana-logo')}
              className={`md:w-1/3 flex justify-end ${scaleIn('solana-logo')}`}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/093/328/non_2x/solana-sol-glass-crypto-coin-3d-illustration-free-png.png"
                alt="Solana"
                className="w-60 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Left panel - Features */}
        <div
          ref={registerRef('features-panel')}
          className={`bg-white rounded-3xl p-6 flex flex-col ${fadeInUp('features-panel')}`}
        >
          <h3 className="font-bold text-xl mb-4">Community Centered</h3>
          <p className="text-sm text-gray-700 mb-6">
            Built by the community, for the community, we want to see members thrive in Solana.
          </p>

          <h3 className="font-bold text-xl mb-4">Build Beyond Boundaries</h3>
          <p className="text-sm text-gray-700">
            Web3 native or newbie, we help you break into Solana, connect and build the future.
          </p>

          <div className="mt-auto pt-6">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm">Level Up</button>
          </div>
        </div>

        {/* Right panel - Stats */}
        <div
          ref={registerRef('stats-panel')}
          className={`bg-gray-100 rounded-3xl p-6 relative overflow-hidden ${fadeInUp('stats-panel')}`}
        >
          <div className="absolute inset-0 bg-gray-700/15 backdrop-blur-sm z-10"></div>

          <div
            ref={registerRef('dashboard-image')}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${scaleIn('dashboard-image')}`}
          >
            <img
              src={dashboard}
              alt="App Dashboard"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>

          <div className="relative z-20">
            <div className="flex items-start mb-6">
              <div>
                <h3 className="text-xl font-medium">
                  Join the <span className="text-grey-400">Solana</span> revolution, help <span className="text-grey-100">shape the future</span> of finance.
                </h3>
              </div>
            </div>

            <div
              ref={registerRef('stats-counter')}
              className={`flex justify-between items-center ${fadeIn('stats-counter')}`}
            >
              <div>
                <div className="text-6xl font-bold">200+</div>
                <p className="text-sm text-gray-600">
                  Jobs placed in<br />
                  Solana ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="p-4">
        <div
          ref={registerRef('partners-section')}
          className={`bg-white rounded-3xl p-6 ${fadeInUp('partners-section')}`}
        >
          <h3 className="font-bold text-xl mb-6 text-center">Our Trusted Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div
              ref={registerRef('partner-1')}
              className={`p-4 flex items-center justify-center ${fadeIn('partner-1')}`}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2Tc4HwXSiook503-qB1yh8Oyjq378BAW3g&s" 
                alt="Solana Foundation" 
                className="max-h-12 w-auto object-contain"
              />
            </div>
            
            <div
              ref={registerRef('partner-2')}
              className={`p-4 flex items-center justify-center ${fadeIn('partner-2')}`}
            >
              <img 
                src={catoff} 
                alt="Catoff Gaming" 
                className="max-h-20 w-auto object-contain"
              />
            </div>
            
            <div
              ref={registerRef('partner-3')}
              className={`p-4 flex items-center justify-center ${fadeIn('partner-3')}`}
            >
              <img 
                src={armidah} 
                alt="Armidarh" 
                className="max-h-28 w-auto object-contain"
              />
            </div>
            
            <div
              ref={registerRef('partner-4')}
              className={`p-4 flex items-center justify-center ${fadeIn('partner-4')}`}
            >
              <img 
                src="https://i.imgur.com/WvR1aVO.png" 
                alt="Bread" 
                className="max-h-12 w-auto object-contain"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">Join our growing network of partners in the Solana ecosystem</p>
            <button className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm">Become a Partner</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={registerRef('footer')}
        className={`bg-white py-8 px-6 mt-4 ${fadeInUp('footer')}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  <div className="bg-white rounded-full w-6 h-6"></div>
                </div>
                <span className="ml-2 font-bold text-lg">LinkUp</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Optimizing aviation logistics and procurement through advanced AI solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-black">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2025 LinkUp. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-black">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-black">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-black">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkupLandingPage;