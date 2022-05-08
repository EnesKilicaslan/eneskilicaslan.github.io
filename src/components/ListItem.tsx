import React from "react";

const ListItem = ({ children }: { children?: React.ReactNode }) => {
  return (
    <li className="before:content-['\2022'] before:inline-block before:w-4 before:ml-4 before:text-red-800 ">
      {children}
    </li>
  );
};

export default ListItem;
