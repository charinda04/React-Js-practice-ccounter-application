import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="nabbar-brand" href="#">
          {this.props.totalCounters}
        </a>
      </nav>
    );
  }
}

export default NavBar;
