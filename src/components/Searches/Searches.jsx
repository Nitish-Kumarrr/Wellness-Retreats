import React, { useState } from "react";
import FilterByType from "./FilterByType";
import SearchByTitle from "./SearchByTitle";
import FilterByDates from "./FilterByDates";

const Searches = ({ setQuery }) => {
  return (
    <div className="w-11/12 mx-auto md:flex md:justify-between my-6 ">
      <div className="md:flex md:gap-10 md:w-max w-full">
        <FilterByDates setQuery={setQuery} />
        <FilterByType setQuery={setQuery} />
      </div>
      <SearchByTitle setQuery={setQuery} />
    </div>
  );
};

export default Searches;
