import React from "react";
import s from "./tryit.module.scss";
import Image from "next/image";
import action from '../../public/images/action.png'
import symbol from "../../public/images/Symbols.png";

function TryIt() {
  return (
    <main className={s.tryit}>
      <section className={s.left}>
        <Image alt="" src={symbol} height={921} width={578} />
      </section>

      <section className={s.right}>
        <div className={s.image_container}>
          <Image alt="" src={action} height={14} width={14} />
          <p>Scales when used</p>
        </div>
        <h1>
          Try it <span>risk-free </span><br></br>and see for yourself
        </h1>
        <button>Sign Up Now</button>
      </section>
    </main>
  );
}

export default TryIt;
