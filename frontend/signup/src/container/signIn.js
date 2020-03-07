import React from 'react';
import './signIn.css';

const SignIn= (props) =>{
    return(
        <div className="mainContainer">
                <div className="text">Sign In</div>
                <input className="inputFields" placeholder="Email" type="email"></input><br/>
                <input className="inputFields" placeholder="Password" type="password"></input><br/>
                <button className="signUpButton" type="submit" >Sign In</button>
                <div className="fpText">Forgot password?</div>
        </div>
    );
}

export default SignIn;