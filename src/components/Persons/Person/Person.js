import React, { Component } from "react";

import classes from "./Person.css";

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {/* Pass method as props. */}
        <p onClick={this.props.click}>
          {/* for class, here shall be this.props.name */}
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        {/* Two way binding. */}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

// export default Radium(person);
export default withClass(Person, classes.Person);
