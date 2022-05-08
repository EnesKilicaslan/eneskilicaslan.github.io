import React from "react";
import { Heading } from "./Heading";

export const Container = (props: { children: React.ReactChild }) => {
  return (
    <div
      style={{ fontFamily: "Jim Nightshade" }}
      className="h-screen w-4/5 ml-auto mr-auto text-center text-2xl sm:text-4xl max-w-screen-lg"
    >
      {props.children}
    </div>
  );
};
