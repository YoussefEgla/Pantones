import React from "react";
import collections from "./utils/seedcolors";
import { collectionWithShades } from "./utils/shades";
import Pantones from "./views/Pantones";

function App() {
  return (
    <div className="App">
      <Pantones {...collectionWithShades(collections[0])} />
    </div>
  );
}

export default App;
