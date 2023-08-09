import { Container } from "@mui/material";
import styles from "../styles/Footer.module.scss";
import Heading from "./Heading";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Heading tag="h4" text={"Test NextJS project"} />
      </Container>
    </footer>
  );
};

export default Footer;
