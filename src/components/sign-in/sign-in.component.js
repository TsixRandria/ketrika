import React, { Component } from 'react';

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
                    <input 
                        name="email" 
                        value={this.state.email} 
                        type="email" 
                        required/>
                    <label>Email</label>

                    <input 
                        name="password" 
                        value={this.state.password} 
                        type="password" 
                        required/>
                    <label>Password</label>

                    <input 
                        onChange={this.handleChange}
                        type="submit" 
                        value="submit"/>
                </form>
                
            </div>
        )
    }
}
