import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import InputAreaComponent from "./components/input-area";
import ListAreaComponent from "./components/list-area";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* The area containing the input box and add button */}
        <InputAreaComponent />
        {/* The area containing the list of Todos */}
        <ListAreaComponent />
      </div>
    </Provider>
  );
}

export default App;
