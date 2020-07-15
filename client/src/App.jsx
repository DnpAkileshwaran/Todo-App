import React from "react";
import "./App.css";
import TodoEntry from './component/TodoEntry/TodoEntry';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>TODO</h3>
        <TodoEntry />
      </header>
    </div>
  );
};

export default App;
