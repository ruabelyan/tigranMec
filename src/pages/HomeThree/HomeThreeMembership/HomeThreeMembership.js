import React from 'react';
import HomeThreeSingleMembership from '../../../components/HomeThreeSingleMembership/HomeThreeSingleMembership';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';

import HomeThreeSingleReviews from '../../../components/HomeThreeSingleReviews/HomeThreeSingleReviews';

const HomeThreeMembership = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         },
      ]

   };
   const { t } = useTranslation();

   return (
      <>
         <section className="membership-area membership-bg pt-120 pb-120 pos-rel"
            data-background="img/membership/membership-bg.jpg" style={{ backgroundSize: 'cover' }}>
            <div className="container">
               <div className="membership-box pt-115 pb-90 white-bg">
                  <div className="row">
                     <div className="col-xl-10 offset-xl-1">
                        <div className="section-title text-center pos-rel mb-70">
                           <div className="section-icon">
                              <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              {/* <h5>Exclusive Buyer</h5> */}
                              <h1>{t('reviews_key')}</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div className="row">


                     <HomeThreeSingleMembership icon="1" title="Hourly Home Care" />
                     <HomeThreeSingleMembership icon="2" title="Medicine Quick Delivery" />

                  </div> */}
               </div>
               <div className="membership-review member-ship-map gray-bg pos-rel">
                  <Slider className='testimonials-activation' {...settings}>
                     <HomeThreeSingleReviews image="2" name="Արմենուհի" membersText='Հիանալի անձնակազմ,բանիմաց և սրտացավ բժիշկներ:' />
                     <HomeThreeSingleReviews image="3" name="Ashot" membersText='Ես էլ եկա շնորհակալություն հայտնեմ սոնոգրաֆիստ Ինգա Սաֆարյանից, կխնդրեմ որ անպայման փոխանցեք, անչափ բարի, հոգատար, սիրալիր, անշահախնդիր, հիանալի մասնագետ ու պարզապես լավ Մարդ: ' />
                     <HomeThreeSingleReviews image="1" name="Гаянэ" membersText='От всей души благодарен всему персоналу больницы за их доброжелательное и профессионально отношение' />
                     <HomeThreeSingleReviews image="" name="Lilit" membersText='Shnorakalutyunem haytnum vor prkeciq tatikis kyanqn shnorakalem Ohanyan Armenin' />
                  </Slider>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeMembership;