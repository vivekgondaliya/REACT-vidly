import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./commons/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    this.setState({
      movies: this.state.movies.filter(item => item._id !== movie._id)
    });
  };

  handleLike = movie => {
    //get all the movies from state
    const movies = [...this.state.movies];
    //get index of the movie to toggle 'like' property
    const index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
    this.setState({ movie });
  };

  render() {
    const movies = this.state.movies || {};
    const { length: movieCount } = this.state.movies;

    //return movies.map(movie => <div>{movie.title}</div>);
    if (movieCount === 0) return <p>There are no movies in the database</p>;

    return (
      <div>
        <p>There are {movieCount} movies in the list.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.like}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
