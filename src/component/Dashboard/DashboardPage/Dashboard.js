import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Modal from "../Modal/Modal";
import "./Dashboard.css"
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      airportICAO: "",
      cityName: "",
      isLoggedIn:false,
      airports:  [{ city: "Houston", icao: "KIAH" },
                  { city: "New York", icao: "KJFK" },
                  { city: "Amsterdam", icao: "EHAM" },
                  { city: "London", icao: "EGLL" },
                  { city: "Rome", icao: "LIRF" },
                  { city: "Los Angeles", icao: "KLAX" },
                  { city: "Paris", icao: "LFPG" },
                  { city: "Istanbul", icao: "LTBA" },
                  { city: "Moscow", icao: "UUDD" },
                  { city: "California", icao: "KLAX" }]
    }
  }

  componentDidMount(){
    // check the server whether  user is logged in or not 
    axios.get("/auth/cookie")
    .then(res => {
      if(res.data.username){
        this.setState({
          isLoggedIn:true
        })
      }else{
        this.props.history.push({
          pathname: '/'
        })
      }
    })
    
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = (airportICAO, cityName) => {
    this.setState({
      open: true,
      airportICAO,
      cityName,
    });
  };


  handleSignOut = () => {
    axios.get("/auth/signout")
    .then(()=>{
      this.props.history.push({
        pathname: '/'
      })
    })
  }
  

  render() {
    //Destructure local state
    const { open, airportICAO, cityName, airports, isLoggedIn} = this.state;

    //Check if the user authenticated
    if (!isLoggedIn) {
      return <div className = "loading" style ={{marginTop : "10vh"}}></div>
    }
    
    // loop through the airports array
    const airport = airports.map((element, index) => {
      return (
        <Grid item xs={6} key={index}>
          <Button variant="contained" color="primary" onClick={() => this.handleClick(element.icao, element.city)}>
            {element.city}
          </Button>
        </Grid>
      )
    })

    return (
      <Container maxWidth="sm" id="airports">
        <img id="signout-icon"
          src="https://png.pngtree.com/svg/20170808/57d772149e.svg"
          onClick={this.handleSignOut}
          alt="signout icon" />
        <h5 style={{ textAlign: "center" }}>Select an airport to display departing and arriving flights</h5>

        <Grid container spacing={4} className="grid-view">
          {airport}
        </Grid>

        {open ?
          <Modal open={open}
            handleClose={this.handleClose}
            airportICAO={airportICAO}
            cityName={cityName} />
          : null}
      </Container>
    );

  }
}

export default withRouter(Dashboard);