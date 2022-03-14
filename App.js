import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  let [state, setstate] = useState(false);
  let [renderit, setrenderit] = useState("");

  let handleDelete = e => {
    setrenderit("delete");
    setstate(!state);
      console.log(renderit);
    //   setrenderit("")
  };
  //Do slowly
    let handleEdit = e => {
       setrenderit("edit");
    setstate(!state);
    console.log("edit");
  };
    let handleView = e => {
       setrenderit("view");
    setstate(!state);
    console.log("view");
  };
// give diffeent name
  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleView}>View</button>
      {state ? <Modal stateprop={handleEdit}
        renderprop={renderit} /> : ""}
    </div>
    //attach index.jsx in app

  );
};

export default App;
