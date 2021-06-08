import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';


export default class SignIn extends Component {
    state= {
        email:'',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email:'', password:''})
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label="email"
                        type="email" 
                        required
                    />

                    <FormInput 
                        name="password"
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        label="password"
                        type="password" 
                        required
                    />

                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{''}Sign in with google{''}</CustomButton>
                </form>
                
            </div>
        )
    }
}
