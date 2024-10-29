import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleTeam = ({ image, title, subtitle }) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="team-box text-center mb-60">
               <div style={{
                  display: 'flex',
                  justifyContent: 'center'
               }} className="team-thumb mb-45 pos-rel">
                  <div style={{ width: '270px', height: '270px' }}>
                     <img style={{ maxWidth: 200, maxHeight: 300, }} src={`../img/team/member (${image}).png`} alt="" />
                  </div>

                  {/* <Link className="team-link" to="/doctorDetails">+</Link> */}
               </div>
               <div className="team-content">
                  <h3>{title}</h3>
                  <h6>{subtitle}</h6>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleTeam;