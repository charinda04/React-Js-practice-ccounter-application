import React, { Component } from "react";

class Counter extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.counter);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.counter);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.counter.id);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className="badge badge-primary m-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
