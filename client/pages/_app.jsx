import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import { Wrapper } from "../components";
import Facebook from "../components/Facebook";
import TawkTo from "../components/TawkTo";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Facebook />
        <Component {...pageProps} />
        <TawkTo />
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
