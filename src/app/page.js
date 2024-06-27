import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-amber-100 flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-gray-700">
        Welcome to Food Recipe App
      </h1>
      <Link href="/recipie-list" className="bg-gray-700 text-white p-4 mt-4 rounded-lg hover:p-5 hover:font-bold">
        Recipes List
      </Link>
    </div>
  );
};

export default Home;
