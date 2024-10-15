import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import { useTranslation } from 'react-i18next';

const DoctorOneTeamArea = () => {
    const { t } = useTranslation();
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
                                    <h5>{t('our_team_key')}</h5>
                                    <h1>{t('professional_care_provider_key')}</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="section-button text-end d-none d-lg-block pt-80">
                                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>{t('contact_key')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h3 className='mb-20'>Տիգրան Մեծ</h3>
                        <HomeSingleTeam image="1" title="Ալիդա Կարախանյան" subtitle='թերապևտ' />
                        <HomeSingleTeam image="2" title="Ալվարդ Գևորգյան" subtitle="թերապևտ" />
                        <HomeSingleTeam image="3" title="Անուշ Խանգուլյան" subtitle="Օնկոլոգ" />
                        <HomeSingleTeam image="4" title="Առաքելյան Էդգար" subtitle="Մաշկաբան" />
                        <HomeSingleTeam image="5" title="Ասոյան Արմինե" subtitle="Մանկաբույժ" />
                        <HomeSingleTeam image="6" title="Արմենուհի Դավիդովա" subtitle="Ընտանեկան բժիշկ" />
                        <HomeSingleTeam image="7" title="Բելլա Արզումանյան" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="8" title="Գայանե Գասպարյան" subtitle="" />
                        <HomeSingleTeam image="9" title="Գայանե Ղալամքարյան" subtitle="սրտաբան" />
                        <HomeSingleTeam image="10" title="Գյուրջյան Իսահակ" subtitle="մանկական վիրաբույժ" />
                        <HomeSingleTeam image="11" title="Գոհար Բաբայան" subtitle="Լաբորատորիայի բաժնի վարիչ" />
                        <HomeSingleTeam image="12" title="Գոհար Ռստակյան" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="13" title="Գոհար Սարգսյան" subtitle="Բժիշկ լաբորանտ" />
                        <HomeSingleTeam image="14" title="Դավթյան Գագիկ" subtitle=" Վիրաբույժ" />
                        <HomeSingleTeam image="15" title="Ելենա Խդրյան" subtitle="" />
                        <HomeSingleTeam image="16" title="Զաքարյան Գոհար" subtitle="Մանկաբույժ" />
                        <HomeSingleTeam image="17" title="Թեհմինե Գալստյան" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="18" title="Ժաննա Պապոյան" subtitle="Թերապևտիկ բաժնի վարիչ" />
                        <HomeSingleTeam image="19" title="Ինգա Սաֆարյան" subtitle="սոնոգրաֆիստ" />
                        <HomeSingleTeam image="20" title="Իռեն Առաքելովա" subtitle="նյարդաբան" />
                        <HomeSingleTeam image="21" title="Իրինա Գասպարյան" subtitle="թերապևտ" />
                        <HomeSingleTeam image="22" title="Կարինե Բադանյան" subtitle="սոնոգրաֆիստ" />
                        <HomeSingleTeam image="23" title="Կարինե Սրապիոնյան" subtitle="մանկական նյարդաբան" />
                        <HomeSingleTeam image="24" title="Հակոբյան Լիլիթ" subtitle="Մանկաբույժ" />
                        <HomeSingleTeam image="25" title="Հակոբյան Լիլիթ" subtitle="Մանկաբույժ" />
                        <HomeSingleTeam image="26" title="Մարգարիտ Գևորգյան " subtitle="բժիշկ լաբորանտ" />
                        <HomeSingleTeam image="27" title="Մարիամ Միքայելյան" subtitle="թերապևտ" />
                        <HomeSingleTeam image="28" title="Մարտիրոսյան Աննա" subtitle="" />
                        <HomeSingleTeam image="29" title="Մարտիրոսյան Գայանե" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="30" title="Միրզոյան Նարինե" subtitle="դիագնոստիկ" />
                        <HomeSingleTeam image="31" title="Միքայելյան Նաիրա" subtitle="Մանկաբույժ" />
                        <HomeSingleTeam image="32" title="Մկրտչյան Մերի" subtitle="" />
                        <HomeSingleTeam image="33" title="Մկրտչյան Մերի" subtitle="" />
                        <HomeSingleTeam image="34" title="Մոսինյան Արևիկ" subtitle="Իմունոլոգ" />
                        <HomeSingleTeam image="35" title="Մուշեղ Ստեփանյան (1)" subtitle="" />
                        <HomeSingleTeam image="36" title="Մուշեղ Ստեփանյան (1)" subtitle="" />
                        <HomeSingleTeam image="37" title="Մուշեղյան Անահիտ" subtitle="Ֆիզիոթերապիա" />
                        <HomeSingleTeam image="38" title="Պայծառ Ուրգանջյան" subtitle="ընտ. բժիշկ" />
                        <HomeSingleTeam image="39" title="Ջուլիետա Սարդարյան" subtitle="Բժիշկ մանրէաբան" />
                        <HomeSingleTeam image="40" title="Սեդա Հովհաննիսյան" subtitle="ՔԿԱ" />
                        <HomeSingleTeam image="41" title="Սնդոյան Անուշ" subtitle="" />
                        <HomeSingleTeam image="42" title="Սոնա Զաքարյան" subtitle="ՔԿԱ" />
                        <HomeSingleTeam image="43" title="Սուսաննա Գրիգորյան" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="44" title="Վարդուհի Ղազարյան" subtitle="" />
                        <HomeSingleTeam image="45" title="Տիտանյան Նունե" subtitle="Ընտ.բժիշկ" />
                        <HomeSingleTeam image="46" title="Օհանյան Արմեն" subtitle="ինֆեկցիոնիստ" />

                        <h3 className='mb-20'>Սարի Թաղ</h3>
                        <HomeSingleTeam image="47" title="Անահիտ Հարությունյան" subtitle="Ներզատաբան" />
                        <HomeSingleTeam image="48" title="Անդռեյ Դանիելյան" subtitle="վիրաբույժ" />
                        <HomeSingleTeam image="49" title="Արմինե Ամիրյան" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="50" title="Էմմա Սարգսյան" subtitle="Բժիշկ լաբորանտ" />
                        <HomeSingleTeam image="51" title="Լևոն Քոթանջյան" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="52" title="Մարի Հարությունյան" subtitle="Թերապևտ" />
                        <HomeSingleTeam image="53" title="Մկրտչյան Ռուզաննա" subtitle="Գինեկոլոգ" />
                        <HomeSingleTeam image="54" title="Սաթենիկ Փանդունց" subtitle="ակնաբույժ" />
                        <HomeSingleTeam image="55" title="Սահակյան Նունե" subtitle="Մանկաբույժ" />
                        <HomeSingleTeam image="56" title="Վերոնիկա Ջինանյան" subtitle="Մանկաբույժ" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorOneTeamArea;