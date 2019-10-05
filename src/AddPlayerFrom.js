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
    this.props.addPlayer(this.state.value);
    this.setState({value:''});
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input className='input' type='text' placeholder="enter a Player's name"
               value={this.state.value} onChange={this.handleValueChange}/>
        <input className='input' type='submit' value='Add Player' />
      </form>
    );
  }
}