import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhoAreWe from './components/WhoAreWe'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <WhoAreWe />
        <Services />
        <WhyUs />
      </main>

      <Footer />
    </>
  )
}

export default App