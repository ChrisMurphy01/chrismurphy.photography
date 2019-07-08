import React from "react";
import "./styles.scss";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">Chris Murphy - Fine Art Photography</h1>
      </Link>
      {props.showFilter !== "false" && (
        <Nav handleSetFilter={props.handleSetFilter} />
      )}
    </header>
  );
};

export default Header;
