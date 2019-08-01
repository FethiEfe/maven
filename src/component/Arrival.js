import React, { Component } from 'react';


class Arrival extends Component {
    render() {
        const { arrivalData } = this.props
        let mappedArrivalData = arrivalData.map(element => {
            return (
                    <tr>
                        <td key={element.icao24}>{element.icao24}</td>
                        <td key={element.callsign}>{element.callsign}</td>
                        <td key={element.estArrivalAirport}>{element.estArrivalAirport}</td>
                        <td key={element.estDepartureAirport}>{element.estDepartureAirport}</td>
                    </tr> 
             
            )
        })
        return (

            <table>
                <thead>
                    <th>ICAO24</th>
                    <th>Call Sign</th>
                    <th>Arrival </th>
                    <th>Departure </th>
                </thead>
                <tbody>
                    {mappedArrivalData}
                </tbody>
            </table>
        )
        
            

           

        
    }
}

export default Arrival;