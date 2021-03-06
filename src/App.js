import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Deshboard from "./pages/Deshboard/Deshboard/Deshboard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Register from "./pages/Register/Register";
import ProductDetals from "./pages/ProductDetals/ProductDetals";
import DisplayProductAll from "./pages/DisplayProductAll/DisplayProductAll";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/deshboard">
            <Deshboard></Deshboard>
          </PrivateRoute>

          <PrivateRoute path="/productdetals/:Productid">
            <ProductDetals></ProductDetals>
          </PrivateRoute>

          <Route path="/show/all/product">
            <DisplayProductAll></DisplayProductAll>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
