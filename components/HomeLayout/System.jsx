import React from "react";
import s from "./system.module.scss";
import Image from "next/image";
import YM from "../../public/images/ymfilter.png";
import vector from "../../public/images/vector.png";
import play from "../../public/images/play.png";

function System() {
  return (
    <main className={s.system}>
      <section className={s.top}>
        <div className={s.left}>
          <h1>
            The most <span>advanced</span> System
          </h1>
          <p>
            AspectAlgo™ has created the most comprehensive set of tools for
            futures, forex, and the crypto market. We plug into your charts and
            reveal confluence in the market.
          </p>
          <button>Sign Up Now</button>
        </div>
        <div className={s.right}>
          <Image alt="" src={YM} height={486} width={668} />
        </div>

        <div className={s.divider}></div>
      </section>

      <section className={s.bottom}>
        <div className={s.left}>
          <Image alt="" src={vector} height={15} width={30} />
          <h3>Best Suite of Tools</h3>
          <p>
            Our System contain a comprehensive set of both simple and advanced
            strategies to make you profitable.
          </p>
        </div>

        <div className={s.right}>
          <Image alt="" src={play} height={20} width={20} />
          <h3>Easy to understand Education</h3>
          <p>
            Our straight to the point Education is easy-to-understand and
            contain all the information needed to trade with our system.
          </p>
        </div>
      </section>
    </main>
  );
}

export default System;
