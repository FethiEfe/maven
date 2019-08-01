import React, { Component } from "react";
import Departure from "./Departure";
import Arrival from "./Arrival"
import axios from "axios"
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import "./Modal.css"


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            minutes: "",
            departureData: [],
            arrivalData: []
        }
    }

    handleChange = (event, value) => {
        this.setState({ 
            value,
            minutes: event.target.value
                    });
    };

    handleClick = e => {
        const { minutes} = this.state
        if(minutes){
            let currentTime = Math.floor(new Date().getTime() / 1000);
            let xMinsAgo = currentTime - (minutes * 60)
            console.log(currentTime)
            console.log(xMinsAgo)
            axios.all([
                axios.get(`https://fethi:fethi@opensky-network.org/api/flights/departure?airport=${this.props.airportICAO}&begin=${xMinsAgo}&end=${currentTime}`),
                axios.get(`https://fethi:fethi@opensky-network.org/api/flights/arrival?airport=${this.props.airportICAO}&begin=${xMinsAgo}&end=${currentTime}`)
            ])
            .then(axios.spread((departureRes, arrivalRes) => {
                this.setState({
                    departureData:departureRes.data,
                    arrivalData:arrivalRes.data
                })
                console.log(departureRes.data)
                console.log(arrivalRes.data)
            }))
        
        }
    }

    render() {
        const { value, departureData, arrivalData} = this.state
        return (
            <div >
                <Dialog open={this.props.open} onClose={this.props.handleClose} >
                    
                    <div id = "input-div">
                        <label>Please enter a value to display departing and arriving flights in the last * minutes</label> 
                        <input name = "minutes"
                               value = {this.state.minutes}
                               onChange = {this.handleChange}
                               placeholder = "100 mins"/>
                        <button onClick = {this.handleClick}>Enter</button>
                    </div>
                    <DialogContent>
                        <AppBar position="static">
                            <Tabs value={value} onChange={this.handleChange}>
                                <Tab label="Departure" />
                                <Tab label="Arrival" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <Departure departureData = {departureData}/>}
                        {value === 1 && <Arrival arrivalData = {arrivalData} />}
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.props.handleClose}>
                            OK
                    </Button>
                    </DialogActions>
                </Dialog>
            </div >
        )

    }
}

export default Modal