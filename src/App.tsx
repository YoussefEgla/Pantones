import React from "react";
import collections from "./seedcolors";
import Pantones from "./views/Pantones";

function App() {
  return (
    <div className="App">
      <Pantones {...collections[0]} />
    </div>
  );
}

export default App;
