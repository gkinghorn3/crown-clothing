import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
// import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
// import Logo from '../../components/logo/Logo';

const Navigation = () => {
    return (

       <div>
            
            <Outlet />
       </div>
        

    )
  }

  export default Navigation;