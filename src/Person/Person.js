// Conventional to have Captial first letter.

// Op1
// function person() {
//     return;
// }

import React from "react";
// don't forget to import css.
import "./Person.css";

// Op2
// converntional, function with lowercase start.
const person = props => {
  // could excute one line js in {}, could be a function, dynamic content.
  return (
    <div className="Person">
      {/* Pass method as props. */}
      <p onClick={props.click}>
        {/* for class, here shall be this.props.name */}
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      {/* Two way binding. */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
