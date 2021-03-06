import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./NavBar.module.css";
import uiClasses from "../../../components/UI/Layout/Layout.module.css";

class NavBar extends Component {
  state = {
    menuOpen: false,
    showSearch: false
  };

  menuClickHandler = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  showSearchHandler = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ showSearch: false });
    }
  }

  render() {
    return (
      <div>
        <div className={classes.NavBar}>
          <div className={classes.NavBarInner}>
            <div className={classes.Logo}>
              <h2>
                <span style={{ fontWeight: "200" }}>media</span>
                <span style={{ fontWeight: "600" }}>Geek</span>
              </h2>
            </div>

            <div className={classes.SearchIcon}>
              <FontAwesomeIcon
                icon={faSearch}
                onClick={this.showSearchHandler}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
