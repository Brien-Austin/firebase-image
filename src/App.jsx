import React from "react";
import { useState } from "react";
import { imageStorage } from "./firebase.config";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const App = () => {
  const [img, setImg] = useState("");
  const [txt, setTxt] = useState("");

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const imgs = ref(imageStorage, `Imgs${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        console.log(val);
      });
    });
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
