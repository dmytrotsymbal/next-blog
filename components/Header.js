import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        <Image src="/headerLogo.jpg" width={90} height={80} alt="headerLogo" />

        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
