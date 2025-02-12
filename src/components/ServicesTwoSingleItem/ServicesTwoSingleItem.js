import React from 'react';
import { Link } from 'react-router-dom';

const ServicesTwoSingleItem = ({ image, title, about, icon }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="service-box-3 mb-30 text-center">
                    <div className="service-thumb">
                        <Link to="/servicesDetails">
                            <img style={{ maxHeight: 200, maxWidth: 350, minWidth: 350, objectFit: 'cover' }} src={`img/blog/news-thumb-${image}.jpg`} alt="" />
                        </Link>
                    </div>
                    <div className="service-content-box">
                        <div className="service-content">
                            <h3><Link to={`/servicesDetails/${icon}`}>{title}</Link></h3>
                            <p>{about}</p>
                        </div>
                        {/* <Link to="/servicesDetails" className="service-link">Ավելին</Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesTwoSingleItem;