import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Image
            src="/headerLogo.jpg"
            width={90}
            height={80}
            alt="headerLogo"
          />
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
