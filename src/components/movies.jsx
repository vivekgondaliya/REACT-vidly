import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log(movie);
    this.setState({
      movies: this.state.movies.filter(item => item._id !== movie._id)
    });
  };

  render() {
    const movies = this.state.movies || {};
    let movieCount =
      this.state.movies.length >= 0
        ? `There are ${this.state.movies.length} movies in the list.`
        : "There are no movies in the database";
    //return movies.map(movie => <div>{movie.title}</div>);

    return (
      <div>
        <p>{movieCount}</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
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
