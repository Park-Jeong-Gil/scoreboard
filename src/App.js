import React from 'react';
import './App.css';
import {Header} from './Header';
import {Player} from './Player';
import AddPlayerFrom from "./AddPlayerFrom";
import {connect} from "react-redux";

// 클래스 컴포넌트
// 1. React.Component 상속, 2: render 오버라이딩해서 React Element를 리턴
// 3. 속성앞에 this

class App extends React.Component {
  maxId = 4;

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players} />

        {
          this.props.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} id={player.id} key={player.id}
                // 2. props로 콜백 펑션을 전달
                      removePlayer={this.handleRemovePlayer}
                      changeScore={this.handleChangeScore}
              />
            )
          })
        }
        <AddPlayerFrom/>
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
  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
    this.setState(prevState => {
      // const player = prevState.players.find(player => player.id === id);
      // player.score += delta;
      return {
        //player: [...prevState.players]
        player: prevState.players.map(player => {
          if (player.id === id) {
            player.score += delta;
          }
          return player;
        })
      }
    })
  }

  // handAddPlayer = (name) => {
  //   console.log('handAddPlayer', name);
  //   this.setState(prevState => {
  //
  //     // 배열에 추가가 먼저 이루어지고 딥카피로 배열 새로 추가
  //     // prevState.players.push({name : name, id: ++this.maxId, score: 0});
  //     // return{
  //     //   players:[ ...prevState.players ]
  //     // }
  //
  //     //원본 배열을 훼손하지 않고 새로운 배열을 생성하여 추가.
  //     const players = [ ...prevState.players];
  //     players.push({name, id: ++this.maxId, score: 0})
  //     return{
  //       players
  //     }
  //   });
  // }
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽이 store state
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);

