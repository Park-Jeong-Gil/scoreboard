import React from 'react';

export class Counter extends React.Component {


  increment = (delta) => {
    this.props.changeScore(this.props.id, delta);
    // console.log('increment');
    // this.state.score += 1; // UI 렌더링이 안된다.
    // 1. 반드시 setState로 상태 변경
    // 2. 비동기로 동작하므로 콜백 펑션으로 상태 변경을 하라.
    // 3. 머지된다. (오버라이트 된다.)
    // this.setState((prevState) => ({
    //   score: prevState.score + 1
    // }));
  }

  // 리액트 이벤트: 선언형 스타일: 함수 선언문을 우측에 배치
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() =>this.increment(-1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={() =>this.increment(1)}> + </button>
      </div>
    );
  }
}