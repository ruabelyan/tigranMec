import React from 'react';
import { Link } from 'react-router-dom';
import ServicesTwoSingleItem from '../../../components/ServicesTwoSingleItem/ServicesTwoSingleItem';
import { useTranslation } from 'react-i18next';

const HomeThreeServices = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-35">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-12">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Բաժանմունքեր</h5>
                           <h1>Ծառայություններ</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="section-button text-end d-none d-lg-block pt-80">
                        <Link to="/services" className="primary_btn btn-icon ml-0"><span>+</span>Այլ ծառայություններ</Link>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <ServicesTwoSingleItem image="1" title={t('therapeutic_key')} about='Այն բազմապրոֆիլ բաժանմունք է, որտեղ բուժվում են շնչական, սիրտ-անոթային, ստամոքս- աղիքային, միզուղիների, արյան համակարգի, ինչպես նաև՝ համակցված թերապևտիկ պաթոլոգիաներով պացիենտներ:' />
                  <ServicesTwoSingleItem image="2" title={t("pediatric_key")} about='Երեխաների առողջության մասին հոգ տանելը առաջնահերթություն է յուրաքանչյուր ծնողի համար։' />
                  <ServicesTwoSingleItem image="3" title={t("women_consultation_key")} about='Առողջության մասին հոգալն ու պահպանելը կնոջ համար առաջնահերթություն է։ Այնուամենայնիվ, երբեմն կարող են առաջանալ գինեկոլագիական խնդիրներ, որոնք պահանջում են մասնագիտացված բժշկական օգնություն։' />
                  {/* <ServicesTwoSingleItem image="4" title={t("physiotherapy_key")} />
                  <ServicesTwoSingleItem image="5" title={t("day_hospital_key")} />
                  <ServicesTwoSingleItem image="6" title={t("medical_physical_culture_key")} />
                  <ServicesTwoSingleItem image="7" title={t("palliative_service_key")} /> */}
               </div>

            </div>
         </section>
      </>
   );
};

export default HomeThreeServices;