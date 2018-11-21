import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieTable from "./movieTable";
import Pagination from "./commons/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./commons/listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    listSize: 4,
    currentPage: 1
  };

  //back-end services are feteched here to avoid state prop being undefined on initial render
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    console.log(genre);

    // const tempMovies = [...this.state.movies];
    // this.setState({
    //   movies: tempMovies.filter(movie => movie.genre.name === genre)
    // });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const { listSize, currentPage, movies: allMovies, genres } = this.state;

    //return movies.map(movie => <div>{movie.title}</div>);
    if (movieCount === 0) return <p>There are no movies in the database</p>;

    //paginate util
    const movies = paginate(allMovies, currentPage, listSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onGenreSelect={this.handleGenreSelect}
            textProperty="name"
            valueProperty="_id"
          />
        </div>
        <div className="col-7">
          <p>There are {movieCount} movies in the list.</p>

          <MovieTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
          <Pagination
            totalMovies={movieCount}
            listSize={listSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
