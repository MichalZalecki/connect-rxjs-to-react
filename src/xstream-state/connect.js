import React from "react";

function connect(state$, selector = (state) => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      constructor(props) {
        super(props);

        this.listener = {
          next: ::this.setState,
          error: err => { throw err; },
          complete: () => {},
        };

        this.stateStream = state$.map(selector);
      }

      componentWillMount() {
        this.stateStream.addListener(this.listener);
      }

      componentWillUnmount() {
        this.stateStream.removeListener(this.listener);
      }

      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} />
        );
      }
    };
  }
}

export default connect;
