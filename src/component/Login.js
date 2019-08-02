import React, { Component } from 'react';
import axios from "axios"
import { withRouter } from "react-router-dom"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false,
            anyError: false
        }
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        axios.post("/user/login", { username, password })
            .then(() => {
                this.props.history.push({
                    pathname: '/dashboard',
                    state: username
                })
            })
            .catch(() => {
                this.setState({
                    anyError:true
                })
            });
    };

    render() {
    
        return (
            <Container component="main" maxWidth="xs">

                <div style={{ marginTop: "200px"}}>
                    <Typography component="h1" variant="h5" style={{ textAlign: "center" }}>
                        <img src="https://png.pngtree.com/svg/20170831/d323f01e9c.svg" 
                             style={{ width: "50px", marginLeft: "20px"}} 
                             alt = "login icon"/>
                        Sign In
                    </Typography>

                    <form onSubmit={this.handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="username"
                            autoComplete="username"
                            autoFocus
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        {this.state.anyError ? 
                            <div className="alert alert-danger" role="alert" style = {{padding:"0 10px 0 10px", textAlign: "center"}}>
                                            Username or Password Incorrect!!
                            </div>
                        : null}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>

                    </form>
                </div>

            </Container>
        );

    }

}

export default withRouter(Login);
