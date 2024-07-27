import React from "react";

const SearchByTitle = ({ setQuery }) => {
  return (
    <div>
      <input
        className="  w-full outline-none border-none rounded-md my-3 p-3 shadow-md md:p-2 md:bg-blue-950 md:text-white "
        type="text"
        placeholder="Search retreats by title"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchByTitle;
