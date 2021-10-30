import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <div className={styles.login}>
            <h1>INTOPCOL</h1>
            <h3>communication</h3>
            <img src="https://i.ibb.co/drMgcYF/logo-Intop-Col.png" alt="logo" />
            <Link to={"/register"}><button>Login</button></Link>
            <Link to={"/"}><button>Register</button></Link>
        </div>
    );
}

export default Login
