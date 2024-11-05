/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';
import { useTranslation } from 'react-i18next';

const HomeThreeNavBar = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   const { t, i18n } = useTranslation();
   return (
      <>
         <header>
            <div className={stickyMenu ? "sticky_menu top-bar-white top-bar-3 lg-pt-30 lg-pb-30 h3_topBar" :
               "top-bar-white top-bar-3 pt-30 pb-30 h3_topBar"}>
               <div className="container">
                  <div className={"row align-items-center"}>
                     <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                        <div className="logo logo-3 pos-rel">
                           <Link to="/"><img style={{ maxHeight: 80 }} src="../img/logo/logo.png" alt="" /></Link>
                        </div>
                     </div>
                     <div className='col-6 d-lg-none'>
                        <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                           <button className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8 col-md-8 d-none d-lg-block">
                        <div className="header-lang f-right pos-rel d-none d-lg-block">
                           <div className="lang-icon">
                              <img height={30} width={30}
                                 src={i18n.language === 'hy' ?
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/2880px-Flag_of_Armenia.svg.png"
                                    : i18n.language === 'ru' ? "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
                                 }
                                 alt="" />
                              <span>{i18n.language?.toLocaleUpperCase()}<i className="fas fa-angle-down"></i></span>
                           </div>
                           <ul className="header-lang-list">
                              <li><a onClick={() => {
                                 i18n.changeLanguage('hy');
                                 localStorage.setItem('lang', 'hy')
                              }}>ARM</a></li>
                              <li><a onClick={() => {
                                 i18n.changeLanguage('ru');
                                 localStorage.setItem('lang', 'ru')
                              }}>RUS</a></li>
                              <li><a onClick={() => {
                                 i18n.changeLanguage('en');
                                 localStorage.setItem('lang', 'en')

                              }}>ENG</a></li>
                           </ul>
                        </div>
                        <div className="header-cta-info header-cta-info-3 d-flex f-left">
                           <div className="header-cta-icon">
                              <img height={25} width={25} src="../img/cta/message-icon.svg" alt="" />
                           </div>
                           <div className="header-cta-text">
                              <h5 className="theme-color">{t('email_address_key')}</h5>
                              <span className="primary-color">policlinik17@mail.ru</span>
                           </div>
                        </div>
                        <div className="header-cta-info header-cta-info-3 d-flex f-left">
                           <div className="header-cta-icon">
                              <img height={25} width={25} src="../img/cta/phone-icon.svg" alt="" />
                           </div>
                           <div className="header-cta-text">
                              <h5 className="theme-color">{t('phone_number_key')}</h5>
                              <span className="primary-color">(010) 58-27-11</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={stickyMenu ? "sticky_menu header-menu-area header-menu-blue theme-bg sticky_navBar_bg" :
               "header-menu-area header-menu-blue theme-bg h3_navBar"}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-8 col-lg-8">
                        <div className="header__menu menu-dark">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">{t('home_key')}</Link></li>
                                 <li><Link to="/services">{t('department_key')}</Link></li>
                                 <li><Link to="/doctors">{t('doctors_key')}</Link></li>
                                 <li><Link to="/about">{t('about_key')}</Link></li>
                                 <li><Link to="/contact">{t('contact_key')}</Link></li>
                                 <li><Link to="/priceList">{t('Գնացուցակ')}</Link></li>
                              </ul>
                           </nav>
                        </div>

                     </div>
                     <div className="col-xl-4 col-lg-4">
                        <div className="header-right f-right">
                           <div className="header-social-icons f-right d-none d-lg-block p-0">
                              <ul>
                                 <li><a target='blank' href="https://www.facebook.com/people/%D4%B5%D6%80%D6%87%D5%A1%D5%B6%D5%AB-%D5%8F%D5%AB%D5%A3%D6%80%D5%A1%D5%B6-%D5%84%D5%A5%D5%AE-%D5%A1%D5%BC%D5%B8%D5%B2%D5%BB%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6-%D5%AF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6/61562277698276/?paipv=0&eav=AfZcWDink_AGMRJWZGk1JqjWufcrqLWHE2aEFJZt4de6Zfzz-SZPS-puhKQhaPvPKNs&_rdr"><i className="fab fa-facebook-f"></i></a></li>
                                 {/* <li className="header-menu-search">
                                    <a className="nav-search search-trigger" href="#"><i className="fas fa-search"></i></a>
                                 </li> */}
                              </ul>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeThreeNavBar;