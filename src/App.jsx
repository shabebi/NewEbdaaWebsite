import { useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import WhoAreWe from './components/WhoAreWe'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

import MotionGraphics from './components/MotionGraphics'
import AdvertisingVideos from './components/AdvertisingVideos'
import AdvertisingCampaigns from './components/AdvertisingCampaigns'

// Add these imports if you created these components:
import EbdaaContentServicePage from './components/EbdaaContentServicePage'
import EbdaaCampaignsServicePage from './components/EbdaaCampaignsServicePage'
import EbdaaIdentityServicePage from './components/EbdaaIdentityServicePage'
import EbdaaDigitalAdsServicePage from './components/EbdaaDigitalAdsServicePage'
import EbdaaSocialMediaServicePage from './components/EbdaaSocialMediaServicePage'
import EbdaaVideoServicePage from './components/EbdaaVideoServicePage'

const serviceRoutes = {
  '/motion-graphics': MotionGraphics,
  '/advertising-videos': AdvertisingVideos,
  '/advertising-campaigns': AdvertisingCampaigns,

  '/services/content': EbdaaContentServicePage,
  '/services/campaigns': EbdaaCampaignsServicePage,
  '/services/identity': EbdaaIdentityServicePage,
  '/services/digital-ads': EbdaaDigitalAdsServicePage,
  '/services/social-media': EbdaaSocialMediaServicePage,
  '/services/video': EbdaaVideoServicePage,
}

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.getElementById(
          decodeURIComponent(hash.slice(1))
        )

        target?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    })
  }, [])

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

function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '')
  const pathname = window.location.pathname

  const pathWithoutBase =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length)
      : pathname

  const path = pathWithoutBase.replace(/\/+$/, '') || '/'
  const ServiceComponent = serviceRoutes[path]

  if (ServiceComponent) {
    return (
      <>
        <Header />
        <main>
          <ServiceComponent />
        </main>
        <Footer />
      </>
    )
  }

  return <HomePage />
}

export default App