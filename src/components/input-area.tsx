import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../redux/actions/Todo";

// Convenience purpose only: "props" contents
type InputAreaComponentProps = {
  createTodo: Function;
};

const InputAreaComponent = (props: InputAreaComponentProps) => {
  const [inputValue, updateInputValue] = useState("");

  function addTodo() {
    props.createTodo(inputValue);
  }
  function renderInputArea() {
    return (
      <div>
        <input
          value={inputValue}
          onChange={event => {
            updateInputValue(event.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            addTodo();
          }}
        >
          ADD
        </button>
      </div>
    );
  }
  return renderInputArea();
};

const mapDispatchToProps = (dispatch: Function) => ({
  createTodo: (textContent: string) => dispatch(createTodo(textContent))
});

/**
 * `connect` function creates a wrapper for the component (this case InputAreaComponent)
 *      so it can provide mapping to state updates and dispatch funtions to component props
 *
 *  expects 2 optional parameters
 *  1. mapStateToProps
 *  2. mapPropsToState
 */
export default connect(null, mapDispatchToProps)(InputAreaComponent);
