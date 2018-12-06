import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  state = {};
  render() {
    const { totalMovies, listSize, currentPage, onPageChange } = this.props;

    let pagesCount = Math.ceil(totalMovies / listSize);
    //if only one page then no pagination links
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
      <nav aria-label="navigation">
        <ul className="pagination">
          {pages.map(page => {
            return (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  totalMovies: PropTypes.number,
  listSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
