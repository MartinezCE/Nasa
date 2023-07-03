import React from "react";

const Popup = ({ isOpen, onClose,hrf ,text}) => {
  return (
    <div
      onClick={onClose}
      className={`fixed z-50 inset-0 overflow-y-auto cursor-pointer ${
        isOpen ? "block" : "hidden"
      }`} style={{zIndex:'1000'}}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="bg-white p-8 relative z-10 flex flex-col items-center">
         {text && <p className="text-black">{text}</p>}
          <img
          src={hrf}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
