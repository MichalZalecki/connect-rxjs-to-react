import React from "react";
import Counter from "app/components/Counter";

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
        {this.state.showSecondCounter ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
