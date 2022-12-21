import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center relative">
        <Image
          className="filter brightness-75 rounded-md shadow-md"
          src="https://hildy-site.s3.us-west-2.amazonaws.com/7F1EA237-8468-4E03-A233-B31B2A262618.jpeg"
          alt="Merry Christmas from MountainView"
          width="500"
          height="500"
        />
        <h1 className="text-4xl text-white font-light absolute top-5">
          Jake&apos;s House
        </h1>
      </div>
      <h2 className="my-3 text-2xl text-white font-light">Welcome!</h2>
      <p className="text-sm text-white mb-6">
        This site is for all my friends! Come checkout some of our photos and
        see the cool lighting controls I&apos;ve been working on. Check out the
        areas below!
      </p>
      <div className="flex gap-2">
        <Link href="/photo" className="border p-3 rounded-sm">
          Photo Albums
        </Link>
        <Link href="/lighting" className="border p-3 rounded-sm">
          Lighting Controls
        </Link>
      </div>
    </>
  );
};

export default HomePage;
