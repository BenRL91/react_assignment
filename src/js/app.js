import React from 'react';
import Octo from './catpic';

export default class App extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {catpics.map(url => <Octo url={url}/>)}
      </div>
    );
  };
};

const catpics = [
"https://octodex.github.com/images/nyantocat.gif",
"https://octodex.github.com/images/welcometocat.png",
"https://octodex.github.com/images/filmtocat.png",
"https://octodex.github.com/images/privateinvestocat.jpg",
"https://octodex.github.com/images/gobbleotron.gif",
"https://octodex.github.com/images/maxtocat.gif",
"https://octodex.github.com/images/mummytocat.gif",
"https://octodex.github.com/images/daftpunktocat-thomas.gif",
"https://octodex.github.com/images/spidertocat.png",
"https://octodex.github.com/images/stormtroopocat.png",
"https://octodex.github.com/images/heisencat.png",
"https://octodex.github.com/images/grim-repo.jpg"
]
