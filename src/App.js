import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

import M1 from "./pages/content/M1";
import K1 from "./pages/content/K1";



function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">{<About />}</Route>
        <Route path="/contact">{<Contact />}</Route>
        <Route path="/post/M1">{<M1 />}</Route>
        <Route path="/post/K1">{<K1 />}</Route>
      </Switch>
    </Router >
  );
}

export default App;
