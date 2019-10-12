import React from 'react';
import axios from 'axios';

export class Heroes extends React.Component {

  componentDidMount() {
    this.getHeroes();
  }

  // async를 붙이면 비동기가 된다.
  // async 안에는 반드시 await가 한개 이상 있어야 한다.
  // await 뒤에는 반드시 promise객체가 와야 한다.
  // await 는 결과가 올때까지 기다렸다가 결과값을 리턴한다.

  async getHeroes(){
    // body.data에 원하는 결과값이 있다.
   const body = await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes?start_index=0&page_size=2')
   console.log(body.data);
  }

  render() {
    return (
      <div>
        Heroes works!
      </div>
    );
  }
}