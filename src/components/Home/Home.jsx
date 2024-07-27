import React, { useState } from "react";

import Searches from "../Searches/Searches";
import RetreatCard from "./RetreatCard";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="w-full">
        <div className="w-11/12 mx-auto bg-gray-300 mt-10 rounded-lg ">
          <div className="h-96 p-6 hidden md:block">
            <img
              className="h-3/4 w-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="title-img"
            />
            <p className="text-2xl mt-4 mb-2">Discover your Inner Peace</p>
            <p>
              Join us for the series of wellness retreats design to help you
              find tranquility and rejuvenation
            </p>
          </div>
        </div>
        <Searches setQuery={setQuery} />
      </div>
      <RetreatCard query={query} />
    </>
  );
};

export default Home;
