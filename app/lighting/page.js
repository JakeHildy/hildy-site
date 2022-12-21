import Link from "next/link";

const LightingPage = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-light">Lighting Controls</h1>
      </div>
    </>
  );
};

export default LightingPage;
