import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import GlobalStyle from "../../style/GlobalStyles";
import Checkout from "./Checkout";
import Home from './Home';

const App = () => {
    return(
    <>
    <GlobalStyle/>   
    <Router>
        <Route exact path = '/'>
            <Home></Home>
        </Route>
        <Route exact path = '/checkout'>
            <Checkout></Checkout>
        </Route>
    </Router>
    </>
    )
}

export default App