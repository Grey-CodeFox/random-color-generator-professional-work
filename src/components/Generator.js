import React from "react";
import { useState } from "react";

export default function Generator() {
  const [clickValue, setClickValue] = useState("Hex");
  const [randomHexValue, setRandomHexValue] = useState("#ffffff");
  const [randomRGBValue, setRandomRGBValue] = useState("rgb (255, 255, 255)");

  const colorValues = "0123456789abcdef";

  const randomClickHandler = () => {
    if (clickValue === "Hex") {
      setRandomHexValue(randomHexGen(colorValues));
    } else if (clickValue === "Rgb") {
      setRandomRGBValue(randomRGBGen());
    }
  };

  //HEX VALUE SET
  const hexClicked = () => {
    // To handle click-once generate-once
    if (clickValue !== "Hex") {
      setRandomHexValue(randomHexGen(colorValues));
      setClickValue("Hex");
    }
  };

  //RGB VALUE SET
  const rgbClicked = () => {
    // To handle click-once generate-once
    if (clickValue !== "Rgb") {
      setRandomRGBValue(randomRGBGen());
      setClickValue("Rgb");
    }
  };

  //HEX random generated
  function randomHexGen(colorValues) {
    let tempHexGen = "#";
    for (let i = 0; i < 6; i++) {
      tempHexGen =
        tempHexGen + colorValues.charAt(Math.floor(Math.random() * 16));
    }

    return tempHexGen;
  }

  // RGB random generated
  function randomRGBGen() {
    let tempRGBGen = [];
    for (let i = 0; i < 3; i++) {
      tempRGBGen.push(Math.floor(Math.random() * 256));
    }

    let tempRandomRGB = `rgb(${tempRGBGen[0]},${tempRGBGen[1]},${tempRGBGen[2]})`;

    return tempRandomRGB;
  }

  //Adding style
  const myStyle = {
    backgroundColor: clickValue === "Hex" ? randomHexValue : randomRGBValue,
    width: "100%",
    height: "100vh",
  };

  return (
    <div style={myStyle}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={hexClicked}>Create Hex Color</button>
        <button onClick={rgbClicked}>Create RGB Color</button>
        <button onClick={randomClickHandler}>Generate Random Color</button>
      </nav>
      <h2 style={{ textAlign: "center" }}>{clickValue} Color</h2>
      <h2 style={{ textAlign: "center" }}>
        {clickValue === "Hex" ? randomHexValue : randomRGBValue}
      </h2>
    </div>
  );
}
