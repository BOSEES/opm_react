import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import House from "./components/house/house.jsx";
import Guild from "./components/guild/guild.jsx";
import Challenge from "./components/challenge/challenge.jsx";
import Vs from "./components/vs/vs.jsx";
import Etc from "./components/etc/etc.jsx";
//house
import Dna from "./components/house/dna/dna.jsx";
import Party from "./components/house/party/party.jsx";
import Request from "./components/house/request/request.jsx";
import Training from "./components/house/training/training.jsx";
import Collection from "./components/house/collection/collection.jsx";
// guild
import Info from "./components/guild/info/info.jsx";
import Bond from "./components/guild/bond/bond.jsx";
import Game from "./components/guild/game/game.jsx";
import Mission from "./components/guild/mission/mission.jsx";
import Navi from "./components/guild/navi/navi.jsx";
import Guild_vs from "./components/guild/guild_vs/guild_vs.jsx";
// vs
import Tournament from "./components/vs/tournament/tournament";
import Battle from "./components/vs/battle/battle";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        {/* house */}
        <Route exact path="/house" component={House} />
        <Route path="/house/dna" component={Dna} />
        <Route path="/house/training" component={Training} />
        <Route path="/house/collection" component={Collection} />
        <Route path="/house/party" component={Party} />
        <Route path="/house/request" component={Request} />

        {/* guild */}
        <Route exact path="/guild" component={Guild} />
        <Route path="/guild/info" component={Info} />
        <Route path="/guild/mission" component={Mission} />
        <Route path="/guild/game" component={Game} />
        <Route path="/guild/bond" component={Bond} />
        <Route path="/guild/navi" component={Navi} />
        <Route path="/guild/guild_vs" component={Guild_vs} />
        
        {/* vs */}
        <Route exact path="/vs" component={Vs} />
        <Route path="/vs/battle" component={Battle} />
        <Route path="/vs/tournament" component={Tournament} />


        <Route path="/challenge"component={Challenge}/>
        <Route path="/etc" component={Etc} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
