import React from 'react';
import Footer from '../../components/Shared/Footer';
import HomeThreeAboutArea from './HomeThreeAboutArea/HomeThreeAboutArea';
import HomeThreeHeroSection from './HomeThreeHeroSection/HomeThreeHeroSection';
import HomeThreeMembership from './HomeThreeMembership/HomeThreeMembership';
import HomeThreeNavBar from './HomeThreeNavBar/HomeThreeNavBar';
import HomeThreeServices from './HomeThreeServices/HomeThreeServices';
import HomeThreeTeams from './HomeThreeTeams/HomeThreeTeams';

const HomeThree = () => {
    return (
        <>
            <HomeThreeNavBar />
            <HomeThreeHeroSection />
            <HomeThreeAboutArea />
            <HomeThreeServices/>
            <HomeThreeTeams/>
            <HomeThreeMembership/>
            {/* <HomeThreeFaq/> */}
            <Footer/>
        </>
    );
};

export default HomeThree;