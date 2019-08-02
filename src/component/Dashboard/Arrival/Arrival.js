import React, { Component } from 'react';
import "./Arrival.css"
import FontAwesome  from "react-fontawesome"


class Arrival extends Component {
    render() {
        const { arrivalData } = this.props
        let mappedArrivalData = arrivalData.map((element, i) => {
            return (
                <tr key = {i}>
                    <td >{element.icao24}</td>
                    <td >{element.callsign}</td>
                    <td >{element.estArrivalAirport}</td>
                    <td >{element.estDepartureAirport}</td>
                </tr>

            )
        })
        return (
            <div style={{ borderLeft: "1px solid black", width: "400px" }}>
                <h6 style={{ textAlign: "center" }}>
                    <FontAwesome
                    className='super-crazy-colors'
                    name='rocket'
                    size='2x'
                    flip="vertical" 
                    style ={{marginRight: "10px"}}
                    />
                    Arrival</h6>
                <table >
                    <thead>
                        <tr>
                            <th>ICAO24</th>
                            <th>Call Sign</th>
                            <th>Arrival </th>
                            <th>Departure </th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedArrivalData}
                    </tbody>
                </table>
            </div>
        )






    }
}

export default Arrival;