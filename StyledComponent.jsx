import React from "react";
import styled from "styled-components";

const StyledComponent = () => {
  let Btn = styled.button`
    color: #fff;
    background-color: #111;
  `;
     let Btn2 = styled.button`
       color: #fff;
       background-color: red;
       border:none;
       border: 2px solid red;
       padding: 2px 5px;
       background: transparent ;
     `;
  return (
    <section>
      <Btn>StyledComponent</Btn>
      <button className="styles">another </button>
      <Btn2>one more</Btn2>
    </section>
  );
};

export default StyledComponent;
