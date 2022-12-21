import Link from "next/link";

const PhotosPage = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-light">Photo Albums</h1>
      </div>
    </>
  );
};

export default PhotosPage;
