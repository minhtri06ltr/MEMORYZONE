import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import { Wrapper } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
