import React from "react";
import dashimg from "../assets/Category.png";
import schedule from "../assets/Document.png";
import setting from "../assets/Setting.png";
import invoice from "../assets/Ticket.png";
import notification from "../assets/Notification.png";
import calendar from "../assets/Calendar (1).png";
import upload from "../assets/Chart.png";

const Items = ({ open }) => {

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="cursor-pointer flex md:gap-6 lg:pr-12 gap-2 lg:gap-10 flex-col md:mt-6 items-start">
      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb]`} style={{ width: open ? '140px' : 'auto' }}>
        <img alt="dashboard" src={dashimg} className={`w-[${open ? '24px' : '20px'}] h-[24px]`} />
        {open && <p className="font-normal text-[16px] md:text-[18px] text-[#030229] dark:text-white">Dashboard</p>}
      </div>
      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb']`} style={{ width: open ? '112px' : 'auto' }}>
        <img alt="upload" src={upload} className={`w-[${open ? '24px' : '20px'}] h-[22px]`} />
        {open && <p className="font-normal text-[16px] md:text-[18px] text-[#605BFF] dark:text-[#9bafff]">Upload</p>}
      </div>
      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb']`} style={{ width: open ? '112px' : 'auto' }}>
        <img alt="invoice" src={invoice} className={`w-[${open ? '24px' : '20px'}] h-[18.37px] dark:filter dark:invert`} />
        {open && <p className="font-normal text-[16px] md:text-[18px] text-[#030229] dark:text-white">Invoice</p>}
      </div>
      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb']`} style={{ width: open ? '122px' : 'auto' }}>
        <img alt="schedule" src={schedule} className={`w-[${open ? '24px' : '20px'}] h-[26px] dark:filter dark:invert`} />
        {open && <p className="font-normal text-[16px] md:text-[18px] text-[#030229] dark:text-white">Schedule</p>}
      </div>
      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb']`} style={{ width: open ? '120px' : 'auto' }}>
        <img alt="calendar" src={calendar} className={`w-[${open ? '24px' : '20px'}] h-[26px] dark:filter dark:invert`} />
        {open && <p className="font-normal text-[16px] md:text-[18px] text-[#030229] dark:text-white">Calendar</p>}
      </div>
      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb']`} style={{ width: open ? '143px' : 'auto' }}>
        <img alt="notification" src={notification} className={`w-[${open ? '24px' : '20px'}] h-[26px] dark:filter dark:invert`} />
        {open && <p className="font-normal text-[16px] md:text-[18px] text-[#030229] dark:text-white">Notification</p>}
      </div>
      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb']`} style={{ width: open ? '114px' : 'auto' }}>
        <img alt="setting" src={setting} className={`w-[${open ? '24px' : '20px'}] h-[26px] dark:filter dark:invert`} />
        {open && <p className="font-normal text-[16px] md:text-[18px] text-[#030229] dark:text-white">Settings</p>}
      </div>

      <div className={`flex ${open ? "justify-between" : "justify-center"} items-center gap-3 p-2 rounded-lg hover:bg-[#4a48bb] hover:text-white dark:hover:bg-[#4a48bb']`} style={{ width: open ? '140px' : 'auto' }} onClick={logout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-6 h-6 ${open ? "-ml-1" : ""} dark:text-white`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        {open && <p className="font-normal text-[16px] md:text-[18px] text-white bg-[#4a48bb] p-1 rounded-md px-2 hover:font-semibold">Logout</p>}
      </div>
    </div>
  );
};

export default Items;
