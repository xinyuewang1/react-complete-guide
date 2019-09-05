import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";
// import React, { useState } from "react";
import classes from "./App.css";
// Again, when import, shall be capital start. It is case sensitive.
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// >>> Traditional react class style. <<<
class App extends Component {
  // manage state within class. reserved word: state, children.
  // change state, will lead to a re-render.
  state = {
    persons: [
      { id: "1", name: "Alice", age: 23 },
      { id: "2", name: "Bob", age: 42 },
      { id: "3", name: "Claire", age: 45 },
      { id: "4", name: "David", age: 98 }
    ],
    otherState: "some other value",
    showPerson: false
  };

  deletePersonHandler = personIndex => {
    // solution2: es6, spread
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Substitute way...
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    // A copy of persons list.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  // When react re-render, this whole render method will be called.
  render() {
    let persons = null;

    // I can add normal js code here since it's not inside jsx.
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );

    }

    return (
      // Only one root elem ent shall be added. It looks like HTML, but it's JS!

      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {/* >>> The js way >>> Recommended.*/}
        {persons}
        {/* <<< The js way <<< */}
      </div>
    );

    // Behind the scene...
    // return React.createElement('div', {className: 'App'},
    // React.createElement('h1', null, 'Hey Jude!'));
  }
}
// <<< Traditional react style. <<<

export default App;
