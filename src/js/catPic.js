import React from 'react';

export default class Octo extends React.Component {
  render(){
    return (
      <div className='octo'>
        <img src={this.props.url}/>
      </div>
    )
  }
}
