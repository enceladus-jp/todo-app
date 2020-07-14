import React from "react";
import { Todo } from "../redux/reducers/TodoReducer";
import { deleteTodo } from "../redux/actions/Todo";
import { connect } from "react-redux";

type ListAreaComponentProps = {
  todo: Todo[];
  deleteTodo: Function;
};

/**
 * TODO:
 * 1. connect store state to component
 * 2. add isDone state change behavior
 */

const ListAreaComponent = (props: ListAreaComponentProps) => {

  function renderListArea() {
    // Mock data source
    const todoList: Todo[] = props.todo;

    // array of li items
    //      p element
    //      checkbox element
    // Actual implementation
    const itemList = [];
    for (let i = 0; i < todoList.length; i++) {
      if (!todoList[i].contentText) {
        continue;
      }
      itemList.push(
        <li key={i}>
          <span>{todoList[i].contentText}</span>
          <span>
            <input type="checkbox" defaultChecked={todoList[i].isDone} />
          </span>
          <button onClick={() => {props.deleteTodo(i)}}>Delete</button>
        </li>
      );
    }

    return <ul>{itemList}</ul>;
  }
  return renderListArea();
};

const mapStateToProps = (state: any) => {
  return {todo: state.todo};
}

const mapDispatchToProps = (dispatch: Function) => ({
  deleteTodo: (idx: number) => dispatch(deleteTodo(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAreaComponent);
