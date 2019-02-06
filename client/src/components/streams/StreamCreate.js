import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.addTodo(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create A Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(StreamCreate);
