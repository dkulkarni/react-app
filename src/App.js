import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { currentEvent: '---' }
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ currentEvent: e.type });
  }

  render() {
    return(<div>
      <textarea
        onKeyPress = {this.update}
        onCut = {this.update}
        onCopy = {this.update}
        onPaste = {this.update}
        cols="30"
        rows="10" />
      <h1>{this.state.currentEvent}</h1>
    </div>);
  }
}

export default App;
