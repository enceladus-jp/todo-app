import React from "react";
import { Todo } from "../redux/reducers/TodoReducer";

type ListAreaComponentProps = {};

/**
 * TODO:
 * 1. connect store state to component
 * 2. add isDone state change behavior
 */

const ListAreaComponent = (props: ListAreaComponentProps) => {
  function renderListArea() {
    // Mock data source
    // FIXME: remove when ready to link to store
    const mockList: Todo[] = [
      { contentText: "hoge", isDone: false },
      { contentText: "foo", isDone: true }
    ];

    // array of li items
    //      p element
    //      checkbox element
    // Actual implementation
    const itemList = [];
    let i = 0;
    for (const mockItem of mockList) {
      if (!mockItem.contentText) {
        continue;
      }
      itemList.push(
        <li key={i}>
          <span>{mockItem.contentText}</span>
          <span>
            <input type="checkbox" checked={mockItem.isDone} />
          </span>
        </li>
      );
      i++;
    }

    return <ul>{itemList}</ul>;
  }
  return renderListArea();
};

export default ListAreaComponent;
