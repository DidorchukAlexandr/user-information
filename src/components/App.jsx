import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { GlobalStyle } from "./GlobalStyles";
import UsersPage from "../page/UsersPage/UsersPage";


function App() {
  return (
  <>
    <Provider store={store}>
        <BrowserRouter>
          <UsersPage />
          <GlobalStyle />
        </BrowserRouter>
    </Provider>
  </>
  );
}

export default App;
