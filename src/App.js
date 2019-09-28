import React from 'react';
import logo from './logo.svg';
import './App.css';

// function component 만드는 법
// 1. 첫글자가 대문자
// 2. React Elemement를 리턴
const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}
// 클래스 컴포넌트
// 1. React.Component 상속, 2: render 오버라이딩해서 React Element를 리턴
// 3. 속성앞에 this
class Counter extends React.Component {
  state = {
    score: 30,
    num: 1
  }

  increment = () => {
    console.log('increment');
    // this.state.score += 1; // UI 렌더링이 안된다.
    // 1. 반드시 setState로 상태 변경
    // 2. 비동기로 동작하므로 콜백 펑션으로 상태 변경을 하라.
    // 3. 머지된다. (오버라이트 된다.)
    this.setState((prevState) => ({
      score: prevState.score + 1
    }));
  }

  // 리액트 이벤트: 선언형 스타일: 함수 선언문을 우측에 배치
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.increment}> + </button>
      </div>
    );
  }
}

const Player = (props) => (
  <div className="player">
		<span className="player-name">
			{/*3. 콜백 펑션 호출*/}
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}> X </button>
      {props.name}
		</span>
    <Counter score={props.score}/>
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4}
    ]
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />

        {
          this.state.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} id={player.id} key={player.id}
                // 2. props로 콜백 펑션을 전달
                      removePlayer={this.handleRemovePlayer} />
            )
          })
        }
      </div>
    );
  }
  // 1. 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }
}

export default App;
