import React from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';
import { useTranslation } from 'react-i18next';

const HomeThreeHeroSection = () => {
   const { setIsOpen } = useGlobalContext();

   const { t } = useTranslation();
   return (
      <>

         <VideoPopup videoId="oU_GUAWz52w" />

         <section className="hero-area">
            <div className="hero-slider">
               <div className="slider-fix">
                  <div className="single-slider home_three slider-height slider-height-3 d-flex align-items-center"
                     data-background="img/slider/slider-bg-3.jpg" style={{ backgroundSize: 'cover' }}>
                     <div className="container">
                        <div className="row">
                           <div className="col-xl-7 col-lg-9">
                              <div className="hero-text hero-text-box">
                                 <div className="hero-slider-caption ">
                                    <h2>{t("tm_health_center")}</h2>
                                    <p>{t('tm_free_medical_care')}</p>

                                 </div>
                                 <div className="hero-slider-btn">
                                    <Link to="/contact"
                                       className="primary_btn btn-icon ml-0"><span>+</span>{t('contact_key')}</Link>
                                    {/* <button onClick={() => setIsOpen(true)}
                                        className="play-btn popup-video"><i className="fas fa-play"></i></button> */}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeHeroSection;