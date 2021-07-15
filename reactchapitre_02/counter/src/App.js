import React from "react";
import Counter from "./components/counter";
import "./Css/App.css";

class App extends React.Component {
constructor(){
  super();
  this.state ={
    count : 1,
  };
}
 
render() {
  return (
    <div>
      <Counter
        count={this.state.count}
        addFunction={() => {
          // Mutation = INTERDIT
          //this.state.count++;

          // prevState = previous state
          this.setState((prevState) => {
            return {
              count: prevState.count + 1,
            };
          });
        }}
        substractFunction={() => {
          if (this.state.count > 0) {
            this.setState((prevState) => {
              return {
                count: prevState.count - 1,
              };
            });
          }
        }}
      />
    </div>
  );
}
}

export default App;