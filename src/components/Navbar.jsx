import React, { useEffect } from 'react';
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-neutral-400"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If screensize is below 900px, disable activeMenu
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    // Left align Navlink Buttons
    <div className="flex justify-between p-2 md:ml-6 md:mr-8 relative">

      {/* Left side Navbar Buttons */}
      <div className="flex">
        {/* setActiveMenu Sidebar Button */}
        <NavButton title="Menu" customFunc={handleActiveMenu} color="#fafafa" icon={<AiOutlineMenu />} />
        {/* New Task Button */}
        <NavButton title="New Task" customFunc={() => handleClick('newtask')} color="#fafafa" icon={<AiOutlinePlus />} />
      </div>

      {/* Right side Navbar Buttons */}
      <div className="flex">
        {/* Notifications Button */}
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color="#fafafa" icon={<RiNotification3Line />} />
        {/* Profile Button */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            {/* Profile Avatar */}
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <MdKeyboardArrowDown className="text-white text-14" />
          </div>
        </TooltipComponent>

        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;
