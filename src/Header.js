import React from 'react';
import {Stats} from './Stats';

// function component 만드는 법
// 1. 첫글자가 대문자
// 2. React Elemement를 리턴
export const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <Stats players={props.players}/>
      <h1 className="h1">{props.title}</h1>
    </header>
  );
}