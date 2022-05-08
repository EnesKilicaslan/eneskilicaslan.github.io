// import styles from "@/styles/YouTube.module.css";
import React from "react";

export const YouTube = ({ id }: { id: string }) => {
  return (
    <div className="">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="w-full h-96 border-2 rounded-sm my-8"
      />
    </div>
  );
};

export default YouTube;
