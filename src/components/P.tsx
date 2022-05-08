import React from "react";

const P = ({ children }: { children?: React.ReactNode }) => {
  return <p className="my-6">{children}</p>;
};

export default P;
