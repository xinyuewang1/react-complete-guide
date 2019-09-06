import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.css";

import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  // You can have multiple useEffect. This run after return...
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request..
    // setTimeout(() => {
    //   alert("saved data to cloud!");
    // }, 1000);

    // This click will mount the person list immediately.
    toggleBtnRef.current.click();

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

  if (props.personsLength <= 2) {
    // classes.push("red");
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    // classes.push("bold");
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>

      <p className={assignedClasses.join(" ")}>something.</p>

      <button ref={toggleBtnRef} onClick={props.clicked} className={btnClass}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

// only change when input change. Optimize performance.
export default React.memo(cockpit);
