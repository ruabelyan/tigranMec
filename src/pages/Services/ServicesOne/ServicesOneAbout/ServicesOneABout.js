import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';
import { useTranslation } from 'react-i18next';

const ServicesOneABout = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row ">
                  {/* <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text section-text-small pos-rel">
                           <h5>{t("health_care_facility_key")}</h5>
                           <h1>{t("stay_at_home_key")}</h1>
                        </div>
                     </div>
                  </div> */}
                  {/* <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="facalty-text mb-50">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                           aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                           qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                           omnis iste natus error sit voluptatem accusantium.</p>
                     </div>
                  </div> */}
               </div>
               <div className="row">
                  <h3>Ծառայություններ</h3>
                  <HomeSIngleService title={t('therapeutic_key')} />
                  <HomeSIngleService title={t('pediatric_key')} />
                  <HomeSIngleService title="Կանանց կոնսուլտացիա" />
                  <HomeSIngleService title="Ֆիզիոթերապևտիկ" />
                  <HomeSIngleService title="Ցերեկային ստացիոնար" />
                  <HomeSIngleService title="Բուժական ֆիզկուլտուրա" />
                  <HomeSIngleService title="Պալիատիվ  ծառայություն" />
                  <HomeSIngleService title="ՔԿԱ" />
                  <HomeSIngleService title="Ակնաբուժական" />
                  <HomeSIngleService title="Ներզատաբանական" />
                  <HomeSIngleService title="Վիրաբուժական" />
                  <HomeSIngleService title="Սրտաբանակամ" />
                  <HomeSIngleService title="Ծնողավարման սենյակ" />
                  <HomeSIngleService title="Ուռուցքաբանական" />
                  <HomeSIngleService title="Նյարդաբանական" />
                  <HomeSIngleService title="Մաշկավեներաբանական" />
                  <HomeSIngleService title="Ինֆեկցիոն" />
                  <HomeSIngleService title="Հոգեբանական" />
                  <HomeSIngleService title="Ուրոլոգիական" />
                  <HomeSIngleService title="Ֆթիզիատրիկ" />
                  <HomeSIngleService title="Գաստրոէնտերոլոգիական" />
                  <HomeSIngleService title="Իմունոկանխարգելման" />
                  <h3>Ախտորոշիչ ծառայություններ</h3>
                  <HomeSIngleService title="Ռենտգենոգրաֆիա" />
                  <HomeSIngleService title="Ռենտգենոսկոպիա" />
                  <HomeSIngleService title="Ֆլյուորոգրաֆիա" />
                  <HomeSIngleService title="Ստամոքսաղիքային տրակտի կոնտրաստ R-սկոպիա" />
                  <HomeSIngleService title="ԷՍԳ" />
                  <HomeSIngleService title="Էխոկարդիոգրաֆիա" />
                  <HomeSIngleService title="Ուլտրաձայնային հետազոտություն" />
                  <HomeSIngleService title="Գաստրոդուոդենոսկոպիա" />
                  <HomeSIngleService title="Դուպլեքս" />
                  <HomeSIngleService title="Դոպլեր" />
                  <HomeSIngleService title="Սպիրոմետրիա" />
                  <HomeSIngleService title="Ավտոռեֆկերատոմետրիա" />
                  <HomeSIngleService title="Պերիմետրիա" />
                  <HomeSIngleService title="Աչքի ոչ կոնտակտային  տոնոմետրիա" />
                  <HomeSIngleService title="Կոլպոսկոպիա" />
                  <HomeSIngleService title="Աուդիոմետրիա" />
                  <HomeSIngleService title="Իմպենդանսոմետրիա" />
                  <HomeSIngleService title="Ֆիբրոսկոպիա" />
                  <HomeSIngleService title="Հարքթային խոռոչների ուլտրաձայնային հետազոտություն" />
                  <h3>Լաբորատորիաներ</h3>
                  <HomeSIngleService title="Կլինիկական" />
                  <HomeSIngleService title="Կենսաքիմիական" />
                  <HomeSIngleService title="Սերոլոգիական" />
                  <HomeSIngleService title="Իմունուլոգիական" />
                  <HomeSIngleService title="Մանրէաբանական" />

                  {/* <HomeSIngleService icon="4" title={t("blood_cancer_key")} border_className="service-box-border" /> */}
                  {/* <HomeSIngleService icon="5" title={t("neurology_surgery_key")} border_className="service-box-border" /> */}
                  {/* <HomeSIngleService icon="6" title={t("allergic_issue_key")} border_className="service-box-border" /> */}
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesOneABout;