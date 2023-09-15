import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss'
import {default as logo} from '../../assets/crown.svg'

const Navigation = () => {
  return (
    <div>
      <div>
        <Link className="logo-container">
         <img src={logo} className='logo'  />

        </Link>
      </div>

      <Link></Link>
      <Outlet />
    </div>
  );
};

export default Navigation;
