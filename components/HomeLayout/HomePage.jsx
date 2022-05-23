import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Video from "./Video";
import s from "./homepage.module.scss";
import System from "./System";
import TryIt from "./TryIt";

function HomePage() {
  return (
    <main className={s.home}>
      <div className={s.banner}>
        <Navbar />
        <Hero />
      </div>
      <Video />
      <System />
      <TryIt />
    </main>
  );
}

export default HomePage;
