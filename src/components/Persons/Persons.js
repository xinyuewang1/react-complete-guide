import React from "react";
import Person from "./Person/Person";

// es6, oneline return, remember you're writing jsx here.
const persons = props =>
  props.persons.map((person, index) => {
    return (
      // The key always has to be in the outter element in a map method.
      <Person
        // why we need key: If no key assigned, everytime a re-render needed
        // for ths llist component, the whole list will be re-rendered since
        // react don't know which ones shall be passed. This could be very
        // inefficient for long list.
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
      />
    );
  });

export default persons;
