import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        To Do List
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Your To Do List
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
