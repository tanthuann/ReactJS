import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, withRouter, BrowserRouter as Router, Route, Link } from 'react-router-dom';

//BOOTSTRAP
import {
    Alert
} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            email: "",
            password: "",
            error: ""
        }

        this.onChangeKey = this.onChangeKey.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onChangeKey(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    async onLogin() {
        const { email, password } = this.state;
        //console.log(email, password);
        let err = [];
    
        try {
            await axios({
                method: 'post',
                url: '/user/login',
                data: {
                    email: email,
                    password: password
                }
            }).then( (res) => {
                if(res.data.error){
                    err = err.concat(res.data.error);
                }
                this.setState({
                    email: "",
                    password: "",
                    error: err
                })
            })
        } catch (e) {
            console.log("noooooo")
        }
        if(err.length === 0){
            this.setState({
                redirect: true
            })
        }

    }

    render() {
        const { redirect, error,  email, password } = this.state;
        if (redirect)
            return <Redirect to="/" />
        return (
            <div>
                <div className="py-4 d-flex justify-content-center bg-danger text-white">
                    <h1>Login</h1>
                </div>
                {error.length !== 0 && error.map((alert) =>
                        <Alert color="danger">
                            {alert}
                        </Alert>
                    )}
                <div className="container">
                    <div className="form-group">
                        <label className="h4" htmlFor="email">Email</label>
                        <input className="form-control" id="email" onChange={this.onChangeKey} type="text" name="email" value={email} />
                    </div>
                    <div className="form-group">
                        <label className="h4" htmlFor="password">Password</label>
                        <input className="form-control" id="password" onChange={this.onChangeKey} type="password" name="password" value={password} />
                    </div>
                    <button onClick={this.onLogin} className="my-2 btn btn-success">Login</button>
                    <p/>
                    <Link className="my-2 ml-auto btn btn-primary" to="/user/register">Register</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);