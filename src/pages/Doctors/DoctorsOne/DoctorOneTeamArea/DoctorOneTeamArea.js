import HomeSingleTeam from "../../../../components/HomeSingleTeam/HomeSingleTeam";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const doctors = [
  // Department 1: Therapeutic
  { image: "18", title: "Ժաննա Պապոյան", subtitle: "Թերապևտիկ բաժնի վարիչ" },
  { image: "1", title: "Ալիդա Կարախանյան", subtitle: "Թերապևտ" },
  { image: "2", title: "Ալվարդ Գևորգյան", subtitle: "Թերապևտ" },
  { image: "7", title: "Բելլա Արզումանյան", subtitle: "Թերապևտ" },
  { image: "12", title: "Գոհար Ռստակյան", subtitle: "Թերապևտ" },
  { image: "17", title: "Թեհմինե Գալստյան", subtitle: "Թերապևտ" },
  // { image: "21", title: "Իրինա Գասպարյան", subtitle: "Թերապևտ" },
  { image: "27", title: "Մարիամ Միքայելյան", subtitle: "Թերապևտ" },
  { image: "29", title: "Մարտիրոսյան Գայանե", subtitle: "Թերապևտ" },
  { image: "43", title: "Սուսաննա Գրիգորյան", subtitle: "Թերապևտ" },

  // Department 2: Pediatric and Family Medicine
  { image: "5", title: "Ասոյան Արմինե", subtitle: "Մանկաբույժ" },
  { image: "6", title: "Արմենուհի Դավիդովա", subtitle: "Ընտանեկան բժիշկ" },
  { image: "16", title: "Զաքարյան Գոհար", subtitle: "Մանկաբույժ" },
  { image: "24", title: "Աստինե Զաքարյան", subtitle: "Մանկաբույժ" },
  { image: "31", title: "Միքայելյան Նաիրա", subtitle: "Մանկաբույժ" },
  {
    image: "34",
    title: "Մոսինյան Արևիկ",
    subtitle: "Իմունականխարգելման կաբինետի բժիշկ",
  },
  { image: "38", title: "Պայծառ Ուրգանջյան", subtitle: "Ընտանեկան բժիշկ" },
  { image: "45", title: "Տիտանյան Նունե", subtitle: "Ընտանեկան բժիշկ" },

  // Department 3: Gynecology
  { image: "15", title: "Ելենա Խդրյան", subtitle: "Գինեկոլոգ" },
  { image: "33", title: "Ղուկասյան Լուսինե", subtitle: "Գինեկոլոգ" },
  { image: "28", title: "Մարտիրոսյան Աննա", subtitle: "Գինեկոլոգ" },
  { image: "32", title: "Մկրտչյան Մերի", subtitle: "Գինեկոլոգ" },
  // { image: "41", title: "Սնդոյան Անուշ", subtitle: "Գինեկոլոգ" },

  // Department 4: Laboratory
  {
    image: "11",
    title: "Գոհար Բաբայան",
    subtitle: "Լաբորատորիայի բաժնի վարիչ",
  },
  { image: "13", title: "Գոհար Սարգսյան", subtitle: "Բժիշկ լաբորանտ" },
  { image: "26", title: "Մարգարիտ Գևորգյան", subtitle: "Բժիշկ լաբորանտ" },
  { image: "39", title: "Ջուլիետա Սարդարյան", subtitle: "Բժիշկ մանրէաբան" },

  // Department 5: Various Specialists
  { image: "3", title: "Անուշ Խանգուլյան", subtitle: "Օնկոլոգ" },
  { image: "4", title: "Առաքելյան Էդգար", subtitle: "Մաշկաբան" },
  { image: "9", title: "Գայանե Ղալամքարյան", subtitle: "Սրտաբան" },
  { image: "10", title: "Գյուրջյան Իսահակ", subtitle: "Մանկական վիրաբույժ" },
  { image: "14", title: "Դավթյան Գագիկ", subtitle: "Վիրաբույժ" },
  { image: "19", title: "Ինգա Սաֆարյան", subtitle: "Սոնոգրաֆիստ" },
  { image: "20", title: "Իռեն Առաքելովա", subtitle: "Նյարդաբան" },
  { image: "22", title: "Կարինե Բադանյան", subtitle: "Սոնոգրաֆիստ" },
  { image: "23", title: "Կարինե Սրապիոնյան", subtitle: "Մանկական նյարդաբան" },
  { image: "30", title: "Միրզոյան Նարինե", subtitle: "Դիագնոստիկ" },
  { image: "37", title: "Մուշեղյան Անահիտ", subtitle: "Ֆիզիոթերապիա" },
  { image: "40", title: "Սեդա Հովհաննիսյան", subtitle: "ՔԿԱ" },
  { image: "42", title: "Սոնա Զաքարյան", subtitle: "ՔԿԱ" },
  // Department 6: Radiology
  { image: "36", title: "Հասմիկ Կարապետյան", subtitle: "Ռենտգենոլոգ" },
  { image: "35", title: "Մուշեղ Ստեփանյան", subtitle: "Ռենտգենոլոգ" },
];
const sariDoctors = [
  { image: "47", title: "Անահիտ Հարությունյան", subtitle: "Ներզատաբան" },
  { image: "48", title: "Անդրեյ Դանիելյան", subtitle: "վիրաբույժ" },
  { image: "49", title: "Արմինե Ամիրյան", subtitle: "Թերապևտ" },
  { image: "50", title: "Էմմա Սարգսյան", subtitle: "Բժիշկ լաբորանտ" },
  { image: "51", title: "Լևոն Քոթանջյան", subtitle: "Թերապևտ" },
  { image: "52", title: "Մարի Հարությունյան", subtitle: "Թերապևտ" },
  { image: "53", title: "Մկրտչյան Ռուզաննա", subtitle: "Գինեկոլոգ" },
  { image: "54", title: "Սաթենիկ Փանդունց", subtitle: "ակնաբույժ" },
  { image: "55", title: "Սահակյան Նունե", subtitle: "Մանկաբույժ" },
  { image: "56", title: "Վերոնիկա Ջինանյան", subtitle: "Մանկաբույժ" },
];

