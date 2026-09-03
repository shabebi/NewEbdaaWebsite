import './header.css'

import logo from '../assets/logo.png'
import homeIcon from '../assets/home-icon.png'
import servicesIcon from '../assets/services-icon.png'
import aboutIcon from '../assets/about-icon.png'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#home" aria-label="إبداع ميديا">
          <img src={logo} alt="إبداع ميديا" />
        </a>

        <nav className="header__nav" aria-label="التنقل الرئيسي">
          <a className="header__link header__link--active" href="#home">
            <img src={homeIcon} alt="" aria-hidden="true" />
            <span>الرئيسية</span>
          </a>

          <a className="header__link" href="#services">
            <img src={servicesIcon} alt="" aria-hidden="true" />
            <span>خدماتنا</span>
          </a>

          <a className="header__link" href="#about">
            <img src={aboutIcon} alt="" aria-hidden="true" />
            <span>من نحن</span>
          </a>
        </nav>

        <a className="header__contact" href="#contact">
          <span>تواصل معنا</span>
        </a>
      </div>
    </header>
  )
}

export default Header
