import React from "react";

function connect(state$, selector = (state) => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      constructor(props) {
        super(props);
        state$.take(1).map(selector).subscribe(state => this.state = state);
      }

      componentDidMount() {
        this.subscription = state$.map(selector).subscribe(::this.setState);
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
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
