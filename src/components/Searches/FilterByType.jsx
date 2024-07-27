import React from "react";

const FilterByType = ({ setQuery, setSearchUrl }) => {
  return (
    <div>
      <select
        className="bg-blue-950 text-white outline-none w-full border-none rounded-md my-3 p-3 md:p-2"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      >
        <option hidden>Filter by Type</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
    </div>
  );
};

export default FilterByType;
