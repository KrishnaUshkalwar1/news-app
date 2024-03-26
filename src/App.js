import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
