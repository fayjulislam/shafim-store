import React from 'react';
import './Registation.css';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
// Image
import bg from '../../../Images/cool-background.png';

const Registation = () => {
    const { signinGoogle, getName, singUp, getEmail, getPassword, setDisplayName, setIsLoading, saveUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/dashboard";
    const googleRedirect = location?.state?.from || "/dashboard";
    const register = (e) => {
        e.preventDefault();
        singUp()
            .then((result) => {
                setDisplayName()
                Swal.fire(
                    "Good job!",
                    "Account has been created SuccessFull!",
                    "success"
                )
                setTimeout(() => {
                    history.push(redirect);
                }, 5000)
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }

    const handleGoogleReg = () => {
        signinGoogle()
            .then(result => {
                saveUser(result.user.email, result.user.displayName, 'PUT')
                Swal.fire("Good job!",
                    "Registation SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }

    const Google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className="registation py-5"
                style={{
                    background: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <h1 className="mt-5 text-danger">REGISTRATION</h1>
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Col xs={10} md={6}>
                            <Form onSubmit={register}>
                                <FloatingLabel controlId="floatingText" label="Your Name" className="mb-3">
                                    <Form.Control onBlur={getName} type="text" placeholder="Fayjul Islam" required />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control onBlur={getEmail} type="email" placeholder="name@example.com" required />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" required />
                                </FloatingLabel>

                                <Button variant="primary" type="submit" className="text-dark my-4">Sign up</Button><br />
                                <Link to="/login" className="text-danger my-5">Not a member? Click Here for LOG IN</Link>
                                <h2 className="mt-2 text-danger">------- OR -------</h2>
                                <div>
                                    <Button className="mt-2 bg-primary border-0 text-dark" onClick={handleGoogleReg}>{Google}</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Registation;