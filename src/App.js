// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload. kjhsdjfh
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
    }
  }

  update(e) {
    console.log(e);
    this.setState({txt: e.target.value});
  }

  render() {
    return (
      <div>
        <Button>I <Heart /> <b>React</b></Button>
        <h1>{this.props.txt}</h1>
        <b>{this.state.txt}</b>
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  age: React.PropTypes.number.isRequired,
}

App.defaultProps = {
  txt: 'Default text'
}

const Button = (props) => <button>{props.children[0]}</button>

class Heart extends Component {
  render() {
    return <span>&hearts;</span>;
  }
}
export default App;
