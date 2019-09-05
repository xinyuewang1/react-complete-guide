import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  // You can have multiple useEffect.
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request..
    setTimeout(() => {
      alert("saved data to cloud!");
    }, 1000);
    // To be more precise, the return below runs before the main useEffect
    // function but after the first render cycle.
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect.");
    };
    //   }, [props.persons]); //control when this will happen
    //   just need for componentDidMount, pass a empty [].
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect.");
    };
  });

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
      <h1>{props.title}</h1>

      <p className={assignedClasses.join(" ")}>something.</p>

      <button onClick={props.clicked} className={btnClass}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
