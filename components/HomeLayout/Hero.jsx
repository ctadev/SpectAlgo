import React from "react";
import arrow from "../../public/images/arrow-circle-right.png";
import Image from "next/image";
import s from "./hero.module.scss";
import trade from "../../public/images/hero.png";
import btnArrow from "../../public/images/arrow.png";
import bottomArrow from "../../public/images/Ellipse.png";

function Hero() {
  return (
    <main className={s.hero}>
      <section className={s.leftside}>
        <div className={s.enhancing}>Enhancing</div>
        <h1>Traders with Software.</h1>
        <p>
          Leverage Data Analytics and Years of Trading to tap into the kind of
          knowledge with software that is only accessible to the best. Get on
          the path to profitability.
        </p>
        <div className={s.btnContainer}>
          <button>
            Get Free Trial
            <Image src={arrow} alt="arrow" height={26} width={26} />
          </button>
          <div className={s.btnArrow}>
            <Image
              src={btnArrow}
              layout="fixed"
              alt="arrow"
              height={90}
              width={90}
            />
          </div>
        </div>
      </section>
      <section className={s.rightside}>
        <Image src={trade} alt="" />
        <div className={s.bottomArrow}>
          <Image
            src={bottomArrow}
            layout="fixed"
            alt="arrow"
            height={91}
            width={819}
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;
