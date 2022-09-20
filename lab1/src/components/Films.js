import React from "react";
import filmData from "../data/ListOfFilms";

export default function Films() {
  return (
    <>
      <div className="page-outer">
        <h1 className="page-title">List of films</h1>
        <div className="container">
          {filmData.map((row, index) => (
            <div key={row.id} className="movie-container">
              <img
                src={row.image}
                alt={"Image for " + row.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h1 className="movie-title">{row.title}</h1>
                <p>Year: {row.year}</p>
                <p>Nation: {row.nation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
