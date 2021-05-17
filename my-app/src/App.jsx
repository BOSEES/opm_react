import {BrowserRouter, Switch, Route} from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import House from "./components/house/house.jsx";
import Guild from "./components/guild/guild.jsx";
import Challenge from "./components/challenge/challenge.jsx";
import Vs from "./components/vs/vs.jsx";
import Etc from "./components/etc/etc.jsx";
import { useState, useEffect } from "react";
import houseDB from "./db/house";
import challengeDB from "./db/challenge";
import guildDB from "./db/guild";
import vsDB from "./db/vs";
import etcDB from "./db/etc";

function App() {
  const [houseData, setHousedb] = useState([]);
  const [guildData, setGuild] = useState([]);
  const [vsData, setVs] = useState([]);
  const [challengeData, setChallenge] = useState([]);
  const [etcData, setEtc] = useState([]);
  

  useEffect(() => {
    setHousedb(houseDB);
    setGuild(guildDB);
    setChallenge(challengeDB);
    setEtc(etcDB);
    setVs(vsDB);
  },[]);
  return (
    <div className={styles.app}>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/house">
          <House data={houseData}/>
        </Route>
        <Route exact path="/guild">
          <Guild data={guildData}/>
        </Route>      
        <Route exact path="/vs">
          <Vs data={vsData}/>
        </Route>
        <Route path="/challenge">
          <Challenge data={challengeData}/>
        </Route>
        <Route path="/etc">
          <Etc data={etcData}/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;