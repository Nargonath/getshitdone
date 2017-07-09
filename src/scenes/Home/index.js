import React, { Component } from 'react';

import logo from './logo.svg';
import TimerForm from 'components/TimerForm';
import Timer from 'components/Timer';
import Footer from 'components/Footer';
import { Root, Logo, LogoCtn, Title } from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { task: null };
  }

  componentDidMount() {
    if (!('Notification' in window)) {
      return null;
    }

    if (Notification.permission !== 'denied') {
      Notification.requestPermission(permission => {
        if (!('permission' in Notification)) {
          Notification.permission = permission;
        }
      });
    }
  }

  onTaskCreation = task => {
    this.setState({ task });
  };

  onTaskCancel = () => {
    this.setState({ task: null });
  };

  render() {
    return (
      <Root>
        <LogoCtn>
          <Logo src={logo} alt="getshitdone logo timer task" />
          <Title>Get shit done</Title>
        </LogoCtn>

        {this.state.task === null
          ? <TimerForm onValidate={this.onTaskCreation} />
          : <Timer task={this.state.task} onCancel={this.onTaskCancel} />}

        <Footer />
      </Root>
    );
  }
}

export default Home;
