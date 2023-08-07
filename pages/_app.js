import "@/styles/globals.scss";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Plus+Jakarta+Sans:wght@300;400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
