import { useTranslation } from 'react-i18next';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';
import HomeThreeNavBar from '../../HomeThree/HomeThreeNavBar/HomeThreeNavBar';

const ServicesOne = () => {
   const { t } = useTranslation('');
   return (
      <>
         <HomeThreeNavBar />
         <CommonPageHeader title={t('department_key')} subtitle={t('department_key')} />
         <ServicesOneABout />
         {/* <ServicesOneHiringArea /> */}
         <Footer />
      </>
   );
};

export default ServicesOne;