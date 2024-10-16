import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, title, border_class }) => {
   const { t } = useTranslation();
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={border_class ? `service-box ${border_class} text-center mb-30` : 'service-box text-center mb-30 d-flex align-items-center'}>
               <div style={{ marginBottom: '0' }} className="service-thumb">
                  <img style={{ minWidth: '25px', height: '25px', marginRight: '5px' }} src={`img/services/arrow.png`} alt="" />
               </div>
               <div className="service-content">
                  <h4 style={{ marginBottom: '0' }}><Link to="/servicesDetails">{title}</Link></h4>
                  {/* <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p> */}
                  {/* <Link className="service-link" to="/servicesDetails">{t('read_more_key')}</Link> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;