import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Features from './component/Features'
import Stats from './component/Stats'
import Reviews from './component/Reviews'
import Newsletter from './component/Newsletter'
import TrustedPartners from './components/TrustedPartners'
import Footer from './component/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Reviews />
        <Newsletter />
        <TrustedPartners />
      </main>
      <Footer />
    </div>
  )
}

export default App
