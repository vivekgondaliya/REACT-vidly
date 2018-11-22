import React, { Component } from "react";
import Like from "./like";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { data, columns, onLike, onDelete } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{_.get(item, column.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
