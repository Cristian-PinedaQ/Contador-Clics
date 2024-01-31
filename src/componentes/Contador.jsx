import React from "react";
import '../stylesheets/Contador.css';

function Contador({ numClics }) {
  return (
    <div className="Contador">
      {numClics}
    </div>
  );
}

export default Contador;