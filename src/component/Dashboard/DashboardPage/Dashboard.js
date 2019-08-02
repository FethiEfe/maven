import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Redirect} from "react-router-dom"
import Modal from "../Modal/Modal";
import  "./Dashboard.css"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
      airportICAO: "",
      cityName:""
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = (airportICAO, cityName ) => {
    this.setState({
      open: true,
      airportICAO,
      cityName,
    });
  };
  handleSignOut = () =>{
    // kill username in props.history
    this.props.history.push({
      pathname: '/',
      state: ""
  })
  }

  render() {
    const { open, airportICAO, cityName } = this.state;
    if (!this.props.location.state) {
      return <Redirect to="/" />
    }

    return (
      <Container maxWidth="sm" id = "airports">
        <img id = "signout-icon"
             src = "https://png.pngtree.com/svg/20170808/57d772149e.svg"
             onClick = {this.handleSignOut} 
             alt = "signout icon"/>
        <h5 style ={{textAlign: "center"}}>Select an airport to display departing and arriving flights</h5>
        <Grid container spacing={4} className = "grid-view">

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("KIAH", "Houston")}>
              Houston
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("KJFK" , "New York")}>
              New York
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("EHAM", "Amsterdam")}>
              Amsterdam
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("EGLL", "London")}>
              London
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("KLAX", "California")}>
              California
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("LIRF", "Rome")}>
            Rome
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("KLAX", "Los Angeles")}>
              Los Angeles
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("LFPG", "Paris")}>
              Paris
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("LTBA", "Istanbul")}>
              Istanbul
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick("UUDD", "Moscow")}>
              Moscow
            </Button>
          </Grid>

          {open ?
            <Modal open={open}
              handleClose={this.handleClose}
              airportICAO={airportICAO} 
              cityName = {cityName}/>
            : null}
        </Grid>
      </Container>
    );

  }
}

export default withRouter(Dashboard);