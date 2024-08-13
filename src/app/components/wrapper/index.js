import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="px-[20px] py-[20px] sm:px-[10%]  w-full overflow-hidden">
      {children}
    </div>
  );
};

export default ContentWrapper;
