import React, { useState } from "react";
import Logo from "../../assets/images/Aarohilogo.png"; 

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { icon: 'fa-solid fa-house', label: 'Dashboard' },
    { icon: 'fa-solid fa-clipboard', label: 'Appointment Request' },
    { icon: 'fa-solid fa-chart-simple', label: 'Tables' },
    { icon: 'fa-brands fa-slack', label: 'Articles' },
    { icon: 'fa-solid fa-user', label: 'Profile' },
    { icon: 'fa-solid fa-lock', label: 'Logout' },
  ];

  

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="list-none">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`flex items-center p-4 cursor-pointer text-sm 
          hover:bg-gray-300 text-black font-bold transition-colors duration-300 
          ${activeIndex === index ? 'bg-red-400 text-white' : ''}`}
          onClick={() => handleClick(index)}
        >
          <i className={`${item.icon} mr-2 ${activeIndex === index ? 'text-white' : ''}`}></i>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 bg-white h-screen shadow-lg">
      <div className="p-6">
        <img src={Logo} alt="Hospital Logo" className="h-20 w-20" />
      </div>
      <Menu />
    </div>
  );
};

export default Sidebar;