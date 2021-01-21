import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login"
import InspectPage from "./pages/RiceInspect"
import Menu from "./pages/MainMenu"
import Setting from "./pages/RiceSetting"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Setting">
            <Setting />
          </Route>
          <Route path="/InspectPage">
            <InspectPage />
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
