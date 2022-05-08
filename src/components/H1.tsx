import React from "react";

const H1 = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="text-red-700 font-bold text-3xl text-center mt-2 uppercase font-jim">
      {children}
    </div>
  );
};

export default H1;
