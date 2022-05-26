import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Form from 'react-bootstrap/Form';
import { Checkbox } from 'antd';
import { Helmet } from 'react-helmet';
import { GoogleLogin } from 'react-google-login';


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const responseGoogle = (response) => {
    console.log(response);
}

function Login() {
    return (
        <>
            <Helmet>
                <title>Login to Foresight</title>
            </Helmet>
            <div className="flexContainer">
            
                <div className="flexLeft">
                    <div className="LoginNav">
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
                    <img src="../assets/login.svg" alt="data-pana" className="loginSvg" />
                    </div>

                    <h3 className="svgText">Access accurate data and recommendations to help improve your agricultural venture.</h3>

                </div>

                <div className="flexRight">
                    <h1 className="LoginTitle">Login to your account</h1>
                    <Form>
                        
                        <Form.Group className="mb-3"  controlId="formGroupEmail" id="formField">
                            <Form.Label className="formLabel">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword" id="formField">
                            <Form.Label className="formLabel">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Checkbox onChange={onChange} className="checkboxText">Keep me signed in</Checkbox>

                    </Form>

                    <button className="LoginBtn">Login</button>
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

                    <p className="loginText">Don't have an account yet?<Link to='/register'><span>Register here</span></Link></p>




                    

                </div>
            </div>
        </>
    )
}

export default Login;
