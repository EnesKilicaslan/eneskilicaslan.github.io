import { default as Img } from "next/image";
import { imageLoader } from "../../helpers/image_loader";

export const Image = ({ src }: { src: string }) => {
  return (
    // <div className="img-container">
    <div className="img-container">
      <Img
        loader={imageLoader}
        src={src}
        width="100%"
        height="100%"
        unoptimized={true}
        objectFit="contain"
        layout="fill"
      />
    </div>
  );
};
