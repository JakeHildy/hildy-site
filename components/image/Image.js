import classNames from "classnames";
import { getS3BaseUrl } from "@/utils/s3Helpers";
import NextImage from "next/image";

const Image = (props) => {
  const { src, size, variant, alt, lofiSrc } = props;
  const { width, height } = size;

  const variants = {
    grayscale: "grayscale",
  };
  return (
    <NextImage
      className={classNames("rounded-lg shadow-lg filter", variants[variant])}
      alt={alt}
      src={`${getS3BaseUrl()}/${src}`}
      placeholder="blur"
      blurDataURL={`${getS3BaseUrl()}/${lofiSrc}`}
      width={width}
      height={height}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
};

export default Image;
