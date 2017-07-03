import React, { Component } from 'react';

import logo from './logo.svg';
import './Home.css';
import TimerForm from 'components/TimerForm';
import Timer from 'components/Timer';
import Footer from 'components/Footer';
import { Root } from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { task: null };
  }

  onTaskCreation = (task) => {
    this.setState({ task });
  }

  onTaskCancel = () => {
    this.setState({ task: null });
  }

  render() {
    return (
      <Root>

        {this.state.task === null ?
          <TimerForm onValidate={this.onTaskCreation}></TimerForm>
        :
          <Timer task={this.state.task}
                 onCancel={this.onTaskCancel}></Timer>}

        <Footer></Footer>
      </Root>
    );
  }
}

export default Home;
