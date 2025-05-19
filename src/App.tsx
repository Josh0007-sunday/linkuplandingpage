import { useState } from 'react'
import { FaRobot, FaMagic, FaChartLine, FaUser, FaFileAlt, FaHandshake, FaCoins, FaStar, FaNetworkWired } from 'react-icons/fa'
import Amidarh from './assets/img/amidarh.png'
import CatOff from './assets/img/catoff.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white font-['Outfit']">
      <div className="animated-background" />
      <div className="grid-background" />
      <div className="theme-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed w-full nav-blur z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-['Share_Tech']">
                LinkUp
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Discover</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Features</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Careers</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">About</a>
                <a href="http://linkup-ruddy.vercel.app/" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Login
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Discover</a>
              <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Careers</a>
              <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="http://linkup-ruddy.vercel.app/" className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-base font-medium">
                Login
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="hero-grid" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-['Share_Tech']">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Smart Careers & Ethical Products
              </span>
              <span className="block mt-2">for the Future</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl">
              Connect with AI-powered job opportunities and discover values-driven products that align with your principles.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300">
                Find a Job
              </button>
              <button className="w-full sm:w-auto px-8 py-3 border border-purple-500 text-base font-medium rounded-md text-white bg-transparent hover:bg-purple-900/30 transition-all duration-300">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Numbers */}
      <div className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-['Share_Tech']">Our Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: '25+', label: 'Community Members' },
              { number: '0+', label: 'Successful Connections' },
              { number: '2+', label: 'Partner Companies' },
              { number: '0+', label: 'Events Hosted' }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Highlights */}
      <div className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-['Share_Tech']">Powerful Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'AI Job Matcher',
                description: 'Smart algorithms that understand your skills and preferences to find your perfect match.',
                icon: <FaRobot className="w-8 h-8 text-white" />,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Smart Product Showcase',
                description: 'Discover products that align with your values and make a positive impact.',
                icon: <FaMagic className="w-8 h-8 text-white" />,
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Ethical Score Ratings',
                description: 'Transparent scoring system to help you make informed decisions.',
                icon: <FaChartLine className="w-8 h-8 text-white" />,
                gradient: 'from-green-500 to-blue-500'
              }
            ].map((feature) => (
              <div key={feature.title} className="group relative p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 overflow-hidden card-glow">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient})` }}></div>
                <div className="relative">
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="py-20 bg-black/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-['Share_Tech']">Your Journey With LinkUp</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <FaUser className="w-6 h-6 text-white" />,
                title: 'Sign Up', 
                description: 'Begin Your Journey',
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                icon: <FaFileAlt className="w-6 h-6 text-white" />,
                title: 'Complete Profile', 
                description: 'Share Your Story',
                gradient: 'from-blue-500 to-purple-500'
              },
              { 
                icon: <FaHandshake className="w-6 h-6 text-white" />,
                title: 'Get Recommended', 
                description: 'AI-Powered Matches',
                gradient: 'from-green-500 to-blue-500'
              },
              { 
                icon: <FaCoins className="w-6 h-6 text-white" />,
                title: 'Earn USDC', 
                description: 'Network Rewards',
                gradient: 'from-yellow-500 to-orange-500'
              },
              { 
                icon: <FaStar className="w-6 h-6 text-white" />,
                title: 'Engage & Connect', 
                description: 'Build Relationships',
                gradient: 'from-pink-500 to-purple-500'
              },
              { 
                icon: <FaNetworkWired className="w-6 h-6 text-white" />,
                title: 'Grow Network', 
                description: 'Expand Opportunities',
                gradient: 'from-cyan-500 to-blue-500'
              }
            ].map((step, index) => (
              <div 
                key={step.title} 
                className="group relative p-6 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 overflow-hidden card-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, ${step.gradient})` }}></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-2xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.icon}
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Partners */}
      <div className="py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-['Share_Tech']">Trusted Partners</h2>
          </div>
          <div className="partners-container">
            <div className="partners-track">
              {/* First set of logos */}
              <img 
                src={Amidarh} 
                alt="Amidarh" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src={CatOff} 
                alt="CatOff" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="https://pbs.twimg.com/profile_images/1920429742311747586/MfyGIzAS_400x400.jpg" 
                alt="Partner" 
                className="partner-logo h-12 md:h-16 w-12 md:w-16 object-cover rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/659d95d25ce669bc52b2d552_logo-sui-w.svg" 
                alt="Sui" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="https://solana.com/src/img/branding/solanaLogo.svg" 
                alt="Solana" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              {/* Duplicate set for seamless loop */}
              <img 
                src={Amidarh} 
                alt="Amidarh" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src={CatOff}  
                alt="CatOff" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="https://pbs.twimg.com/profile_images/1920429742311747586/MfyGIzAS_400x400.jpg" 
                alt="Partner" 
                className="partner-logo h-12 md:h-16 w-12 md:w-16 object-cover rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/659d95d25ce669bc52b2d552_logo-sui-w.svg" 
                alt="Sui" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="https://solana.com/src/img/branding/solanaLogo.svg" 
                alt="Solana" 
                className="partner-logo h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Join Our Community</h3>
              <p className="text-gray-400 text-sm sm:text-base">Connect with founders, creators, professionals, and build valuable relationships.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Expand Your Network</h3>
              <p className="text-gray-400 text-sm sm:text-base">Access exclusive events, workshops, and networking opportunities.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Partner With Us</h3>
              <p className="text-gray-400 text-sm sm:text-base">We value growth-inspired collaborations and welcome partnerships.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 font-['Share_Tech']">Changing the Game in Africa</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Building the future of decentralized networking across the continent
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              We're revolutionizing how African professionals connect, collaborate, and grow. By combining AI-powered job matching with ethical product promotion, we're creating a sustainable ecosystem where talent meets opportunity, and innovation drives progress.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black/80 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-['Share_Tech']">
                LinkUp
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2024 LinkUp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
