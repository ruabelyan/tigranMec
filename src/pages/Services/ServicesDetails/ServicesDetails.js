import { useParams } from 'react-router-dom';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import { useTranslation } from 'react-i18next';
import HomeThreeNavBar from '../../HomeThree/HomeThreeNavBar/HomeThreeNavBar';

const ServicesDetails = ({ title }) => {

    const route = useParams();
    const { t } = useTranslation();
    console.log('route', route)

    return (
        <>
            <HomeThreeNavBar logo={"../img/logo/logo.png"} />
            <CommonPageHeader title={title || ''} subtitle="Details" />
            <ServicesDetailsArea id={route?.id} />
            <Footer />
        </>
    );
};

export default ServicesDetails;