import React from 'react'

const File2 = () => {
    let ref = useRef();
    let checkref = useRef();

     let handleChange = e => {
       setstate(!state);
       if (state === false) {
         ref.current.value = "";
       }
    };
    let handleUpload = e => {
      setfile(e.target.files[0]);
      setstate(!state);
      checkref.current.checked = true;
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
      </form>
    </section>
  );
}

export default File2