import React from 'react';
import './Brand.css';
// All Images
import BrandOne from '../../../Images/7-series.jpg';
import BrandTwo from '../../../Images/6-series.jpg';
import BrandThree from '../../../Images/5-series.jpg';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Brand = () => {
    return (
        <div>
            {/* <!-- about --> */}
            <Row className="pb-5 mt-5">
                <Col sm={4} className="my-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src={BrandOne} alt="" />
                        <div className="overlay">
                            <h5>7 SERIES WATCH</h5>
                            <Link className="info" as={NavLink} to="/watchs" >Shop Now</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="my-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src={BrandTwo} alt="" />
                        <div className="overlay">
                            <h5>6 SERIES WATCH</h5>
                            <Link className="info" as={NavLink} to="/watchs" >Shop Now</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="my-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src={BrandThree} alt="" />
                        <div className="overlay">
                            <h5>5 SERIES WATCH</h5>
                            <Link className="info" as={NavLink} to="/watchs" >Shop Now</Link>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <!-- //about --> */}
        </div >
    );
};

export default Brand;