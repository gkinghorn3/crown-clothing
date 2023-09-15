import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss'
import Logo from '../../assets/crownPng.png';

const Navigation = () => {
  return (
    <div>
      <div>
        <Link className="logo-container">
         <img src={Logo} className='logo'  />

        </Link>
      </div>

      <Link></Link>
      <Outlet />
    </div>
  );
};

export default Navigation;
