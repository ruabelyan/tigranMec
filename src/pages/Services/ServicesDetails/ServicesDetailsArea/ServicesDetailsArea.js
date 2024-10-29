import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';

const ServicesDetailsArea = (id) => {

   console.log('id', id)


   const renderTitle = () => {
      switch (id.id) {
         case '1':
            return <div className="row">
               <h2>Թերապևտիկ բաժանմունք</h2>
            </div>
         case '2':
            return <div className="row">
               <h2>Մանկական բաժանմունք</h2>
            </div>
         case '3':
            return <div className="row">
               <h2>Գինեկոլոգիական բաժանմունք</h2>
            </div>
         case '4':
            return <div className="row">
               <h2>Լաբորատոր բաժանմունք</h2>
            </div>
         case '5':
            return <div className="row">
               <h2>Նեղ մասնագիտական բաժանմունք</h2>
            </div>
         case '6':
            return <div className="row">
               <h2>Ռենտգենոլոգիական բաժանմունք</h2>
            </div>
         default:
            return <div>Value not between 1 and 4</div>;
      }
   };
   const renderContent = () => {
      switch (id.id) {
         case '1':
            return <div className="row">
               <HomeSingleTeam image='18' title="Ժաննա Պապոյան" subtitle='Թերապևտիկ բաժնի վարիչ' />
               <HomeSingleTeam subtitle='Թերապևտ' image='1' title="Ալիդա Կարախանյան" />
               <HomeSingleTeam subtitle='Թերապևտ' image='2' title="Ալվարդ Գևորգյան" />
               <HomeSingleTeam subtitle='Թերապևտ' image='7' title="Բելլա Արզումանյան" />
               <HomeSingleTeam subtitle='Թերապևտ' image='12' title="Գոհար Ռստակյան" />
               <HomeSingleTeam subtitle='Թերապևտ' image='17' title="Թեհմինե Գալստյան" />
               <HomeSingleTeam subtitle='Թերապևտ' image='21' title="Իրինա Գասպարյան" />
               <HomeSingleTeam subtitle='Թերապևտ' image='27' title="Մարիամ Միքայելյան" />
               <HomeSingleTeam subtitle='Թերապևտ' image='29' title="Մարտիրոսյան Գայանե" />
               <HomeSingleTeam subtitle='Թերապևտ' image='43' title="Սուսաննա Գրիգորյան" />
            </div>
         case '2':
            return <div className="row">
               <HomeSingleTeam image='5' title="Ասոյան Արմինե" subtitle='Մանկաբույժ' />
               <HomeSingleTeam image='6' title="Արմենուհի Դավիդովա" subtitle='Ընտանեկան բժիշկ' />
               <HomeSingleTeam image='16' title="Զաքարյան Գոհար" subtitle='Մանկաբույժ' />
               <HomeSingleTeam image='24' title="Հակոբյան Լիլիթ" subtitle='Մանկաբույժ' />
               <HomeSingleTeam image='24' title="Հակոբյան Լիլիթ ????" subtitle='Մանկաբույժ' />
               <HomeSingleTeam image='31' title="Միքայելյան Նաիրա" subtitle='Մանկաբույժ' />
               <HomeSingleTeam image='34' title="Մոսինյան Արևիկ" subtitle='իմունականխարգելման կաբինետի բժիշկ' />
               <HomeSingleTeam image='38' title="Պայծառ Ուրգանջյան" subtitle='Ընտանեկան բժիշկ' />
               <HomeSingleTeam image='45' title="Տիտանյան Նունե" subtitle='Ընտանեկան բժիշկ' />
            </div>;
         case '3':
            return <div className="row">
               <HomeSingleTeam image='15' subtitle='Գինեկոլոգ' title="Ելենա Խդրյան" />
               <HomeSingleTeam image='33' subtitle='Գինեկոլոգ' title="Ղուկասյան Լուսինե" />
               <HomeSingleTeam image='28' subtitle='Գինեկոլոգ' title="Մարտիրոսյան Աննա" />
               <HomeSingleTeam image='32' subtitle='Գինեկոլոգ' title="Մկրտչյան Մերի" />
               <HomeSingleTeam image='41' subtitle='Գինեկոլոգ' title="Սնդոյան Անուշ" />
            </div>;
         case '4':
            return <div className='row'>
               <HomeSingleTeam image='11' title="Գոհար Բաբայան" subtitle='Լաբորատորիայի բաժնի վարիչ' />
               <HomeSingleTeam image='13' subtitle='Բժիշկ լաբորանտ' title="Գոհար Սարգսյան" />
               <HomeSingleTeam image='26' subtitle='Բժիշկ լաբորանտ' title="Մարգարիտ Գևորգյան" />
               <HomeSingleTeam image='39' subtitle='Բժիշկ մանրէաբան' title="Ջուլիետա Սարդարյան" />
            </div>;
         case '5':
            return <div className='row'>
               <HomeSingleTeam image='3' title="Անուշ Խանգուլյան" subtitle='Օնկոլոգ' />
               <HomeSingleTeam image='4' title="Առաքելյան Էդգար" subtitle='Մաշկաբան' />
               <HomeSingleTeam image='9' title="Գայանե Ղալամքարյան" subtitle='Սրտաբան' />
               <HomeSingleTeam image='10' title="Գյուրջյան Իսահակ" subtitle='Մանկական վիրաբույժ' />
               <HomeSingleTeam image='14' title="Դավթյան Գագիկ" subtitle='Վիրաբույժ' />
               <HomeSingleTeam image='19' title="Ինգա Սաֆարյան" subtitle='Սոնոգրաֆիստ' />
               <HomeSingleTeam image='20' title="Իռեն Առաքելովա" subtitle='Նյարդաբան' />
               <HomeSingleTeam image='22' title="Կարինե Բադանյան" subtitle='Սոնոգրաֆիստ' />
               <HomeSingleTeam image='23' title="Կարինե Սրապիոնյան" subtitle='Մանկական նյարդաբան' />
               <HomeSingleTeam image='30' title="Միրզոյան Նարինե" subtitle='Դիագնոստիկ' />
               <HomeSingleTeam image='37' title="Մուշեղյան Անահիտ" subtitle='Ֆիզիոթերապիա' />
               <HomeSingleTeam image='40' title="Սեդա Հովհաննիսյան" subtitle='ՔԿԱ' />
               <HomeSingleTeam image='42' title="Սոնա Զաքարյան" subtitle='ՔԿԱ' />
               <HomeSingleTeam image='46' title="Օհանյան Արմեն" subtitle='Ինֆեկցիոնիստ' />
            </div>;
         case '6':
            return <div className='row'>
               <HomeSingleTeam subtitle='Ռենտգենոլոգ' image='36' title="Հասմիկ Կարապետյան" />
               <HomeSingleTeam subtitle='Ռենտգենոլոգ' image='35' title="Մուշեղ Ստեփանյան" />
            </div>;
         default:
            return <div className='row'>Value not between 1 and 4</div>;
      }
   };

   return (
      <>
         <section className="team-area pt-115 pb-55">
            <div className="container">
               {renderTitle()}
               {renderContent()}
            </div>
         </section>
      </>
   );
};

export default ServicesDetailsArea;