import React from "react";

const ListGroup = props => {
  const { onGenreSelect, items, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      <li
        className="list-group-item"
        onClick={() => onGenreSelect("all-genres")}
      >
        All Genres
      </li>
      {items.map(item => {
        return (
          <li
            className="list-group-item"
            key={item[valueProperty]}
            onClick={() => onGenreSelect(item[textProperty])}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
