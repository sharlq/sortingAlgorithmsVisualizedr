import "./style/main.css"
import React from 'react';
import Sort from'./components/sort';
import Nav from "./components/nav";
import 'fontsource-roboto';


function App() {
  return (
    
    <div className="App">
    <Nav />
    <Sort />
    </div>
  );
}

export default App;
