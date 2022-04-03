import React from "react";

function BackArrowBtn({ onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 border-2 rounded-8 flex items-center justify-center hover:border-b-active ${className}`}
    >
      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="hover:fill-active"
          d="M9.29294 0.292969L0.585938 8.99997L9.29294 17.707L10.7069 16.293L3.41394 8.99997L10.7069 1.70697L9.29294 0.292969Z"
          fill="#9A9AB0"
        />
      </svg>
    </button>
  );
}

export default BackArrowBtn;
