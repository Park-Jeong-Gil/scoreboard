import React from 'react';
import {addPlayer} from "./redux/actions";
import {connect} from "react-redux";

class AddPlayerFrom extends React.Component {

  textInput =React.createRef() ;

  handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const player = document.getElementById("player");
    console.log(form.checkValidity());
    console.log(player.validity.valid);

    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form id='form' className='form' onSubmit={this.handleSubmit} noValidate>
        <input id='player' ref={this.textInput} className='input' type='text'
               placeholder="enter a Player's name" required/>
                                                  {/*// required 입력란이 값이 없을때 submit X*/}
        <input className='input' type='submit' value='Add Player' />
      </form>
    );
  }
}

// publish: (액션을 디스패치하는) 펑션을 props 로 매핑하기
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 펑션
  addPlayer: (name) => dispatch(addPlayer(name))
})

// 문법적으로는 파라메터를 차례대로 넣는 커링 펑션
// 결과적으로 만드는것은 App을 입력으로해서 새로운 HoC 컴포넌트를 만든다.
export default connect(null, mapActionToProps)(AddPlayerFrom);