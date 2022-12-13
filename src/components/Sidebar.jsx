import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiSellfy } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { SidebarData } from './SidebarData';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // Sidebar Hover Link's Shape, Color, Size.
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-neutral-400 m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            {/* Top Left Icon & Link */}
            <Link to="/dashboard" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiSellfy /> <span>SPADE 2.0</span>
            </Link>

            {/* Minimized window close sidebar */}
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 text-white hover:bg-light-gray mt-4 mr-3 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar Links */}
          <div className="mt-8 ">
            {/* Importing SidebarData's title into sidebar */}
            {SidebarData.map((itemCategory) => (
              <div>
                {/* Sidebar Category Class */}
                <Link
                  to="/"
                  className="text-gray-400 m-3 mt-3 uppercase"
                >
                  {itemCategory.title}
                </Link>
                {/* Importing Links under Categories  */}
                {itemCategory.subNav.map((pageLink) => (
                  <NavLink
                    to={pageLink.path}
                    key={pageLink.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {pageLink.icon}
                    <span className="capitalize ">{pageLink.name}</span>
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
