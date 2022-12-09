import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiSellfy } from 'react-icons/si';

import { SidebarLinks } from './SidebarData';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // Sidebar Hover & Active Page Text Colors
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            {/* Top Left Icon & Link */}
            <Link to="/dashboard" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiSellfy /> <span>SPADE 2.0</span>
            </Link>
          </div>
          {/* Sidebar Links */}
          <div className="mt-10 ">
            {/* Importing SidebarData's title into sidebar */}
            {SidebarLinks.map((item) => (
              <div key={item.title}>
                {/* Sidebar Category Class */}
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-3 uppercase">
                  {item.title}
                </p>
                {/* Importing Links under Categories  */}
                {item.links.map((link) => (
                  <NavLink
                    to={link.path}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
