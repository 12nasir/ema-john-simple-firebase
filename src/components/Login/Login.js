import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {user, signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.form || '/';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url);
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            <p>New to ema-john? <Link to="/register">Create an account</Link></p>
            <div>---------or--------</div>
            <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;