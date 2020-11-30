import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
import "./App.css";
import WebFinder from "./finder";

const store = createStore(reducer, applyMiddleware(thunk));

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <WebFinder></WebFinder>
      </Provider>
    </div>
  );
};

export default App;
