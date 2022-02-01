import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          Contact-Directory
        </div>
        <button> ADD </button>
        <div>
          <span> Name </span>
          <br />
          <span> Phone </span>
        </div>
      </div>
    );
  }
}

export default App; 