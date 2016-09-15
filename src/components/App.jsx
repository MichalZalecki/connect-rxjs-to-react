import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSecondCounter: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSecondCounter: true });
    }, 5000);
  }

  render() {
    return (
      <div>
        <Counter />
        {this.state.showSecondCounter ? (
          <div>
            <p>That one is connected as well and recived current state in props</p>
            <Counter />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
