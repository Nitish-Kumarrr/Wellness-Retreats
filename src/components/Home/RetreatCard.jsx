import React from "react";
import { useState, useEffect } from "react";

const RetreatCard = ({ query }) => {
  const [retreatData, setRetreatData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const pagePerRetreat = 3;

  useEffect(() => {
    const fetchRetreats = async () => {
      const res = await fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats${window.location.search}`
      );

      const data = await res.json();
      setRetreatData(data);
    };
    fetchRetreats();
  }, []);

  const indexOfLastRetreat = currentPage * pagePerRetreat;
  const indexOfFirstRetreat = indexOfLastRetreat - pagePerRetreat;

  return (
    <>
      <div className="w-11/12 mx-auto  h-max md:flex md:gap-3 md:flex-wrap">
        {retreatData ? (
          retreatData
            .filter(({ title, description, condition, location, date }) => {
              return (
                title.toLowerCase().includes(query.toLowerCase()) ||
                description.toLowerCase().includes(query.toLowerCase()) ||
                condition.toLowerCase().includes(query.toLowerCase()) ||
                location.toLowerCase().includes(query.toLowerCase()) ||
                query.includes(String(`${new Date(date).getDate()}`))
              );
            })
            .slice(indexOfFirstRetreat, indexOfLastRetreat)
            .map(({ image, title, description, date, location, price, id }) => (
              <div
                className="md:w-[32%] my-4 bg-gray-300 p-3 rounded-lg"
                key={id}
              >
                <div>
                  <img
                    className=" md:w-[150px] md:h-[150px] h-[400px] w-full object-cover rounded-lg"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="h-max">
                  <h1 className="md:text-xl text-2xl font-bold ">{title}</h1>
                  <p className="text-sm">{description.slice(0, 80)}</p>
                  <p className="md:text-sm">
                    Date :{" "}
                    {`${new Date(date).getDate()}-${
                      new Date(date).getMonth() + 1
                    }-${new Date(date).getFullYear()}`}
                  </p>
                  <p className="md:text-sm">Location : {location} </p>
                  <p className="md:text-sm">Price : ${price} </p>
                </div>
              </div>
            ))
        ) : (
          <div className="text-center">Loading.....</div>
        )}
      </div>

      <div className="flex justify-center  gap-4 mt-10">
        {currentPage > 1 && (
          <button
            className="bg-blue-950 text-white p-3 rounded-lg"
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            previous
          </button>
        )}

        {currentPage * pagePerRetreat < retreatData.length && (
          <button
            className="bg-blue-950 text-white p-3 rounded-lg"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            next
          </button>
        )}
      </div>
    </>
  );
};

export default RetreatCard;
