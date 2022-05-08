import React from "react";
import style from "./Blockquote.module.css";

const Blockquote = ({ children }: { children?: React.ReactNode }) => {
  return <blockquote className={style.quote}>{children}</blockquote>;
};

export default Blockquote;
