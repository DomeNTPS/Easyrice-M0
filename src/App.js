import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login"
import InspectPage from "./pages/RiceInspect"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/InspectPage">
            <InspectPage />
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
