import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h2>Dima</h2>
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
