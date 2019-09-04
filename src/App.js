import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";
// import React, { useState } from "react";
import classes from "./App.css";
// Again, when import, shall be capital start. It is case sensitive.
import Person from "./Person/Person";

// >>> React Hooks style. >>>
// An important difference between hook and class style is that hook rewrite the state with setter (not merge), so anything missing will be gone.
// You need to manually make sure everything is updated.
// Or, you only set one state in one useState.
// const App = props => {
//   // first will be getter, second will be getter.
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Alice", age: 23 },
//       { name: "Bob", age: 42 },
//       { name: "Claire", age: 45 },
//       { name: "David", age: 98 }
//     ]
//   });

//   const [otherState, setOtherState] = useState({
//     otherState: "some other value"
//   });

//   const switchNameHandler = () => {
//     // console.log("was clicked");
//     setPersonsState({
//       persons: [
//         { name: "Alice", age: 233 },
//         { name: "Bob", age: 42 },
//         { name: "Claire", age: 45 },
//         { name: "David", age: 98 },
//         { name: "Elanie", age: 55 }
//       ]
//     });
//   };

//   return (
//     // Only one root element shall be added. It looks like HTML, but it's JS!
//     <div className="App">
//       <h1>Welcome to RaH!!!</h1>
//       <p>something.</p>
//       {/* capital C in onClick and not () behind the method name. */}
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person name="Bob" age="23">
//         My hobbies: rading
//       </Person>
//       <Person name="Claire" age="45" />
//     </div>
//   );
// };
// <<< React hooks style. <<<

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

  // switchNameHandler = newName => {
  //   // console.log("was clicked");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 233 },
  //       { name: "Bob", age: 42 },
  //       { name: "Claire", age: 45 },
  //       { name: "David", age: 98 },
  //       { name: "Elanie", age: 55 }
  //     ]
  //   });
  // };

  deletePersonHandler = personIndex => {
    // Flaw in this flow: The actually state has been manipulated.
    // const persons = this.state.persons;

    // solution1: Make a copy
    // const persons = this.state.persons.slice();

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

    // this.setState({
    //   persons: [
    //     { name: event.target.value, age: 42 },
    //     { name: "Claire", age: 45 },
    //     { name: "David", age: 98 },
    //     { name: "Elanie", age: 55 }
    //   ]
    // });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  // When react re-render, this whole render method will be called.
  render() {
    let btnClass = "";

    let persons = null;

    // I can add normal js code here since it's not inside jsx.
    if (this.state.showPerson) {
      persons = (
        <div>
          {/* vanilla JS: js -> jsx */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                // why we need key: If no key assigned, everytime a re-render needed
                // for ths llist component, the whole list will be re-rendered since
                // react don't know which ones shall be passed. This could be very
                // inefficient for long list.
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}

          {/* >>> The old way to hard code a list of person */}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            // Another way to pass parameter into methon. This could be less efficient because it
            // might cause re-render.
            click={() => this.switchNameHandler("Gin")}
            changed={this.nameChangeHandler}
          />
          <Person name="Bob" age="23">
            My hobbies: rading
          </Person>
          <Person name="Claire" age="45" /> */}
          {/* <<< The old way to hard code a list of person */}
        </div>
      );

      btnClass = classes.Red;
      // Even though style is a constant, but we can still modify a part of it.
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    // let classes = ["red", "bold"].join(" ");
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      // classes.push("red");
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      // classes.push("bold");
      assignedClasses.push(classes.bold);
    }

    return (
      // Only one root elem ent shall be added. It looks like HTML, but it's JS!
      // <StyleRoot>
      // <div className="App">
      <div className={classes.App}>
        <h1>Welcome to RaH!!!</h1>
        {/* dont forget the classes shall be string instead of list below. */}
        <p className={assignedClasses.join(" ")}>something.</p>
        {/* <p>something.</p> */}
        {/* capital C in onClick and not () behind the method name; One way to pass parameter to 
        method is bind;*/}
        <button onClick={this.togglePersonsHandler} className={btnClass}>
          Toggle Persons
        </button>

        {/* >>> A way to add JS in the below...but you can't use block statement :(
          in another way, no if else.
        ) checker... but this could get nasty and hard to keep track...*/}
        {/* {this.state.showPerson ? (
          // react.create element below
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              // Another way to pass parameter into methon. This could be less efficient because it
              // might cause re-render.
              click={() => this.switchNameHandler("Gin")}
              changed={this.nameChangeHandler}
            />
            <Person name="Bob" age="23">
              My hobbies: rading
            </Person>
            <Person name="Claire" age="45" />
          </div>
        ) : null} */}
        {/* <<< */}

        {/* >>> The js way >>> Recommended.*/}
        {persons}
        {/* <<< The js way <<< */}
      </div>
      // </StyleRoot>
    );

    // Behind the scene...
    // return React.createElement('div', {className: 'App'},
    // React.createElement('h1', null, 'Hey Jude!'));
  }
}
// <<< Traditional react style. <<<

// Higher order component
// export default Radium(App);
export default App;
