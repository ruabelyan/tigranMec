import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import { useTranslation } from 'react-i18next';
import PriceListArea from './PriceListArea/PriceListArea';
import HomeThreeNavBar from '../HomeThree/HomeThreeNavBar/HomeThreeNavBar';


const PriceList = () => {
   const { t } = useTranslation();

   return (
      <>
         <HomeThreeNavBar />
         <CommonPageHeader title={t("price_list_key")} subtitle={t('price_list_key')} />
         <PriceListArea />
         <Footer />
      </>
   );
};

export default PriceList;