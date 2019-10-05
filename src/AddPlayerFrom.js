import React from 'react';

export class AddPlayerFrom extends React.Component {
  state={
    value: ''
  }
  handleValueChange = (e) =>{
    console.log(e);
    this.setState({value:e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const player = document.getElementById("player");
    console.log(form.checkValidity());
    console.log(player.validity.valid);

    this.props.addPlayer(this.state.value);
    this.setState({value:''});
  }

  render() {
    return (
      <form id='form' className='form' onSubmit={this.handleSubmit} noValidate>
        <input id='player' className='input' type='text' placeholder="enter a Player's name"
               value={this.state.value} onChange={this.handleValueChange} required/>
                                                  {/*// required 입력란이 값이 없을때 submit X*/}
        <input className='input' type='submit' value='Add Player' />
      </form>
    );
  }
}