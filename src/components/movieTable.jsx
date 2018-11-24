import React, { Component } from "react";
import Like from "./commons/like";
import Table from "./commons/table";

class MovieTable extends Component {
  //moved this logic out of Movies component,
  //so we dont have to replicate this logic in other components
  //we just return the sortColumn object and
  //the other component(i.e. Movie) will re-render accordingly
  //MOVED to tableHeader.jsx
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStocks", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.like} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MovieTable;
