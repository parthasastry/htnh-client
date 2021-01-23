import React, { Component } from "react";

const data = [
  {
    day: "Monday",
    datepart: "2021-01-16",
    timepart: "10 AM",
    event: "Linghashtakam and Thirumurai ",
  },
  {
    day: "Tuesday",
    datepart: "2021-01-17",
    timepart: "7 PM",
    event: "Hanuman Chalisa ",
  },
];

export class Events extends Component {
  render() {
    const tableHeader = (
      <thead>
        <tr>
          <th>Day</th>
          <th>Date</th>
          <th>Time</th>
          <th>Event Description</th>
        </tr>
      </thead>
    );

    const tableData = data.map((d) => {
      return (
        <tr>
          <td>{d.day}</td>
          <td>{d.datepart}</td>
          <td>{d.timepart}</td>
          <td>{d.event}</td>
        </tr>
      );
    });

    return (
      <div>
        <h4 className="text center">Events</h4>
        <table className="striped centered">
          {tableHeader}
          <tbody>{tableData}</tbody>
        </table>
      </div>
    );
  }
}

export default Events;
