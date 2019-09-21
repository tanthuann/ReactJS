import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router';

//BOOTSTRAP
import {
    Alert
} from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            redirect: false
        }

        this.onLogin = this.onLogin.bind(this);
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    async onLogin() {
        let err = [];
        const { name, email, password, error } = this.state;
        console.log(name,  email, password);
        try {
            await axios({
                method: 'post',
                url: '/user/register',
                data: {
                    name: name,
                    email: email,
                    password: password
                }
            })
                .then((res) => {
                    if (res.data.error) {
                        err = err.concat(res.data.error);
                    }
                    this.setState((state) => {
                        return {
                            name: "",
                            email: "",
                            password: "",
                            error: err
                        }
                    })
                });
        } catch (e) {
            console.log("noooooo")
        }
        console.log(error);
        if(err.length === 0)
            this.setState({
                redirect: true
            })
    }

    render() {
        const { redirect, error } = this.state
        if (redirect) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <div>
                    <div className="py-4 d-flex justify-content-center bg-success text-white">
                        <h1>Create</h1>
                    </div>
                    <div className="container"></div>
                    {error.length !== 0 && error.map((alert) =>
                        <Alert color="danger">
                            {alert}
                        </Alert>
                    )}
                    <div className="container">
                        <div className="form-group">
                            <label className="h4" htmlFor="name">Name</label>
                            <input className="form-control" id="name" type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
                        </div>
                        {/* <div className="form-group"><label className="h4" for="phone">Phone number</label><input className="form-control" id="phone" type="number" name="phone"  /></div> */}
                        <div className="form-group">
                            <label className="h4" htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="email" name="email" onChange={this.handleInputChange} value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <label className="h4" htmlFor="password">Password</label>
                            <input className="form-control" id="password" type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                        </div>
                        {/* <div className="form-group"><label className="h4" for="avatar">Avatar</label><input className="form-control-file" id="avatar" type="file" name="avatar" /> */}
                        <button onClick={this.onLogin} className="my-2 btn btn-success">Create</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Register);