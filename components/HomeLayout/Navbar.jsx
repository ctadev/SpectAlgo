import Image from "next/image";
import s from "./navbar.module.scss";
import logo from '../../public/images/algologo.png'

function Navbar() {
  return (
    <nav className={s.navbar}>
      <section className={s.logo_container}>
        <Image src={logo} height={44.96} width={262} alt="logo"/>
      </section>
      <section className={s.menus}>
        <ul>
          <li>Features</li>
          <li>Docs</li>
          <li>Pricing</li>
          <li>Discord</li>
        </ul>

        <div className={s.btns_container}>
          <button className={s.signup_btn}>Sign Up</button>
          <button className={s.login_btn}>Login</button>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
