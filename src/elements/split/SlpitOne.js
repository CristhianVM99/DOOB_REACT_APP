import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SlpitOne = ({title, description, img}) => {
    return (
            <div className="rn-splite-style">
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src={img} alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">{title}</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">{description}</p>
                                    </ScrollAnimation>

                                    
                                    {/* <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <ul className="split-list">
                                            <li>- Doug DeMarco, Design Prototyping Manager</li>
                                            <li>- 108 million paying subscribers</li>
                                            <li>- Over 1.7 billion hours of music played monthly</li>
                                            <li>- 4,000+ employees working across 16 offices</li>
                                        </ul>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <div className="view-more-button mt--35">
                                            <a className="btn-default" href="/contact">Contact With Us</a>
                                        </div>
                                    </ScrollAnimation> */}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SlpitOne
