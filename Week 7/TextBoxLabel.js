import React, { useState } from "react";
import Happy from "./Happy.png";
import Sad from "./sad.png";
import Like from "./like.png";

function TextboxLabel() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    if (value === "Happy") setImage(Happy);
    else if (value === "sad") setImage(Sad);
    else if (value === "like") setImage(Like);
    else setImage(null);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type Happy, sad, or like"
      />
      <div>{image && <img src={image} alt={input} />}</div>
    </div>
  );
}

export default TextboxLabel;