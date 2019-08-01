import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from "axios";
import Modal from "./Modal";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import  "./Dashboard.css"

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
    
      <Container maxWidth="sm" id = "airports">
        <h5 style ={{textAlign: "center"}}>Select an airport to display departing and arriving flights</h5>
        <Grid container spacing={4} className = "grid-view">

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("KATL")}>
              Atlanta
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("KJFK")}>
              New York
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("EHAM")}>
              Amsterdam
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("EGLL")}>
              London
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("RJAA")}>
              Tokyo
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("ZSPD")}>
              Shanghai
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("KLAX")}>
              Los Angeles
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("LFPG")}>
              Paris
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("LTBA")}>
              Istanbul
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("UUDD")}>
              Moscow
            </Button>
          </Grid>

          {open ?
            <Modal open={open}
              handleClose={this.handleClose}
              airportICAO={airportICAO} />
            : null}
        </Grid>
      </Container>
    );

  }
}

export default Dashboard;