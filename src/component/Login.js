import React, { Component } from 'react';
import axios from "axios"
import Dashboard from "./Dashboard"
import { Redirect, withRouter } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';


import Container from '@material-ui/core/Container';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false,
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
            .catch(err => {
                console.log(err)
            });
    };

    render() {
        return (
            // <form onSubmit = {this.handleSubmit}>
            //     <input  name = "username"
            //             value = {this.state.username}
            //             onChange = {this.handleChange}/>
            //     <input  name = "password"
            //             value = {this.state.password}
            //             onChange = {this.handleChange}/>
            //     <button type = "submit">Login</button>
            // </form>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div >
                     <Avatar >
                
                    </Avatar> 
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form  onSubmit = {this.handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value = {this.state.username}
                            onChange = {this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value = {this.state.password}
                            onChange = {this.handleChange}
                        />
                      
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
