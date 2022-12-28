import Link from "next/link";

import Image from "./Image";

const ImageLinkCard = (props) => {
  const { cardData } = props;
  const { title, img, imgSize, lofiImg, href } = cardData;
  return (
    <Link
      className="relative rounded-md transition-transform hover:-translate-y-1 hover:scale-101"
      href={href}
    >
      <Image
        variant="grayscale"
        alt={title}
        src={img}
        lofiSrc={lofiImg}
        size={imgSize}
      />
      <h2 className="absolute top-1/3 w-full text-center font-fredericka text-3xl tracking-wide text-blue-300">
        {title}
      </h2>
    </Link>
  );
};

export default ImageLinkCard;
