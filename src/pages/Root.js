import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";

export class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Menu/>
        {/*패쓰와 반드시 일치 하는것이 아니라 시작하는 URL로 맵핑*/}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/heroes" component={Heroes}></Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}