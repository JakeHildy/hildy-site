import Link from "next/link";

import { GridWrapper, ImageLinkCard } from "@/components/image";

const albums = [
  {
    id: "1",
    title: "Christmas 2022",
    img: "nova-loki-tree.jpeg",
    imgSize: { width: 3024, height: 4032 },
    lofiImg: "nova-loki-tree-lofi.jpeg",
    href: "/photo/christmas-2022",
  },
  {
    id: "2",
    title: "Engagement 2020",
    img: "karli-jake-eng-1.jpeg",
    imgSize: { width: 3024, height: 4032 },
    lofiImg: "nova-loki-tree-lofi.jpeg",
    href: "/photo/engagement-trip-2020",
  },
];

const PhotosPage = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-4xl font-light text-white">Photo Albums</h1>
        <GridWrapper>
          {albums.map((album) => (
            <ImageLinkCard cardData={album} key={album.id} />
          ))}
        </GridWrapper>
      </div>
    </>
  );
};

export default PhotosPage;