const DoctorOneTeamArea = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Filter doctors based on the search query

  // Handle search change
  const handleSearchChange = (e) => {
    setLoading(true); // Start loading
    setSearchQuery(e.target.value);

    // Simulate a delay to show the loading animation
    setTimeout(() => {
      setLoading(false); // Stop loading after 300ms
    }, 300);
  };

  // Split doctors into departments based on their indices

  return (
    <>
      <section className="team-area pt-115 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section-title pos-rel mb-75">
                <div className="section-icon">
                  <img
                    className="section-back-icon back-icon-left"
                    src="img/section/section-back-icon.png"
                    alt=""
                  />
                </div>
                <div className="section-text pos-rel">
                  <h1>{t("our_team_key")}</h1>
                  {/* <h1>{t('professional_care_provider_key')}</h1> */}
                </div>
                <div className="section-line pos-rel">
                  <img src="img/shape/section-title-line.png" alt="" />
                </div>
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-5">
                            <div className="section-button text-end d-none d-lg-block pt-80">
                                <Link to="/doctors" className="btn btn-blue">
                                    {t('view_all_key')}
                                </Link>
                            </div>
                        </div> */}
          </div>
          <div className="row">
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
          </div>
          {/* Render Tigran the Great Department only if it has doctors */}
          {doctors.length > 0 && (
            <div className="row">
              <div className="col-12">
                <div className="team-title">
                  <h2 className="pb-3">{t("Տիգրան Մեծ ԱԿ")}</h2>
                </div>
              </div>
              {doctors.map((doctor, index) => (
                <HomeSingleTeam
                  key={index}
                  image={doctor.image}
                  title={doctor.title}
                  subtitle={doctor.subtitle}
                />
              ))}
            </div>
          )}
          {/* Render Sari Tagh Department only if it has doctors */}
          {sariDoctors.length > 0 && (
            <div className="row">
              <div className="col-12">
                <div className="team-title">
                  <h2 className="pb-3">{t("Սարի Թաղ ստորաբաժանում")}</h2>
                </div>
              </div>
              {sariDoctors.map((doctor, index) => (
                <HomeSingleTeam
                  key={index + 43} // Offset index for sariDoctors
                  image={doctor.image}
                  title={doctor.title}
                  subtitle={doctor.subtitle}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DoctorOneTeamArea;
