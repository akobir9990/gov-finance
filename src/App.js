import React from "react";
import Appbar from "./components/appbar";

function App() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.onkeydown = function (e) {
    // disable F12 key
    if (e.keyCode === 123) {
      return false;
    }

    // disable I key
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      return false;
    }

    // disable J key
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      return false;
    }

    // disable U key
    if (e.ctrlKey && e.keyCode === 85) {
      return false;
    }
  };

  return (
    <div className="bg-scroll bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-fixed">
      <Appbar />
    </div>
  );
}

export default App;
