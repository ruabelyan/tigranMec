import { Link } from "react-router-dom";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";
import useGlobalContext from "../../../hooks/useGlobalContext";
import { useTranslation } from "react-i18next";

const HomeThreeHeroSection = () => {
  const { setIsOpen } = useGlobalContext();

  const { t } = useTranslation();
  return (
    <>
      <VideoPopup videoId="oU_GUAWz52w" />

      <section className="hero-area">
        <div className="hero-slider">
          <div className="slider-fix">
            <div
              className="single-slider home_three slider-height slider-height-3 d-flex align-items-center"
              style={{ backgroundSize: "cover" }}
            >
              <div className="container text-end">
                <div className="row text-end">
                  <div className="col-xl-12 col-lg-12 text-end">
                    <div
                      className="hero-text hero-text-box"
                      style={{ background: "transparent" }}
                    >
                      <div className="hero-slider-caption ">
                        <h2>Մեր առաքելությունը</h2>
                        <p>Ձեր առողջությունը մեր հաջողությունն է</p>
                      </div>
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

export default HomeThreeHeroSection;
