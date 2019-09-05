import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    // classes.push("red");
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    // classes.push("bold");
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Welcome to RaH!!!</h1>

      <p className={assignedClasses.join(" ")}>something.</p>

      <button onClick={props.clicked} className={btnClass}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
