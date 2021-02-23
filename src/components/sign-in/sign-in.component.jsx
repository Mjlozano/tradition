import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubtmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
    }
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })

    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubtmit}>
                    <FormInput name="email" value={this.state.email} type="email" label="email" handleChange={this.handleChange} required />

                    <FormInput name="password" value={this.state.password} label="password" handleChange={this.handleChange} type="password" required />

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}

export default SignIn;
