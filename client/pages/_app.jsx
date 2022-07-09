import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import {
  Wrapper,
  Facebook,
  TawkTo,
  Analytics,
} from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Analytics />
        {/* <Facebook /> */}
        <Component {...pageProps} />
        {/* <TawkTo /> */}
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
