import React, { useEffect } from "react";
import "./row.css";
import { instance as axios } from "../../config";
import { useState } from "react";

const Row = ({ title, isLarge, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(fetchUrl);
      // console.log(data.results)
      setMovies(data.results);
    };

    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className={`row__poster ${isLarge && 'large__poster'}`}>
        {movies &&
          movies.map((movie) => (
            <img
              src={`https://image.tmdb.org/t/p/original/${isLarge ? movie?.poster_path : movie?.backdrop_path}`}
              alt={movie.name}
              key={movie.id}
            />
          ))}
      </div>
    </div>
  );
};

Row.defaultProps = {
    isLarge: false
}

export default Row;
