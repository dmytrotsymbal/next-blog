import "@/styles/globals.scss";
import GlobalLayout from "@/components/GlobalLayout";

const App = ({ Component, pageProps }) => (
  <GlobalLayout>
    <Component {...pageProps} />
  </GlobalLayout>
);

export default App;
