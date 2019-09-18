import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

// and we can now use the state here as props - state from testReducer (test from the rootReducer)
const mapState = state => ({
  // here we select from the state, what we will use as props in this component
  // we assign the state (state.test.data) here (into data)
  data: state.test.data
});

// these actions is gonna be available as props in this component
const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    // destruct from mapState and actions
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        {/* when this button ic clicked, we call the action creator -> (incrementCounter) */}
        <Button onClick={incrementCounter} positive content='Increment' />
        <Button onClick={decrementCounter} negative content='Decrement' />
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
