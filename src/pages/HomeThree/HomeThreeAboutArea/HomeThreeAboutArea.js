import SingleCount from '../../../components/SingleCount/SingleCount';
import { useTranslation } from 'react-i18next';

const HomeThreeAboutArea = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="about-area pt-115 pb-80">
            <div className="container">
               <div className="row align-items-center separator pb-110">
                  <div className="col-xl-6 col-lg-6">
                     <div className="medical-icon-brand pos-rel f-left">
                        <img src="img/about/medi-brand.png" alt="" />
                     </div>
                     <div className="about-title mb-20 fix">
                        <h1 className="mb-40">{t('years_of_experience_key')}</h1>
                        {/* <h5 className="blue-color m-0">lorem ipsum</h5> */}
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="about-right-content">
                        <p>{t('tm_free_medical_care')}</p>
                     </div>
                  </div>
               </div>
               <div className="row pt-120">


                  <SingleCount icon="7" counter="56" title={t("expert_doctors_key")} />
                  <SingleCount icon="83" counter="500" title={t("problem_solve_key")} />
                  <SingleCount icon="9" counter="20" title={t("award_winner_key")} />


               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeAboutArea;