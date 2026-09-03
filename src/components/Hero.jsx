import { useEffect, useState } from 'react'
import './hero.css'

import hero1 from '../assets/hero-1.png'
import hero2 from '../assets/hero-2.png'
import hero3 from '../assets/hero-3.png'
import hero4 from '../assets/hero-4.png'

const heroImages = [hero1, hero2, hero3, hero4]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__slides" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`hero__slide ${index === activeSlide ? 'hero__slide--active' : ''
              }`}
          />
        ))}
      </div>

      <div className="hero__content container">
        <div className="hero__copy">
          <h1>إبداع ميديا للدعاية والاعلان</h1>

          <div className="hero__tagline">
            <span>“ نحاكي الأبداع ...</span>
            <span>ونصنع التأثير ”</span>
          </div>

          <p>
            تعد الدعاية والاعلان من أهم الأدوات التي تساهم في نجاح الشركات
            والمؤسسات التجارية، يُعَدّ الترويج للمنتجات والخدمات وبناء الوعي
            بالعلامة التجارية جزءًا لا يتجزأ من عملية النمو والازدهار.
          </p>

          <div className="hero__actions">
            <a className="hero__button hero__button--outline" href="#contact">
              تواصل معنا
            </a>

            <a className="hero__button hero__button--primary" href="#why-us">
              اعمالنا
            </a>
          </div>
        </div>
      </div>

      <svg
        className="hero__wave"
        viewBox="0 0 1279.5 117.04"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g transform="translate(0 -150)">
          <path
            d="M1278.5 251.299C1266 242.299 1179.99 209.799 1017.5 209.799C859 209.799 533.259 266.813 291 266.799C68.5 278.299 7.5 206.299 -1 206.299V171.299C11.5 166.799 81.4576 207.071 270 195.799C574 177.623 861.5 143.484 1005.5 152.484C1163.19 162.34 1272.5 182.299 1278.5 199.299V251.299Z"
            fill="#F0B152"
          />
        </g>
      </svg>
    </section>
  )
}

export default Hero
