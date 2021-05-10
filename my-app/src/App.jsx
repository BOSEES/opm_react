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
import houseDb from "./db/house";

function App() {
  const [housedb, setHousedb] = useState([]);
  // const [guild, setGuild] = useState([]);
  // const [vs, setVs] = useState([]);
  // const [challenge, setChallenge] = useState([]);
  // const [etc, setEtc] = useState([]);
  
  
  useEffect(() => {
    setHousedb(houseDb);
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
          <House data={housedb}/>
        </Route>
        <Route exact path="/guild">
          <Guild/>
        </Route>      
        <Route exact path="/vs">
          <Vs/>
        </Route>
        <Route path="/challenge">
          <Challenge/>
        </Route>
        <Route path="/etc">
          <Etc/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
