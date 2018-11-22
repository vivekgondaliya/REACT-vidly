import React, { Component } from "react";
import TableHeader from "./commons/tableHeader";
import TableBody from "./commons/tableBody";

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
    { key: "like" },
    { key: "delete" }
  ];
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={movies}
          columns={this.columns}
          onDelete={onDelete}
          onLike={onLike}
        />
      </table>
    );
  }
}

export default MovieTable;
