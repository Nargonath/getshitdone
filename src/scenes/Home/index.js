import React, { Component } from 'react';

import logo from './logo.svg';
import TimerForm from 'components/TimerForm';
import Timer from 'components/Timer';
import Footer from 'components/Footer';
import { Root, Logo } from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { task: null };
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      return null;
    }

    if (Notification.permission !== 'denied') {
      Notification.requestPermission((permission) => {
        if(!('permission' in Notification)) {
          Notification.permission = permission;
        }
      });
    }
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

        <Logo src={logo} alt="getshitdone logo timer task"/>
        <h1 hidden>Getshitdone</h1>

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
