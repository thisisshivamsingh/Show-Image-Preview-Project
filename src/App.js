import React, { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState();
  function imageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  }

  function removeImage() {
    setImage();
  }
  return (
    <>
      <input
        id="file-input"
        accept="image/*"
        type="file"
        onChange={imageChange}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "200px",
          display: "none",
        }}
      />
      <div>
        <label for="file-input">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt="Thumb"
            style={{
              width: "100px",
              // border: "2px solid black",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </label>
        <button
          onClick={removeImage}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "200px",
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default App;
