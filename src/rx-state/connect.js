import React from "react";

function connect(state$, selector = (state) => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      componentWillMount() {
        this.subscription = state$.map(selector).subscribe(::this.setState);
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      render() {
        console.log('renderConnect');
        return (
          <WrappedComponent {...this.state} {...this.props} />
        );
      }
    };
  }
}

export default connect;
