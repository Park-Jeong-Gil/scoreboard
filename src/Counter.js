import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "./redux/actions";
import {connect} from "react-redux";

// 클래스 컴포넌트
// 1. React.Component 상속, 2: render 오버라이딩해서 React Element를 리턴
// 3. 속성앞에 this
class Counter extends React.Component {

  increment = (delta) => {
    this.props.changeScore(this.props.id, delta);
  }

  // 리액트 이벤트: 선언형 스타일: 함수 선언문을 우측에 배치
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.increment(-1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={() => this.increment(1)}> + </button>
      </div>
    );
  }
}

Counter.propTypes = {
  changeScore: PropTypes.func,
  id: PropTypes.number,
  score: PropTypes.number
}

// 액션을 디스패치하는 펑션을 props 매핑
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는)펑션
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

// 커링펑션, HoC
export default connect(null, mapActionToProps)(Counter);