import React from "react";
import axios from "axios";
import "./About.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [trendingmovies, setTrendingmovie] = useState([]);
  const [Favouritemovies, setFavouritemovie] = useState([]);
  const [page, setPagination] = useState(1);
  let movie = [];
  const plusPage = () => {
    setPagination(page + 1);
    if (page < 1) {
      return alert("the less number of pages is 1"), setPagination(page + 1);
    } else {
      getTrendingMovie(page);
    }
  };
  const minusPage = () => {
    setPagination(page - 1);
    if (page < 1) {
      return alert("the less number of pages is 1");
    } else {
      getTrendingMovie(page);
    }
  };
  async function getTrendingMovie(page = 1) {
    let { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${page}`
    );
    setTrendingmovie(data.results, data.page);
    console.log(data.page);
  }
  const AddFavourite = (index) => {
    trendingmovies.map((moviie, i) => {
      if (index == i) {
        console.log(movie);
      }
    });
  };
  useEffect(() => {
    getTrendingMovie();
  }, []);
  return (
    <>
      <div className="all">
        <div className="row w-100">
          {trendingmovies.map((movie, index) => (
            <div className="wrapper col-md-2">
              <img
                className="w-100"
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                alt=""
              />
              <div className="info bg-dark">
                <h6>{movie.title}</h6>
                <Link to={"http://www.rottentomatoes.com/m/" + movie.title}>
                  <button className="reviwes">reviwes</button>
                </Link>
                <h3 className="warning">
                  <i
                    onClick={() => {
                      AddFavourite(index);
                    }}
                    className="fa-regular fa-star"
                  ></i>
                  {movie.vote_average}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="fontAwesome">
          <button onClick={plusPage} className="buttom">
            Next Page
          </button>
          <button onClick={minusPage} className="buttom">
            Previous Page
          </button>
        </div>
      </div>
      <footer className="w-100 text-white text-center text-lg-left text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias.
              </p>
              <div className="mt-1">
                <Link
                  to="https://www.facebook.com/"
                  type="button"
                  className="btn btn-floating btn-warning btn-lg"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  type="button"
                  className="btn btn-floating btn-warning btn-lg"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link
                  type="button"
                  className="btn btn-floating btn-warning btn-lg"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  type="button"
                  className="btn btn-floating btn-warning btn-lg"
                >
                  <i className="fab fa-google-plus-g"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  id="formControlLg"
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="formControlLg">
                  Search
                </label>
                <div className="form-notch">
                  <div className="form-notch-leading"></div>
                  <div className="form-notch-middle"></div>
                  <div className="form-notch-trailing"></div>
                </div>
              </div>
              <ul className="fa-ul">
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="ms-2">Cairo, HN 10012, Eg</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="ms-2">
                    https://www.linkedin.com/in/sameh-salih-02179b271/
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="ms-2">01065369433</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-print"></i>
                  </span>
                  <span className="ms-2">01121446667</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>
              <table className="table text-center text-white">
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
}
