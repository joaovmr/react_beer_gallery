import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Checkout from "./Checkout";
import Home from './Home';


const App = () => {
    return(
    <Router>
        <Route exact path = '/'>
            <Home></Home>
        </Route>
        <Route exact path = '/checkout'>
            <Checkout></Checkout>
        </Route>
    </Router>
    )
}

export default App