import React from "react";

const H2 = ({ children }: { children?: React.ReactNode }) => {
  return <h2 className="text-red-700 font-bold text-2xl my-8 ">{children}</h2>;
};

export default H2;
