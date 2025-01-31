import { useTranslation } from 'react-i18next';

const CommonSectionArea = ({ area_header }) => {
   const { t } = useTranslation();

   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5">
                     {area_header}
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>{t("about_us_key")}</h5>
                           <h1>{t("short_story_clinic_key")}</h1>
                        </div>
                        <div className="about-text mb-50">
                           <p>
                              Երևանի «Տիգրան Մեծ» ԱԿ ՓԲԸ հիմնադրվել է 1959 թվականին և հանդիսանում է
                              «Թիվ 17 պոլիկլինիկա» ՓԲԸ-ի իրավահաջորդը։ 2022 թվականին վերանվանված
                              «Տիգրան Մեծ» ԱԿ-ի մեծ թիմին միացավ «Սարի Թաղ պոլիկլինիկա» ՓԲԸ-ն՝ որպես ստորաբաժանում,
                              որը գործում է Էրեբունի վարչական շրջանում, Սարի Թաղ 10-րդ փողոց, 11 շենք հասցեում։
                              Ունենալով երկար տարիների փորձ՝ մենք քայլում ենք ժամանակին համընթաց։
                           </p>                        </div>
                        <div className="our-destination">
                           <div className="single-item mb-30">
                              <div className="mv-icon f-left">
                                 <img src="img/about/destination-icon-1.png" alt="" />
                              </div>
                              <div className="mv-title fix">
                                 <h3>{t("our_mission_key")}</h3>
                                 <p>ՁԵՐ ԱՌՈՂՋՈՒԹՅՈՒՆԸ ՄԵՐ  ՀԱՋՈՂՈՒԹՅՈՒՆՆ Է</p>
                              </div>
                           </div>
                           <div className="single-item">
                              <div className="mv-icon f-left">
                                 <img src="img/about/destination-icon-2.png" alt="" />
                              </div>
                              <div className="mv-title fix">
                                 <h3>{t("our_vision_key")}</h3>
                                 <p>Երևան քաղաքի բնակչությանը որակյալ,արդյունավետ բժշկական օգնություն ցուցաբերելն է</p>
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

export default CommonSectionArea;