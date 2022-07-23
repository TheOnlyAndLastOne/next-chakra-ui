import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";

function lottiefile() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>

      <Player
        autoplay
        loop
        src="/static/lottiefiles/lf20_V827Et.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}

export default lottiefile;
