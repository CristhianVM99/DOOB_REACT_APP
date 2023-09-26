import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const SlipFour = ({ title, content, img}) => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">
                    <div className="order-2 order-lg-1 col-lg-12 col-xl-6 col-12">
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
                                <div className="description"
                                    dangerouslySetInnerHTML={{
                                      __html: content,
                                    }}
                                ></div>
                            </ScrollAnimation>

                            {/* <div className="row">
                                {Data.map((data, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="count-box counter-style-4 text-start">
                                            <TrackVisibility once>
                                                {({ isVisible }) => isVisible && 
                                                    <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                                            </TrackVisibility>
                                            <h5 className="counter-title">{data.countTitle}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail">
                            <img src={img} alt="split Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipFour;