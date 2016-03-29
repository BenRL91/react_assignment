import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/nyantocat.gif"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/welcometocat.png"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/filmtocat.png"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/privateinvestocat.jpg"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/gobbleotron.gif"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/maxtocat.gif"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/mummytocat.gif"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/daftpunktocat-thomas.gif"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/spidertocat.png"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/stormtroopocat.png"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/heisencat.png"/>
        </div>
        <div className={this.props.container}>
          <img src="https://octodex.github.com/images/grim-repo.jpg"/>
        </div>
      </div>
    );
  }
}
