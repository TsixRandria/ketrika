import React, { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss'

export default class SignInAndSignUp extends Component {
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn />
            </div>
        )
    }
}
