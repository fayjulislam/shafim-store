import React from 'react';
import './Banner.css';
import banner from '../../../Images/apple-group-2.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            {/* <!-- Banner section --> */}
            <section className="banner_section ">
                <div id="banner">
                    <Container>
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={6}>
                                <div className="detail-box">
                                    <h1>
                                        Apple Smart Watch
                                    </h1>
                                    <p>
                                        Apple Watch can do what your other devices can't because it's on your wrist. When you wear it, you get a fitness partner. And it's always just a glance away.
                                    </p>
                                    <div className="btn-box">
                                        <Link to="/watchs" className="btn1"> Explore All Watches </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="img-box">
                                    <img className="" src={banner} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
            {/* <!-- end Banner section --> */}
        </div>
    );
};

export default Banner;