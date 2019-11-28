import axios from "axios";
import {
  GET_MOVIES_PENDING,
  GET_MOVIES_REJECTED,
  GET_MOVIES_RESOLVED,
  URL_MOVIE
} from "../routes/constants";

const getMoviesPending = () => ({ type: GET_MOVIES_PENDING });
const getMoviesResolved = payload => ({
  type: GET_MOVIES_RESOLVED,
  payload
});

const getMoviesRejected = () => ({
  type: GET_MOVIES_REJECTED,
  payload: "ERROR"
});

export const getMovies = () => {
  return dispatch => {
    dispatch(getMoviesPending());
    axios
      .get(URL_MOVIE)]``
      .then(({ data }) => {
        dispatch(getMoviesResolved(data.movie));
        // console.log("movies js=>>>", data.movie);
      })
      .catch(error => {
        console.dir(error);
        dispatch(getMoviesRejected());
      });
  };
};
