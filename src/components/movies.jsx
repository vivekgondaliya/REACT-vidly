import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieTable from "./movieTable";
import Pagination from "./commons/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./commons/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    listSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  //back-end services are feteched here to avoid state prop being undefined on initial render
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      listSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;
    // 1)filter
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(item => item.genre._id === selectedGenre._id)
        : allMovies;

    //2) sort
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    //3) paginate util
    const movies = paginate(sortedMovies, currentPage, listSize);

    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const {
      listSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    //return movies.map(movie => <div>{movie.title}</div>);
    if (movieCount === 0) return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col-7">
          <p>There are {totalCount} movies in the list.</p>

          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
