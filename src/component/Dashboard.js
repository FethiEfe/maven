import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from "axios";
import Modal from "./Modal";
import Button from '@material-ui/core/Button';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
      airportICAO: ""
      
    }
  }

  

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = (airportICAO) => {
    this.setState({
      open: true,
      airportICAO,
    });
  };


  render() {
    const { open, airportICAO } = this.state;
    if (!this.props.location.state) {
      return <Redirect to="/" />
    }
   
    return (
      <div >
        <Button variant="contained" color="primary" onClick={() => this.handleClick("KATL")}>
          Atlanta
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("KJFK")}>
          New York
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("EHAM")}>
          Amsterdam
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("EGLL")}>
          London
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("RJAA")}>
          Tokyo
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("ZSPD")}>
          Shanghai
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("KLAX")}>
          Los Angeles
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("LFPG")}>
          Paris
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("LTBA")}>
          Istanbul
        </Button>
        <Button variant="contained" color="primary" onClick={() => this.handleClick("UUDD")}>
          Moscow
        </Button>
      
        {open ? 
          <Modal open = {open}
                 handleClose = {this.handleClose}
                 airportICAO = {airportICAO}/> 
        : null}
      </div>

    );

  }
}

export default Dashboard;