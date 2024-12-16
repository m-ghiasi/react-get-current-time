import { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState(false);

  const handelCheck = (e) => {
    setShow(e.target.checked);
  };
  return (
    <label htmlFor="rules">
      <input type="checkbox" id="rules" onChange={handelCheck} />
      {show ? <p>hello</p> : null}
    </label>
  );
}
