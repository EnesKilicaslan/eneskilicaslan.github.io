import React from "react";
import Image from "next/image";
import Link from "next/link";

import profilePhoto from "@assets/images/profile.jpg";
import { imageLoader } from "helpers/image_loader";

export const Heading = (props: {
  active: "/" | "/portfolio" | "/blog" | "/contact";
}) => {
  const { active } = props;
  const activeClass = "rounded-sm border-b-2 text-red-800 border-b-red-800";

  return (
    <div className="flex justify-center items-center gap-4 sm:gap-12 pt-2 sm:pt-10 md:pt-24 flex-col md:flex-row font-bold text-3xl">
      <div>
        <Image
          loader={imageLoader}
          width={180}
          height={180}
          src={profilePhoto}
          className="rounded-full object-cover"
        />
      </div>

      <nav className="flex sm:gap-8 gap-4">
        {NavOptions.map((navOption) => {
          return (
            <div
              key={navOption.id}
              className={`cursor-pointer hover:text-red-800 ${
                active === navOption.id ? activeClass : ""
              }`}
            >
              <Link href={`${navOption.id}`}>{navOption.label}</Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

const NavOptions = [
  {
    id: "/",
    label: "Home",
  },
  {
    id: "/portfolio",
    label: "Portfolio",
  },
  {
    id: "/blog",
    label: "Blog",
  },
  {
    id: "/contact",
    label: "Contact",
  },
];
