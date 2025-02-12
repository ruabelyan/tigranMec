import React, { useState, useEffect } from "react";
import HomeSIngleService from "../../../../components/HomeSIngleService/HomeSIngleService";
import { useTranslation } from "react-i18next";

const ServicesOneABout = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);

  // Array of all services
  const allServices = [
    t("therapeutic_key"),
    t("pediatric_key"),
    "Կանանց կոնսուլտացիա",
    "Ֆիզիոթերապևտիկ",
    "Ցերեկային ստացիոնար",
    "Բուժական ֆիզկուլտուրա",
    "Պալիատիվ ծառայություն",
    "ՔԿԱ",
    "Ակնաբուժական",
    "Ներզատաբանական",
    "Վիրաբուժական",
    "Սրտաբանկամ",
    "Ծնողավարման սենյակ",
    "Ուռուցքաբանական",
    "Նյարդաբանական",
    "Մաշկավեներաբանական",
    "Ինֆեկցիոն",
    "Հոգեբանական",
    "Ուրոլոգիական",
    "Ֆթիզիատրիկ",
    "Գաստրոէնտերոլոգիական",
    "Իմունոկանխարգելման",
    "Ռենտգենոգրաֆիա",
    "Ռենտգենոսկոպիա",
    "Ֆլյուորոգրաֆիա",
    "Ստամոքսաղիքային տրակտի կոնտրաստ R-սկոպիա",
    "ԷՍԳ",
    "Էխոկարդիոգրաֆիա",
    "Ուլտրաձայնային հետազոտություն",
    "Գաստրոդուոդենոսկոպիա",
    "Դուպլեքս",
    "Դոպլեր",
    "Սպիրոմետրիա",
    "Ավտոռեֆկերատոմետրիա",
    "Պերիմետրիա",
    "Աչքի ոչ կոնտակտային տոնոմետրիա",
    "Կոլպոսկոպիա",
    "Աուդիոմետրիա",
    "Իմպենդանսոմետրիա",
    "Ֆիբրոսկոպիա",
    "Հարքթային խոռոչների ուլտրաձայնային հետազոտություն",
    "Կլինիկական",
    "Կենսաքիմիական",
    "Սերոլոգիական",
    "Իմունուլոգիական",
    "Մանրէաբանական",
  ];

  useEffect(() => {
    setLoading(true);
    const filtered = allServices.filter((service) =>
      service.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
    setLoading(false);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                <div className="section-icon">
                  <img
                    className="section-back-icon back-icon-right"
                    src="img/section/section-back-icon.png"
                    alt=""
                  />
                </div>
                <div className="section-text section-text-small pos-rel">
                  <h5>{t("health_care_facility_key")}</h5>
                  <h1>{t("stay_at_home_key")}</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              {/* <div className="facalty-text mb-50">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                           aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                           qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                           omnis iste natus error sit voluptatem accusantium.</p>
                     </div> */}
            </div>
          </div>
          <div className="col-12">
            <div className="team-search mb-30">
              <form action="#">
                <div className="row mb-4">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder={t("Որոնում․․․")}
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Loader Animation */}
                {loading && (
                  <div
                    className="loader"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {/* You can replace this with a spinner or animation */}
                    <div className="spinner-border" role="status"></div>
                  </div>
                )}
              </form>
            </div>
          </div>
          <h3 className="pb-3">{t("Ծառայություններ")}</h3>
          <div className="row">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <HomeSIngleService key={index} title={service} />
              ))
            ) : (
              <p>{t("Որոնման արդյունքում տվյալներ չեն հայտնաբերվել")}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOneABout;
