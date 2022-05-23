import React from "react";
import s from "./video.module.scss";

function Video() {
  return (
    <main className={s.video}>
      <h5>SEE Aspectalgo™ IN ACTION</h5>
      <iframe
        width="1080"
        height="607"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </main>
  );
}

export default Video;
