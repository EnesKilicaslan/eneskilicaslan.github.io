import React from "react";

const A = ({ children, ...rest }: { children?: React.ReactNode }) => {
  return (
    <a {...rest} className="text-blue-700 font-bold cursor-pointer italic">
      {children}
    </a>
  );
};

export default A;
