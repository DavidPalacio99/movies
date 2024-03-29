import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import requests from "../../services/requests";
import Row from "../../Components/Row/Row";
import Loading from "../../Components/loading/Loading";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="homeScreeen">
      <Navbar isHomeScreen />
      <Banner />
      {loading && <Loading />}
      <Row
        title="Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending movies"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Action movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Horror movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
