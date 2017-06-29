import React, { Component } from 'react';

import logo from './logo.svg';
import './Home.css';
import TimerForm from 'components/TimerForm';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onValidate = this.onValidate.bind(this);
  }

  onValidate(task) {
    console.log(task);
  }

  render() {
    return (
      <div className="Home">
        <TimerForm onValidate={this.onValidate}></TimerForm>
      </div>
    );
  }
}

export default Home;
