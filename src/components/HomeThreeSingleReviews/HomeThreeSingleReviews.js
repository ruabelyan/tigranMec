import React from 'react';

const HomeThreeSingleReviews = ({ image, name, membersText }) => {
    return (
        <>
            <div className="item">
                <div className="review-box">
                    <div className="members-rating">
                        <ul>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                        </ul>
                    </div>
                    {/* <div className="members-text">
                        <p>kkk</p>
                    </div> */}
                    <div className="about-author d-flex align-items-center">
                        <div className="author-desination author-desination-2">
                            <h4>{name}</h4>
                            <div className="members-text">
                                <p>{membersText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeSingleReviews;