import React, { useState } from "react";

const FilterByDates = ({ setQuery }) => {
  return (
    <select
      className="bg-blue-950 text-white outline-none border-none rounded-md w-full my-3 p-3 md:p-2 md:w-max"
      onChange={(e) => setQuery(String(e.target.value))}
    >
      <option hidden>Filter By Date</option>
      <option value="20-1-1970">20-1-1970</option>
      <option value="21-1-1970">21-1-1970</option>
    </select>
  );
};

export default FilterByDates;
