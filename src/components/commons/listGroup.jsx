import React from "react";

const ListGroup = props => {
  const {
    onItemSelect,
    items,
    textProperty,
    valueProperty,
    selectedItem
  } = props;

  return (
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>
      {items.map(item => {
        return (
          <li
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
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
