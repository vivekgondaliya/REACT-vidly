import React from "react";

const ListGroup = ({
  onItemSelect,
  items,
  textProperty,
  valueProperty,
  selectedItem
}) => {
  return (
    <ul className="list-group">
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
