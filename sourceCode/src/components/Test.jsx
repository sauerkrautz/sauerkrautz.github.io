import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  const test = useRef();

  useEffect(() => {
    const element = test.current;
    element.onChange(() => {
      return setValue(element.textContent);
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-orange-500 flex justify-center items-center">
      {value}
      <div
        className="absolute w-2/5 h-2/5 bg-white"
        contentEditable="true"
        ref={test}
      >
        sometigas;dkjfaslkdfj a;sdfkj
      </div>
    </div>
  );
};

export default Test;
