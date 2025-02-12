import React from "react";
import { Link } from "react-router-dom";
import ServicesTwoSingleItem from "../../../components/ServicesTwoSingleItem/ServicesTwoSingleItem";
import { useTranslation } from "react-i18next";

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
                  <img
                    className="section-back-icon back-icon-left"
                    src="img/section/section-back-icon.png"
                    alt=""
                  />
                </div>
                <div className="section-text pos-rel">
                  {/* <h5>Բաժանմունքեր</h5> */}
                  <h1>Բաժանմունքեր</h1>
                </div>
                <div className="section-line pos-rel">
                  <img src="img/shape/section-title-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div className="section-button text-end d-none d-lg-block pt-80">
                <Link to="/services" className="primary_btn btn-icon ml-0">
                  <span>+</span>Այլ ծառայություններ
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <ServicesTwoSingleItem
              icon="1"
              image="1"
              title={t("Թերապևտիկ բաժանմունք")}
              about="Այն բազմապրոֆիլ բաժանմունք է, որտեղ բուժվում են շնչական, սիրտ-անոթային, ստամոքս- աղիքային, միզուղիների, արյան համակարգի, ինչպես նաև՝ համակցված թերապևտիկ պաթոլոգիաներով պացիենտներ:"
            />
            <ServicesTwoSingleItem
              icon="2"
              image="2"
              title={t("Մանկական բաժանմունք")}
              about="Երեխաների առողջության մասին հոգ տանելը առաջնահերթություն է յուրաքանչյուր ծնողի համար։"
            />
            <ServicesTwoSingleItem
              icon="3"
              image="3"
              title={t("Գինեկոլոգիական բաժանմունք")}
              about="Գինեկոլոգիական բաժանմունքում իրականացվում է գինեկոլոգիական հիվանդությունների վիրահատական և կոնսերվատիվ բուժում:"
            />
            <ServicesTwoSingleItem
              icon="4"
              image="4"
              title={t("Լաբորատոր բաժանմունք")}
              about="Լաբորատոր բաժանմունքի ստորաբաժանումներում կատարվում են տարբեր ախտաբանական վիճակների ժամանակ սպիտակուցային, ածխաջրատային,"
            />
            <ServicesTwoSingleItem
              icon="5"
              image="5"
              title={t("Նեղ մասնագիտական բաժանմունք")}
              about=""
            />
            <ServicesTwoSingleItem
              icon="6"
              image="6"
              title={t("Ռենտգենոլոգիական բաժանմունք")}
              about=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeThreeServices;
