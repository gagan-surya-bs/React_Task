import React, { useRef, useState } from "react";

const File = () => {
  let [state, setstate] = useState(false);
  let [state2, setstate2] = useState(false);
  let [fileit, setfile] = useState("");
  let ref = useRef();
  let ref2 = useRef();
  let checkref = useRef();
  let checkref2 = useRef();
  let handleChange = e => {
    setstate(!state);
    if (state === false) {
      ref.current.value = "";
      
    }
  };
  let handleChange2 = e => {
    setstate2(!state2);
    if (state2 === false) {
      ref2.current.value = "";
    }
  };

  let handleUpload = e => {
    setfile(e.target.files[0]);
    setstate(!state);
    checkref.current.checked = true;
  };
  let handleUpload2 = e => {
    setfile(e.target.files[0]);

    checkref2.current.checked = true;
  };

  return (
    <section>
      <form>
        <div>
          {" "}
          <input type="file" ref={ref} onChange={handleUpload} />
          <input
            type="checkbox"
            ref={checkref}
            name="checkbox"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          <input type="file" ref={ref2} onChange={handleUpload2} />
          <input
            type="checkbox"
            ref={checkref2}
            name="checkbox"
            onChange={handleChange2}
          />
        </div>
      </form>
    </section>
  );
};

export default File;
