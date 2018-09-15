import React, { Component } from 'react';
import { render } from 'react-dom';

import './main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>Hello, World!</div>
    );
  }
}

render(<App />, document.querySelector('#killedbygoogle'));
