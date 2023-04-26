import React from "react";
import { FaInstagram } from "react-icons/fa";

const WhatappHoverBtn = () => {
  return (
    <div className="fixed bottom-0 right-0 p-4 lg:p-8">
      <a
        href="https://instagram.com/zrumana"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-pink-600 rounded-full h-16 w-16 lg:h-16 lg:w-16 flex items-center justify-center hover:bg-pink-400 cursor-pointer">
          <FaInstagram className="text-white text-4xl lg:text-4xl" />
        </div>
      </a>
    </div>
  );
};

export default WhatappHoverBtn;
