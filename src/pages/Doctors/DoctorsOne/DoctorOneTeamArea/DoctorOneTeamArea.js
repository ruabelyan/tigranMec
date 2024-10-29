import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const doctors = [
    // Tigran the Great Department
    { image: "1", title: "Ալիդա Կարախանյան", subtitle: "թերապևտ" },
    { image: "2", title: "Ալվարդ Գևորգյան", subtitle: "թերապևտ" },
    { image: "3", title: "Անուշ Խանգուլյան", subtitle: "Օնկոլոգ" },
    { image: "4", title: "Առաքելյան Էդգար", subtitle: "Մաշկաբան" },
    { image: "5", title: "Ասոյան Արմինե", subtitle: "Մանկաբույժ" },
    { image: "6", title: "Արմենուհի Դավիդովա", subtitle: "Ընտանեկան բժիշկ" },
    { image: "7", title: "Բելլա Արզումանյան", subtitle: "Թերապևտ" },
    { image: "8", title: "Գայանե Գասպարյան", subtitle: "" },
    { image: "9", title: "Գայանե Ղալամքարյան", subtitle: "սրտաբան" },
    { image: "10", title: "Գյուրջյան Իսահակ", subtitle: "մանկական վիրաբույժ" },
    { image: "11", title: "Գոհար Բաբայան", subtitle: "Լաբորատորիայի բաժնի վարիչ" },
    { image: "12", title: "Գոհար Ռստակյան", subtitle: "Թերապևտ" },
    { image: "13", title: "Գոհար Սարգսյան", subtitle: "Բժիշկ լաբորանտ" },
    { image: "14", title: "Դավթյան Գագիկ", subtitle: "Վիրաբույժ" },
    { image: "15", title: "Ելենա Խդրյան", subtitle: "" },
    { image: "16", title: "Զաքարյան Գոհար", subtitle: "Մանկաբույժ" },
    { image: "17", title: "Թեհմինե Գալստյան", subtitle: "Թերապևտ" },
    { image: "18", title: "Ժաննա Պապոյան", subtitle: "Թերապևտիկ բաժնի վարիչ" },
    { image: "19", title: "Ինգա Սաֆարյան", subtitle: "սոնոգրաֆիստ" },
    { image: "20", title: "Իռեն Առաքելուա", subtitle: "նյարդաբան" },
    { image: "21", title: "Իրինա Գասպարյան", subtitle: "թերապևտ" },
    { image: "22", title: "Կարինե Բադանյան", subtitle: "սոնոգրաֆիստ" },
    { image: "23", title: "Կարինե Սրապիոնյան", subtitle: "մանկական նյարդաբան" },
    { image: "24", title: "Հակոբյան Լիլիթ", subtitle: "Մանկաբույժ" },
    { image: "25", title: "Մարգարիտ Գևորգյան", subtitle: "բժիշկ լաբորանտ" },
    { image: "26", title: "Մարիամ Միքայելյան", subtitle: "թերապևտ" },
    { image: "27", title: "Մարտիրոսյան Աննա", subtitle: "" },
    { image: "28", title: "Մարտիրոսյան Գայանե", subtitle: "Թերապևտ" },
    { image: "29", title: "Միրզոյան Նարինե", subtitle: "դիագնոստիկ" },
    { image: "31", title: "Միքայելյան Նաիրա", subtitle: "Մանկաբույժ" },
    { image: "31", title: "Մկրտչյան Մերի", subtitle: "" },
    { image: "32", title: "Մոսինյան Արևիկ", subtitle: "Իմունոլոգ" },
    { image: "33", title: "Մուշեղ Ստեփանյան", subtitle: "" },
    { image: "34", title: "Մուշեղյան Անահիտ", subtitle: "Ֆիզիոթերապիա" },
    { image: "35", title: "Պայծառ Ուրգանջյան", subtitle: "ընտ. բժիշկ" },
    { image: "36", title: "Ջուլիետա Սարդարյան", subtitle: "Բժիշկ մանրէաբան" },
    { image: "37", title: "Սեդա Հովհաննիսյան", subtitle: "ՔԿԱ" },
    { image: "38", title: "Սնդոյան Անուշ", subtitle: "" },
    { image: "39", title: "Սոնա Զաքարյան", subtitle: "ՔԿԱ" },
    { image: "40", title: "Սուսաննա Գրիգորյան", subtitle: "Թերապևտ" },
    { image: "41", title: "Վարդուհի Ղազարյան", subtitle: "" },
    { image: "42", title: "Տիտանյան Նունե", subtitle: "Ընտ. բժիշկ" },
    { image: "43", title: "Օհանյան Արմեն", subtitle: "ինֆեկցիոնիստ" },

    // Sari Tagh Department
    { image: "44", title: "Անահիտ Հարությունյան", subtitle: "Ներզատաբան" },
    { image: "45", title: "Անդռեյ Դանիելյան", subtitle: "վիրաբույժ" },
    { image: "46", title: "Արմինե Ամիրյան", subtitle: "Թերապևտ" },
    { image: "47", title: "Էմմա Սարգսյան", subtitle: "Բժիշկ լաբորանտ" },
    { image: "48", title: "Լևոն Քոթանջյան", subtitle: "Թերապևտ" },
    { image: "49", title: "Մարի Հարությունյան", subtitle: "Թերապևտ" },
    { image: "50", title: "Մկրտչյան Ռուզաննա", subtitle: "Գինեկոլոգ" },
    { image: "51", title: "Սաթենիկ Փանդունց", subtitle: "ակնաբույժ" },
    { image: "52", title: "Սահակյան Նունե", subtitle: "Մանկաբույժ" },
    { image: "53", title: "Վերոնիկա Ջինանյան", subtitle: "Մանկաբույժ" },
];

const DoctorOneTeamArea = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);

    // Filter doctors based on the search query
    const filteredDoctors = doctors.filter(doctor =>
        doctor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doctor.subtitle && doctor.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
    );

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
    const tigranDoctors = filteredDoctors.slice(0, 43);
    const sariDoctors = filteredDoctors.slice(43);

    return (
        <>
            <section className="team-area pt-115 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section-title pos-rel mb-75">
                                <div className="section-icon">
                                    <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                                </div>
                                <div className="section-text pos-rel">
                                    <h1>{t('our_team_key')}</h1>
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
                                                placeholder={t('Որոնում․․․')}
                                                value={searchQuery}
                                                onChange={handleSearchChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    {/* Loader Animation */}
                                    {loading && (
                                        <div className="loader" style={{ display: 'flex', justifyContent: 'center' }}>
                                            {/* You can replace this with a spinner or animation */}
                                            <div className="spinner-border" role="status">
                                            </div>
                                        </div>
                                    )}


                                </form>
                            </div>
                        </div>
                    </div>
                    {filteredDoctors.length > 0 && (
                        <>
                            {/* Render Tigran the Great Department only if it has doctors */}
                            {tigranDoctors.length > 0 && (
                                <div className="row">
                                    <div className="col-12">
                                        <div className="team-title">
                                            <h2 className='pb-3'>{t('Տիգրան Մեծ ԱԿ')}</h2>
                                        </div>
                                    </div>
                                    {tigranDoctors.map((doctor, index) => (
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
                                            <h2 className='pb-3'>{t('Սարի Թաղ ստորաբաժանում')}</h2>
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
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default DoctorOneTeamArea;
