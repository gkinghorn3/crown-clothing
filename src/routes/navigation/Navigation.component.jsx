import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import {UserContext} from '../../contexts/user.context';

import "./navigation.styles.scss";
import { default as logo } from "../../assets/crown.svg";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  // console.log(currentUser); 

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="Shop">
            Shop Now
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
