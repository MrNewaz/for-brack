import React from "react";

import axios from "axios";

export default class AxiosCall extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    //Tor Rest Api De
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <>
        <h1>Niche Print Hobe</h1>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.id}>Halago Naam : {person.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
