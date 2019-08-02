import React, { Component } from 'react';
import FontAwesome  from "react-fontawesome"

class Departure extends Component {
  render() {
    const { departureData } = this.props
    let mappedDepartureData = departureData.map((element, i)=> {
      return (
        <tr key ={i}>
          <td >{element.icao24}</td>
          <td >{element.callsign}</td>
          <td >{element.estArrivalAirport}</td>
          <td >{element.estDepartureAirport}</td>
        </tr>

      )
    })
    return (
      <div style = {{borderRight: "1px solid black", width: "400px"}}>
      <h6 style = {{textAlign: "center"}}>
        <FontAwesome
            className='super-crazy-colors'
            name='rocket'
            size='2x'
            style ={{marginRight: "10px"}}
        />
        Departure</h6>
        <table>
          <thead>
            <tr>
            <th>ICAO24</th>
            <th>Call Sign</th>
            <th>Arrival</th>
            <th>Departure</th>
            </tr>
          </thead>
          <tbody>
            {mappedDepartureData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Departure;