import React, { useRef, useState } from "react";
const Example = () => {
  const inputDom = useRef();
  const [text, setText] = useState();
  const focus = () => {
    inputDom.current.focus();
  };
  return (
    <>
      <input
        type="text"
              id="text"
              name="text"
            ref={inputDom}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <h3>Typing :{text}</h3>
      <br />
      <button onClick={focus}> focus</button>
    </>
  );
};
export default Example;
