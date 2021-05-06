import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home.js"
import House from "./components/house/house";
import Guild from "./components/guild/guild";
import Challenge from "./components/challenge/challenge";
import Vs from "./components/vs/vs";
import Etc from "./components/etc/etc";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/house" component={House} />
        <Route path="/guild" component={Guild} />
        <Route path="/vs" component={Vs} />
        <Route path="/challenge"component={Challenge}/>
        <Route path="/etc" component={Etc} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
