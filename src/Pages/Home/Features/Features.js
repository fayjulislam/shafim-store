import React from 'react';
import './Features.css';
// All Images
import featuresOne from '../../../Images/f1.png';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div>
            {/* <!-- feature section --> */}

            <section className="feature_section my-5">
                <Container>
                    <div className="heading_container">
                        <h2 className="my-5"> APPLE WATCH FEATURES</h2>
                    </div>
                    <Row>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresOne} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        GPS ENABLED
                                    </h5>
                                    <p>
                                        This new sensor and app has the ability to measure the amount of oxygen in your blood and how well your body absorbs it, which can be essential indicators of potential respiratory conditions.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresOne} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        FULLY WATERPROOF
                                    </h5>
                                    <p>
                                        This new sensor and app has the ability to measure the amount of oxygen in your blood and how well your body absorbs it, which can be essential indicators of potential respiratory conditions.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresOne} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        FITNESS TRACKING
                                    </h5>
                                    <p>
                                        This new sensor and app has the ability to measure the amount of oxygen in your blood and how well your body absorbs it, which can be essential indicators of potential respiratory conditions.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresOne} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        NOTIFICATIONS
                                    </h5>
                                    <p>
                                        This new sensor and app has the ability to measure the amount of oxygen in your blood and how well your body absorbs it, which can be essential indicators of potential respiratory conditions.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <!-- end feature section --> */}
        </div>
    );
};

export default Features;