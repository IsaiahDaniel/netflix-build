import React, { useState, useEffect } from "react";
import { instance as axios, requests } from "../../config";
import Row from "../../components/Row/Row";

import { useDispatch, useSelector } from "react-redux";

import "./home.css";
import { getMovies } from "../../features/movies/moviesSlice";
import Loader from "../../components/Indicators/Loader";

const Home = () => {
  const { movies, isLoading, isError, message } = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const truncate = (string, n) =>
    string?.length > 150 ? string.substring(0, 100) + " ..." : string;

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line 
  }, [dispatch]);

  if(isLoading){
    return <Loader />
  }


  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          //height: "60vh"
        }}
        className="home"
      >
        <div className="home__wrapper">
          <h2 className="home__title">{movie?.name || movie?.original_name}</h2>
          <div className="home__buttons">
            <button className="home__button">Play</button>
            <button className="home__button">My List</button>
          </div>
          { movie?.overview && (
            <p>{truncate(`${movie?.overview}`, 150)}</p>
          )} 
        </div>
        <div>
          <div className="home--fadeBottom" />
        </div>
      </div>

      <div style={{ paddingLeft: "30px" }}>
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetfixOriginals}
          isLarge
        />
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated now" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentries} />
      </div>
    </>
  );
};

export default Home;
