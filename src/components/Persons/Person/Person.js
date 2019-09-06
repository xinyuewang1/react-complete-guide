import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";

// import Aux from "../../../hoc/Aux";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please log in! :(</p>
            )
          }
        </AuthContext.Consumer>
        {/* Pass method as props. */}
        <p onClick={this.props.click}>
          {/* for class, here shall be this.props.name */}
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        {/* Two way binding. */}
        <input
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

// Basically python type hint.
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

// export default Radium(person);
export default withClass(Person, classes.Person);
