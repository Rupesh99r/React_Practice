import React, { useState, useEffect, useRef } from "react";

const Example = () => {
  const [text, setText] = useState();
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input
        type="text"
        id="text"
        name="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <br />
      <h1>Typing :{text}</h1>
      <br />
      <h1>Component rendered {renderCount.current} Times</h1>
    </>
  );
};
export default Example;
