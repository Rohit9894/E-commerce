import React from "react";
export interface BottomDrawerProps {
  show?: boolean;
  setShow?: () => void;
  children?: React.ReactNode;
}
const BottomDrawer = ({ setShow, children }: BottomDrawerProps) => {
  return (
    <div id="bottom-popup" className="px-8">
      <div className="flex justify-end">
        <button
          id="closePopup"
          onClick={() => setShow(false)}
          className="mt-4 mr-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
      {children}
    </div>
  );
};

export default BottomDrawer;
