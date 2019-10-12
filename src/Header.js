import React from 'react';
import Stats from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

// function component 만드는 법
// 1. 첫글자가 대문자
// 2. React Elemement를 리턴
const Header = ({players, title}) => {
  //console.log(props);
  return (
    <header className="header">
      <Stats/>
      <h1 className="h1">{title}</h1>
      <Stopwatch/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}

Header.defaultProps = {
  title: 'Scoreboard'
}

// store의 state를 props 매핑
const mapStateToProps = (state) => ({
	// 왼쪽은 props, 오른쪽이 store state
	title: state.playerReducer.title
})
// 커링펑션, HoC
export default connect(mapStateToProps)(Header);