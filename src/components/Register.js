import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Register.css';
import Form from 'react-bootstrap/Form';
import { Checkbox } from 'antd';
import { GoogleLogin } from 'react-google-login';
import { Helmet } from 'react-helmet';


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const responseGoogle = (response) => {
    console.log(response);
}

function Register() {
    return (
        <>
            <Helmet>
                <title>Register to Foresight</title>
            </Helmet>

            <div className="flexContainer">
            
                <div className="flexLeft">
                    <div className="registerNav">
                    <Link to="/">
                        <img
                        src="../foresight-logo.png"
                        alt="Foresight Logo"
                        loading="lazy"
                        height="45"
                        className="logoImg"
                         />
                    </Link>

                    <Link to="/">
                        <h1 className="navTitle">Foresight</h1>
                    </Link>
                    </div>
                    <div className="svgContainer">
                    <img src="../assets/register.svg" alt="data-pana" className="loginSvg" />
                    </div>

                    <h3 className="svgText">Join Foresight today and gain access to high quality insights.</h3>

                </div>

                <div className="flexRight">
                    <h1 className="registerTitle">Create an account with us for free</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupName" id="formField">
                            <Form.Label className="formLabel">Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3"  controlId="formGroupEmail" id="formField">
                            <Form.Label className="formLabel">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword" id="formField">
                            <Form.Label className="formLabel">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Checkbox onChange={onChange} className="checkboxText">I agree to Foresight’s <span className="greenText">privacy policy</span> and <span className="greenText">terms of conditions</span></Checkbox>

                    </Form>

                    <button className="registerBtn">Register</button>
                    <div className="orGroup">
                        <hr className="horizLine"></hr>
                        <p className="orText">Or</p>
                        <hr className="horizLine"></hr>
                    </div>
                    
                    <GoogleLogin className="googleBtn"
                    clientId="1033505596086-b7cjhqfb9irsusldss92cam4k6f2hef7.apps.googleusercontent.com"
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />

                    <p className="loginText">Already have an account?<Link to ='/login'><span>Login here</span></Link></p>




                    

                </div>
            </div>
        </>
    )
}

export default Register
