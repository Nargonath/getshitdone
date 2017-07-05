import React, { Component } from 'react';
import { func, shape, string } from 'prop-types';

import { zeroPad } from 'services/string';
import { Button, Counter, TaskName } from './Timer.style';

class Timer extends Component {
  constructor(props) {
    super(props);

    const { task: { duration, name } } = props;
    const [hours, minutes] = duration.split(':');
    this.state = {
      seconds: Number(hours) * 3600 + Number(minutes) * 60,
      name,
    };
  }

  componentDidMount() {
    this.startTick();
  }

  componentWillUnmount() {
    this.stopTick();
  }

  tick() {
    this.setState(({ seconds, name }) => {
      if (seconds === 0) {
        this.showNotification(name);
      }

      return { seconds: seconds - 1 };
    });
  }

  showNotification(taskName) {
    if (!("Notification" in window)) {
      return null;
    }

    if (Notification.permission === 'granted') {
      new Notification(`${taskName} is over!`);
    }
  }

  startTick = () => {
    this.setState({
      timerID: setInterval(
        () => this.tick(),
        1000
      ),
    });
  };

  stopTick = () => {
    clearInterval(this.state.timerID);
    this.setState({ timerID: null });
  }

  formatCount() {
    const op = this.state.seconds < 0 ? '- ' : '';
    const totalSec = Math.abs(this.state.seconds);
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec - hours * 3600) / 60);
    const seconds = totalSec - (hours * 3600 + minutes * 60);
    return `${op}${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`;
  }

  render() {
    return (
      <div>
        <TaskName>{this.state.name}</TaskName>
        <Counter>{this.formatCount()}</Counter>

        {this.state.timerID !== null ?
          <Button type="button" onClick={this.stopTick}>Stop</Button>
        :
          <div>
            <Button type="button" onClick={this.startTick}>Restart</Button>
            <Button type="button" onClick={this.props.onCancel}>Cancel</Button>
          </div>
        }

      </div>
    );
  }
}

Timer.propTypes = {
  task: shape({
    name: string.isRequired,
    duration: string.isRequired,
  }).isRequired,
  onCancel: func.isRequired,
};

export default Timer;
