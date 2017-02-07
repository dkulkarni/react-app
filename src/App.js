import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {val: 1000}
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('Hello Kitty');
    return <button onClick={this.update}>{this.state.val}</button>
  }
}

class Wrapper extends Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
