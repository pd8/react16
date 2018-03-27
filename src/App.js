import React, { Component } from 'react';
import PropTypes from 'prop-types';    
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  
  render() {
    const user = 'Pip';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome user={user} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle} >Toggle</button>
        {
          this.state.toggle && (
            <p>
              This should show and hide
            </p>
          )
        }
      </div>
    );
  }
}

function Welcome({ user }) {
  return (
    <h1 className="App-title">Welcome to React, {user}</h1>
  );
}

Welcome.defaultProps = {
  user: 'unknown person...'
};

Welcome.propTypes = {
  user: PropTypes.string
};

export default App;
