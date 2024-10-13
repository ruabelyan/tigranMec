import React from 'react';
import SingleCount from '../../../../components/SingleCount/SingleCount';
import { useTranslation } from 'react-i18next';


const CounterArea = () => {
   const { t } = useTranslation();

   return (
      <>
         <section className="about-area pt-120 pb-80">
            <div className="container">
               <div className="row">

                  <SingleCount icon="7" counter="100" title={t("expert_doctors_key")} />
                  <SingleCount icon="83" counter="89" title={t("problem_solve_key")} />
                  <SingleCount icon="9" counter="20" title={t("award_winner_key")} />

               </div>
            </div>
         </section>
      </>
   );
};

export default CounterArea;