import Link from "next/link";
import Image from "next/image";

import React from "react";

import BackIcon from "@assets/images/back-icon.svg";
import profilePhoto from "@assets/images/profile.jpg";
import { Github, Stackoverflow, Medium } from "@assets/icons";
import { imageLoader } from "helpers/image_loader";

export const PostWrapper = (props: {
  children: React.ReactChild;
  date?: string;
}) => {
  return (
    <div
      className={`mx-auto text-lg px-2 pt-8 pb-60 max-w-screen-md font-sans`}
    >
      <div className="flex justify-between h-16 mt-2 mb-10 mx-12">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16">
            <Image
              src={profilePhoto}
              loader={imageLoader}
              width={64}
              height={64}
              className="rounded-full object-cover"
              unoptimized={true}
            />
          </div>

          <div>
            <h3 className="bolder italic">Enes Kilicaslan</h3>
            <div className="flex items-center gap-10 text-gray-500 bold ">
              {props.date}

              <div className="flex gap-2 sm:visible invisible hover:shadow-sm">
                <a
                  href="https://github.com/EnesKilicaslan"
                  className="opacity-70 hover:opacity-100"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://stackoverflow.com/users/4735781/eneski"
                  className="opacity-70 hover:opacity-100"
                >
                  <Stackoverflow className="h-5 w-5" />
                </a>
                <a
                  href="https://medium.com/@eneski"
                  className="opacity-60 hover:opacity-100"
                >
                  <Medium className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-red-800 pt-2 hover:text-red-900 font-bold relative">
          <Link href={"/blog"}>
            <a className="font-jim text-3xl">
              Blog
              <BackIcon className="inline-block absolute  right-4 top-10" />
            </a>
          </Link>
        </div>
      </div>

      <article>{props.children}</article>
    </div>
  );
};
