import Link from "next/link";
import Image from "next/image";

const AlbumPage = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-light mb-4">Photo Albums</h1>
        <div>Photos here</div>
      </div>
    </>
  );
};

export default AlbumPage;
