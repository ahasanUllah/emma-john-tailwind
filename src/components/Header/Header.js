import React from 'react';
import Logo from '../../../src/images/Logo.svg';
const Header = () => {
   return (
      <div>
         <div className="navbar bg-neutral flex flex-col md:flex-row px-28">
            <div className="flex-1">
               <a href="/" className="btn btn-ghost normal-case text-xl">
                  <img src={Logo} alt="" />
               </a>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal p-0 text-white">
                  <li>
                     <a className="hover:text-orange-500" href="/">
                        Order
                     </a>
                  </li>
                  <li>
                     <a className="hover:text-orange-500" href="/">
                        Order Review
                     </a>
                  </li>
                  <li>
                     <a className="hover:text-orange-500" href="/">
                        Manage Inventory
                     </a>
                  </li>

                  <li>
                     <a className="hover:text-orange-500" href="/">
                        Login
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;
