import React, { Component } from "react";
// import React, { useState } from "react";
import "./App.css";
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
      { name: "Alice", age: 23 },
      { name: "Bob", age: 42 },
      { name: "Claire", age: 45 },
      { name: "David", age: 98 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 233 },
        { name: "Bob", age: 42 },
        { name: "Claire", age: 45 },
        { name: "David", age: 98 },
        { name: "Elanie", age: 55 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 42 },
        { name: "Claire", age: 45 },
        { name: "David", age: 98 },
        { name: "Elanie", age: 55 }
      ]
    });
  };

  render() {
    return (
      // Only one root element shall be added. It looks like HTML, but it's JS!
      <div className="App">
        <h1>Welcome to RaH!!!</h1>
        <p>something.</p>
        {/* capital C in onClick and not () behind the method name; One way to pass parameter to 
        method is bind;*/}
        <button onClick={this.switchNameHandler.bind(this, "Fyne")}>
          Switch Name
        </button>
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
    );

    // Behind the scene...
    // return React.createElement('div', {className: 'App'},
    // React.createElement('h1', null, 'Hey Jude!'));
  }
}
// <<< Traditional react style. <<<

export default App;
