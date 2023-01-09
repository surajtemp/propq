import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
