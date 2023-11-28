import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {MainRoutesPage} from "./AppStyledComponents"
import Store from "./components/Store"
import Orders from "./components/Orders"
import Analytics from "./components/Analytics"
import Header from "./components/Header"
function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoutesPage>
          <Header/>
          <Routes>
            <Route exact path = "/" element = {<Orders/>}></Route>
            <Route exact path = "/store" element = {<Store/>}></Route>
            <Route exact path = "/analytics" element = {<Analytics/>}></Route>
          </Routes>
        </MainRoutesPage>
      </BrowserRouter>
    </>
  );
}

export default App;
