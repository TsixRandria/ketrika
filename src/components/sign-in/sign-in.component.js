import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

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
                        type="email" 
                        required
                    />
                    <label>Email</label>

                    <FormInput 
                        name="password"
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        type="password" 
                        required
                    />
                    <label>Password</label>

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
                
            </div>
        )
    }
}
