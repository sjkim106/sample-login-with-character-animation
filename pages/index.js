import { Provider, useSelector } from "react-redux";

import store from "../middleware/store/reducer";
import LoginComponent from "../component/login";

export default function Home() {
  return (
    <Provider store={store}>
      <LoginComponent></LoginComponent>
    </Provider>
  );
}
