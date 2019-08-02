import React, { Component } from "react";
import axios from "axios"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import Departure from "../../Departure";
import Arrival from "../../Arrival/Arrival"
import "./Modal.css"


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: "",
            departureData: [],
            arrivalData: [],
            isLoading: false,
            anyError: false
        }
    }

    handleChange = (event) => {
        this.setState({
            minutes: event.target.value
        });
    };


    handleClick = e => {
        const { minutes } = this.state
        if (minutes) {
            this.setState({
                isLoading: true,
                anyError: false,
                departureData: [],
                arrivalData: [],

            })
            let currentTime = Math.floor(new Date().getTime() / 1000);

            let xMinsAgo = currentTime - (minutes * 60)
            axios.all([
                axios.get(`https://fethi:fethi@opensky-network.org/api/flights/departure?airport=${this.props.airportICAO}&begin=${xMinsAgo}&end=${currentTime}`),
                axios.get(`https://fethi:fethi@opensky-network.org/api/flights/arrival?airport=${this.props.airportICAO}&begin=${xMinsAgo}&end=${currentTime}`)
            ])
                .then(axios.spread((departureRes, arrivalRes) => {
                    this.setState({
                        departureData: departureRes.data,
                        arrivalData: arrivalRes.data,
                        isLoading: false,

                    })
                    console.log(departureRes.data)
                    console.log(arrivalRes.data)
                }))
                .catch(err => {
                    console.log(err.status)
                    this.setState({
                        isLoading: false,
                        anyError: true
                    })
                })

        }
    }

    render() {
        const { departureData, arrivalData, isLoading, anyError } = this.state
        return (
            <div >
                <Dialog open={this.props.open}
                    onClose={this.props.handleClose}
                    maxWidth="md">

                    <div id="input-div">
                        <label>Please enter a value to display departing and arriving flights in the last * minutes</label>
                        <div>
                            <input name="minutes"
                                value={this.state.minutes}
                                onChange={this.handleChange}
                                placeholder="2000" />
                            <button onClick={this.handleClick}>Enter</button>
                        </div>

                    </div>

                    {/* Loading animation till data is received */}
                    {isLoading ? <div id="loading"></div> : null}

                    {/* Show error here */}
                    {anyError ? <div className="alert alert-danger" role="alert" style={{ padding: "0 10px 0 10px", textAlign: "center" }}>
                        No data found! Try again
                                 </div>
                        : null}
                    {departureData.length > 0 || arrivalData.length > 0 ?
                        <DialogContent id="content-table">
                            <div>
                                <Departure departureData={departureData} />
                            </div>
                            <div>
                                <Arrival arrivalData={arrivalData} />
                            </div>
                        </DialogContent>
                        : null
                    }
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