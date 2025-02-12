import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-image-lightbox/style.css";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          home_key: "Home",
          department_key: "Department",
          doctors_key: "Doctors",
          about_key: "About",
          contact_key: "Contact",
          appointment_key: "Appointment",
          hero_care: "We are here for your care.",
          hero_best_care: "Best Care & Better Doctor.",
          hero_description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          therapeutic_key: "Therapeutic",
          pediatric_key: "Pediatric",
          womens_consultation_key: "Women’s Consultation",
          physiotherapy_key: "Physiotherapy",
          daytime_hospital_key: "Daytime Hospital",
          medical_physical_education_key: "Medical Physical Education",
          palliative_service_key: "Palliative Service",
          doctores_key: "Doctors",
          doctor_key: "Doctor",
          care_key: "We are here for your care.",
          professional_care_provider_key: "A Professional & Care Provider",
          always_ready_challenge_key: "We Always Ready For A Challenge.",
          available_24_7_key: "We are available 24/7",
          our_team_key: "Our Team",
          expert_doctors_key: "Expert Doctors",
          problem_solve_key: "Problem Solve",
          award_winner_key: "Award Winner",
          short_story_clinic_key: "Short Story About MediDove Clinic.",
          manage_healthcare_key: "Managed Your Healthcare Services",
          satisfied_patients_key: "Satisfied Patients",
          world_awards_key: "World Awards",
          read_more_key: "Ավելին",
          phone_key: "Phone",
          phone_number_key: "Phone number",
          specialized_departments_key:
            "Specialized Departments of the Organization",
          cabinet_kka_key: "KKA Cabinet",
          ophthalmology_cabinet_key: "Ophthalmology Cabinet",
          endocrinology_cabinet_key: "Endocrinology Cabinet",
          dermatology_cabinet_key: "Dermatology Cabinet",
          neurology_cabinet_key: "Neurology Cabinet",
          infectious_disease_cabinet_key: "Infectious Disease Cabinet",
          diagnostic_services_key: "Diagnostic Services",
          xray_cabinet_key: "X-ray Cabinet",
          fluorography_cabinet_key: "Fluorography Cabinet",
          ecg_cabinet_key: "ECG Cabinet",
          ultrasound_cabinet_key: "Ultrasound Examination Cabinet",
          echocardiography_key: "Echocardiography",
          electroneuromyography_key: "Electroneuromyography",
          autorefractor_key: "Autorefractor",
          laboratories_key: "Laboratories",
          clinical_laboratory_key: "General Clinical",
          biochemical_laboratory_key: "Biochemical",
          serological_laboratory_key: "Serological",
          paid_services_key: "Paid Services",
          physiotherapy_cabinet_key: "Physiotherapy Cabinet",
          massage_cabinet_key: "Massage Cabinet",
          intravenous_laser_therapy_key: "Intravenous Laser Therapy",
          eye_treatment_apparatus_key: "Apparatus Treatment for Eyes",
          gastroenterology_cabinet_key: "Gastroenterology Cabinet",
          urology_cabinet_key: "Urology Cabinet",
          dentistry_cabinet_key: "Dentistry Cabinet",
          health_care_facility_key: "Health Care Facility",
          make_appointment_key: "Make Appointment",
          founder_key: "Founder",
          dentist_key: "Dentist",
          neurologist_key: "Neurologist",
          consultant_key: "Consultant",
          director_key: "Director",
          bagratunyants_clinic_key: "Bagratunyants Clinic",
          satenik_badalyan_key: "Satenik Badalyan",
          shahamiryanneri_street_key: "Shahamiryanneri St., Building 32",
          allergic_issue_key: "Allergic Issue",
          neurology_surgery_key: "Neurology Surgery",
          blood_cancer_key: "Blood Cancer",
          stay_at_home_key:
            "Would you rather stay at home than go into a health care facility?",
          x_ray_cabinet_key: "X-Ray Cabinet",
          ultrasound_exam_cabinet_key: "Ultrasound Examination Cabinet",
          electromyography_key: "Electromyography",
          eye_device_treatment_key: "Eye Device Treatment",
          apply_today_key: "Apply Today",
          contact_us_key: "Contact Us",
          for_employers_key: "For Employers",
          // "tm_clinic_info_key": "The Bagratunyants Clinic provides high-quality, modern medical assistance.",
          about_us_key: "About Us",
          our_mission_key: "Our Mission",
          our_vision_key: "Our Vision",
          worldwide_branches_key: "Worldwide Branches",
          hospital_formed_key: "Hospital Formed",
          local_partners_key: "Local Partners",
          testimonials_key: "Testimonials",
          our_clients_say_about_us_key: "Our Clients Say About Us",
          mail_here_key: "Mail Here",
          visit_here_key: "Visit Here",
          call_here_key: "Call Here",
          anything_on_your_mind_key: "Anything On Your Mind",
          estimate_your_idea_key: "Estimate Your Idea",
          your_name_key: "Your Name",
          your_email_key: "Your Email",
          your_phone_key: "Your Phone",
          your_subject_key: "Your Subject",
          your_message_key: "Your Message",
          get_action_key: "Get Action",
          email_address_key: "Email Address",
          years_of_experience_key: "50+ Years Of Experience",
          medidove_help_readers_key: "MediDove helps increase your readers",
          women_consultation_key: "Women’s Consultation",
          day_hospital_key: "Day Hospital",
          medical_physical_culture_key: "Medical Physical Culture",
          reviews_key: "Reviews about us",
          tm_health_center: "Tigran the Great Health Center",
          tm_free_medical_care:
            "Tigran the Great Medical Center provides state-guaranteed free outpatient medical care and services in accordance with the decision No. 318-N of the Government of Armenia.",
        },
      },
      hy: {
        translation: {
          price_list_key: "Գնացուցակ",
          services_description_key: "Ծառայությունների բնութագիրը",
          home_key: "Գլխավոր",
          department_key: "Ծառայություններ",
          all_department_key: "Ծառայություններ",
          doctors_key: "Բժիշկներ",
          about_key: "Մեր մասին",
          contact_key: "Կապ մեզ հետ",
          appointment_key: "Բժիշկ նշանակել",
          hero_care:
            "Մենք այստեղ ենք, որպեսզի ապահովենք ձեր առողջության անվտանգությունը",
          // "hero_description": "Տիգրան Մեծ» ԱԿ կողմից բնակչությանը տրամադրվում է պետության կողմից երաշխավորված անվճար արտահիվանդանոցային բժշկական օգնություն և սպասարկում համաձայն ՀՀ կառավարության 318-Ն որոշման:",
          therapeutic_key: "Թերապևտիկ",
          pediatric_key: "Մանկաբուժական",
          womens_consultation_key: "Կանանց խորհրդատվություն",
          physiotherapy_key: "Ֆիզիոթերապևտիկ",
          daytime_hospital_key: "Ցերեկային ստացիոնար",
          medical_physical_education_key: "Բուժական ֆիզկուլտուրա",
          palliative_service_key: "Պալիատիվ ծառայություն",
          doctores_key: "Բժիշկներ",
          doctor_key: "Բժիշկ",
          care_key:
            "Մենք այստեղ ենք, որպեսզի ապահովենք ձեր առողջության անվտանգությունը",
          professional_care_provider_key: "Պրոֆեսիոնալ անձնակազմ",
          always_ready_challenge_key: "Մենք միշտ պատրաստ ենք մարտահրավերին։",
          available_24_7_key: "Մենք բաց ենք 24/7",
          our_team_key: "Մեր թիմը",
          expert_doctors_key: "Փորձառու բժիշկներ",
          problem_solve_key: "Գոհ բուժառուներ",
          award_winner_key: "Սերտիֆիկատներ",
          short_story_clinic_key:
            "Կարճ պատմություն Տիգրան Մեծ ԱԿ-ի կլինիկայի մասին։",
          manage_healthcare_key:
            "Ձեր առողջապահական ծառայությունների կառավարում",
          satisfied_patients_key: "Գոհ հիվանդներ",
          world_awards_key: "Համաշխարհային պարգևներ",
          read_more_key: "Կարդալ ավելին",
          phone_number_key: "Հեռախոսահամար",
          specialized_departments_key:
            "Կազմակերպության նեղ մասնագիտական ստորաբաժանումներ",
          cabinet_kka_key: "ՔԿԱ կաբինետ",
          ophthalmology_cabinet_key: "Ակնաբուժական կաբինետ",
          endocrinology_cabinet_key: "Ներզատաբանական կաբինետ",
          dermatology_cabinet_key: "Մաշկաբանական կաբինետ",
          neurology_cabinet_key: "Նյարդաբանական կաբինետ",
          infectious_disease_cabinet_key: "Ինֆեկցիոն կաբինետ",
          diagnostic_services_key: "Ախտորոշիչ ծառայություններ",
          xray_cabinet_key: "Ռենտգեն կաբինետ",
          fluorography_cabinet_key: "Ֆլուորոգրաֆիայի կաբինետ",
          ecg_cabinet_key: "ԷՍԳ կաբինետ",
          ultrasound_cabinet_key: "Ուլտրաձայնային հետազոտության կաբինետ",
          echocardiography_key: "Էխոսրտագրություն",
          electroneuromyography_key: "Էլեկտրոնեյրոմիագրաֆիա",
          autorefractor_key: "Ավտոռեֆ",
          laboratories_key: "Լաբորատորիաներ",
          clinical_laboratory_key: "Ընդհանուր կլինիկական",
          biochemical_laboratory_key: "Կենսաքիմիական",
          serological_laboratory_key: "Սերոլոգիական",
          paid_services_key: "Վճարովի ծառայություններ",
          physiotherapy_cabinet_key: "Ֆիզիոթերապևտիկ կաբինետ",
          massage_cabinet_key: "Մերսման կաբինետ",
          intravenous_laser_therapy_key: "Ներերակային լազերոթերապիա",
          eye_treatment_apparatus_key: "Աչքերի ապարատային բուժում",
          gastroenterology_cabinet_key: "Գաստրոէնթերոլոգիական կաբինետ",
          urology_cabinet_key: "Ուռոլոգիական կաբինետ",
          dentistry_cabinet_key: "Ատամնաբուժական կաբինետ",
          health_care_facility_key: "Բուժհաստատություն",
          make_appointment_key: "Պայմանավորվել հանդիպում",
          founder_key: "Հիմնադիր",
          dentist_key: "Ատամնաբույժ",
          neurologist_key: "Նյարդաբան",
          consultant_key: "Խորհրդատու",
          director_key: "Տնօրեն",
          bagratunyants_clinic_key: "Տիգրան Մեծ ԱԿ",
          satenik_badalyan_key: "Սաթենիկ Բադալյան",
          shahamiryanneri_street_key: "Տիգրան Մեծի 36ա",
          allergic_issue_key: "Ալերգիկ խնդիր",
          neurology_surgery_key: "Նյարդաբանական վիրաբուժություն",
          blood_cancer_key: "Արյան քաղցկեղ",
          stay_at_home_key:
            "Արդյո՞ք նախընտրում եք մնալ տանը, քան գնալ բժշկական հաստատություն:",
          x_ray_cabinet_key: "Ռենտգեն կաբինետ",
          ultrasound_exam_cabinet_key: "Ուլտրաձայնային հետազոտության կաբինետ",
          electromyography_key: "Էլեկտրոնեյրոմիագրաֆիա",
          eye_device_treatment_key: "Աչքերի ապարատային բուժում",
          apply_today_key: "Դիմեք այսօր",
          contact_us_key: "Հետադարձ կապ հաստատել մեզ հետ",
          for_employers_key: "lorem ipsum",
          tm_clinic_info_key:
            "Տիգրան Մեծ ԱԿ ցուցաբերվում է բարձրակարգ, ժամանակակից բժշկական օգնություն:",
          about_us_key: "Մեր մասին",
          our_mission_key: "Մեր առաքելությունը",
          our_vision_key: "Մեր տեսլականը",
          worldwide_branches_key: "Համաշխարհային մասնաճյուղեր",
          hospital_formed_key: "test",
          local_partners_key: "Տեղական գործընկերներ",
          testimonials_key: "Մեկնաբանություններ",
          our_clients_say_about_us_key: "Մեր հաճախորդները ասում են մեր մասին",
          mail_here_key: "Էլ․ հասցե",
          visit_here_key: "Մեր հասցեն",
          call_here_key: "Հեռախոսահամար",
          anything_on_your_mind_key: "Ունե՞ք առաջարկ",
          estimate_your_idea_key: "Արժեքավորեք ձեր գաղափարը",
          your_name_key: "Անուն",
          your_email_key: "էլ. հասցե",
          your_phone_key: "հեռախոսահամար",
          your_subject_key: "Թեմա",
          your_message_key: "Հաղորդագրություն",
          get_action_key: "ՈՒղարկել",
          email_address_key: "Էլեկտրոնային հասցե",
          years_of_experience_key: "50+ տարվա փորձ",
          medidove_help_readers_key:
            "MediDove-ը օգնում է ավելացնել ձեր ընթերցողների թիվը",
          women_consultation_key: "Կանանց կոնսուլտացիա",
          day_hospital_key: "Ցերեկային ստացիոնար",
          medical_physical_culture_key: "Բուժական ֆիզկուլտուրա",
          reviews_key: "Կարծիքներ մեր մասին",
          tm_health_center: "«Տիգրան Մեծ» առողջության կենտրոն",
          tm_free_medical_care:
            "«Տիգրան Մեծ» ԱԿ կողմից բնակչությանը տրամադրվում է պետության կողմից երաշխավորված անվճար արտահիվանդանոցային բժշկական օգնություն և սպասարկում համաձայն ՀՀ կառավարության 318-Ն որոշման:",
        },
      },
      ru: {
        translation: {
          home_key: "Главная",
          department_key: "Отдел",
          doctors_key: "Врачи",
          about_key: "О нас",
          contact_key: "Контакт",
          appointment_key: "Запись на прием",
          hero_care: "Мы здесь для вашего ухода.",
          hero_best_care: "Лучшая забота и лучший доктор.",
          hero_description:
            "Лорем ипсум долор сит амет, консектетур адиписцинг элит, сед до эйузмод темпор инцидидунт ут лаборе эт долоре магна аликуа.",
          therapeutic_key: "Терапевтический",
          pediatric_key: "Педиатрический",
          womens_consultation_key: "Консультация для женщин",
          physiotherapy_key: "Физиотерапия",
          daytime_hospital_key: "Дневная больница",
          medical_physical_education_key: "Медицинская физическая культура",
          palliative_service_key: "Паллиативная служба",
          doctores_key: "",
          doctor_key: "",
          care_key: "Мы здесь для вашего ухода.",
          professional_care_provider_key:
            "Профессиональный и заботливый поставщик",
          always_ready_challenge_key: "Мы всегда готовы к вызову.",
          available_24_7_key: "Мы доступны 24/7",
          our_team_key: "Наша команда",
          expert_doctors_key: "Экспертные врачи",
          problem_solve_key: "Решение проблем",
          award_winner_key: "Лауреат премии",
          short_story_clinic_key: "Краткая история клиники MediDove.",
          manage_healthcare_key: "Управление вашими медицинскими услугами",
          satisfied_patients_key: "Довольные пациенты",
          world_awards_key: "Мировые награды",
          read_more_key: "Подробнее",
          phone_number_key: "Номер телефона",
          specialized_departments_key:
            "Узкоспециализированные отделения организации",
          cabinet_kka_key: "Кабинет ККА",
          ophthalmology_cabinet_key: "Офтальмологический кабинет",
          endocrinology_cabinet_key: "Эндокринологический кабинет",
          dermatology_cabinet_key: "Дерматологический кабинет",
          neurology_cabinet_key: "Неврологический кабинет",
          infectious_disease_cabinet_key: "Инфекционный кабинет",
          diagnostic_services_key: "Диагностические услуги",
          xray_cabinet_key: "Кабинет рентгена",
          fluorography_cabinet_key: "Кабинет флюорографии",
          ecg_cabinet_key: "Кабинет ЭКГ",
          ultrasound_cabinet_key: "Кабинет ультразвукового исследования",
          echocardiography_key: "Эхокардиография",
          electroneuromyography_key: "Электронейромиография",
          autorefractor_key: "Авторефрактометр",
          laboratories_key: "Лаборатории",
          clinical_laboratory_key: "Общеклинический",
          biochemical_laboratory_key: "Биохимический",
          serological_laboratory_key: "Серологический",
          paid_services_key: "Платные услуги",
          physiotherapy_cabinet_key: "Физиотерапевтический кабинет",
          massage_cabinet_key: "Кабинет массажа",
          intravenous_laser_therapy_key: "Внутривенная лазеротерапия",
          eye_treatment_apparatus_key: "Аппаратное лечение глаз",
          gastroenterology_cabinet_key: "Гастроэнтерологический кабинет",
          urology_cabinet_key: "Урологический кабинет",
          dentistry_cabinet_key: "Стоматологический кабинет",
          health_care_facility_key: "Медицинское учреждение",
          make_appointment_key: "Записаться на прием",
          founder_key: "Основатель",
          dentist_key: "Стоматолог",
          neurologist_key: "Невролог",
          consultant_key: "Консультант",
          director_key: "Директор",
          bagratunyants_clinic_key: "Клиника Багратунянц",
          satenik_badalyan_key: "key",
          shahamiryanneri_street_key: "Улица Шахамирян, дом 32",
          allergic_issue_key: "Аллергическая проблема",
          neurology_surgery_key: "Неврологическая хирургия",
          blood_cancer_key: "Рак крови",
          stay_at_home_key:
            "Вы бы предпочли остаться дома, чем пойти в медицинское учреждение?",
          x_ray_cabinet_key: "Рентгеновский кабинет",
          ultrasound_exam_cabinet_key: "Кабинет ультразвукового исследования",
          electromyography_key: "Электромиография",
          eye_device_treatment_key: "Аппаратное лечение глаз",
          apply_today_key: "Подать заявку сегодня",
          contact_us_key: "Свяжитесь с нами",
          for_employers_key: "Для работодателей",
          // "tm_clinic_info_key": "В клинике Багратунянц предоставляется высококачественная, современная медицинская помощь.",
          about_us_key: "О нас",
          our_mission_key: "Наша миссия",
          our_vision_key: "Наша видение",
          worldwide_branches_key: "Мировые филиалы",
          hospital_formed_key: "Больница основана",
          local_partners_key: "Местные партнеры",
          testimonials_key: "Отзывы",
          our_clients_say_about_us_key: "Наши клиенты говорят о нас",
          mail_here_key: "Написать сюда",
          visit_here_key: "Посетить здесь",
          call_here_key: "Позвонить сюда",
          anything_on_your_mind_key: "Что-то на вашем уме",
          estimate_your_idea_key: "Оцените вашу идею",
          your_name_key: "Ваше имя",
          your_email_key: "Ваш Email",
          your_phone_key: "Ваш телефон",
          your_subject_key: "Ваш предмет",
          your_message_key: "Ваше сообщение",
          get_action_key: "Получить действие",
          email_address_key: "Адрес электронной почты",
          years_of_experience_key: "Более 50 лет опыта",
          medidove_help_readers_key:
            "MediDove помогает увеличить вашу аудиторию",
          women_consultation_key: "Консультация для женщин",
          day_hospital_key: "Дневной стационар",
          medical_physical_culture_key: "Лечебная физкультура",
          reviews_key: "Отзывы о нас",
          tm_health_center: "Центр здоровья «Тигран Великий»",
          tm_free_medical_care:
            "Центр здоровья «Тигран Великий» предоставляет населению гарантированную государством бесплатную амбулаторную медицинскую помощь и обслуживание в соответствии с решением № 318-Н правительства РА.",
        },
      },
    },
    lng: localStorage.getItem("lng") || "hy", // if you're using a language detector, do not define the lng option
    fallbackLng: "hy",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
