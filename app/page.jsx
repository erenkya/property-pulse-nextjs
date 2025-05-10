import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen flex-col items-center align-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <Link href="/properties">Properties</Link>
    </div>
  );
};

export default HomePage;
