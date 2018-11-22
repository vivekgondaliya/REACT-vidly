import React, { Component } from 'react';

//INTERFACE
//columns Object
//sortColumn
//onSort

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
          sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        else {
          sortColumn.path = path;
          sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
      };

    render() { 
        return (  );
    }
}
 
export default TableHeader;