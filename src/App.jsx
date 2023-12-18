import React from "react";
import { useState } from "react";

const App = () => {
  const [img, setImg] = useState("");
  const [txt, setTxt] = useState("");

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <>
      <h1 className="text-xl underline font-bold text-center">
        Image uploader and generate link
      </h1>

      <div className="flex flex-col justify-center items-center mt-5">
        <input
          onChange={(e) => setTxt(e.target.value)}
          className="w-2/5  outline-none px-5 border h-10 border-slate-300"
          type="text"
        />
        <input
          onChange={(e) => {
            handleUpload(e);
          }}
          className="mt-5"
          type="file"
        />
      </div>
    </>
  );
};

export default App;
