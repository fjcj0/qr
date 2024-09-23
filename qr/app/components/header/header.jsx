"use client";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import './header.css';
import i18n from 'i18next';

export default function Header() {
  const { t, i18n } = useTranslation(); // Destructure i18n from useTranslation
  const [toggleState, setToggleState] = useState(false);

  const toggleMenu = () => {
    let open = document.querySelector('.select-login button');
    let links = document.querySelector('nav ul');
    if (!toggleState) {
      links.style.display = 'flex';
      open.style.display = 'none';
      setToggleState(true);
    } else {
      links.style.display = 'none';
      open.style.display = 'inline';
      setToggleState(false);
    }
  };
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    var x = document.querySelectorAll('section');
    if (selectedLanguage === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.style.textAlign = 'right';
      x.forEach((section) => {
        section.style.direction = 'rtl';
        section.style.textAlign = 'right';
      });
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.style.textAlign = 'left';
      x.forEach((section) => {
        section.style.direction = 'ltr';
        section.style.textAlign = 'left';
      });
    }
  };
  return (
    <header className="header" id="header">
      <div className="logo" id="logo">
        <img src="/next.svg" alt="salfnas"/>
      </div>
      <nav className="header-links" id="header-links">
        <ul>
          <li><button><img src="/delete.png" alt="" onClick={toggleMenu} /></button></li>
          <li><a href="/#main">{t('HeaderComponent.HomeLink')}</a></li>
          <li><a href="/#about">{t('HeaderComponent.AboutLink')}</a></li>
          <li><a href="/#information">{t('HeaderComponent.InformationLink')}</a></li>
          <li><a href="/#footer">{t('HeaderComponent.ContactLink')}</a></li>
          <select name="" id="" onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </ul>
      </nav>
      <div className="select-login" id="select-login">
        <select name="" id="" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
        <a href="/PROFILE"><img src="/user.png" alt="" /></a>
        <button><img src="/list.png" alt="" onClick={toggleMenu}/></button>
      </div>
    </header>
  );
}
