import React from "react";
import NameFormContainer from "../containers/NameFormContainer";
import DisplayContainer from "../containers/DisplayContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NameFormContainer />
        <DisplayContainer speak={"Hello"} />
      </div>
    );
  }
}

export default App;
