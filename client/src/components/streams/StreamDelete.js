import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchTodo, deleteTodo } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTodo(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this to do item?";
    }
    return `Are you sure you want to delete the to do item: "${
      this.props.stream.title
    }"`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTodo, deleteTodo }
)(StreamDelete);
