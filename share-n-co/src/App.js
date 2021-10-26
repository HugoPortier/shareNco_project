import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/home";
import PageNotFound from "./page/pageNotFound";

import "./style/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notfound">
          <PageNotFound />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
