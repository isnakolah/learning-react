import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Oladidi" />
    </div>
  );
}

export default App;
