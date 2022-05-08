import React from "react";

export const Image = ({ src }: { src: string }) => {
  return (
    // <div className="img-container">
    <div className="img-container">
      <img src={src} width="100%" height="100%" />
    </div>
  );
};
