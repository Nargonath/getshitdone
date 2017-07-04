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
    clearInterval(this.state.timerID);
  }

  tick() {
    this.setState(({ seconds }) => {
      if (seconds === 0) {
        clearInterval(this.state.timerID);
      }

      return {
        seconds: seconds > 0 ? seconds - 1 : 0,
      };
    });
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
    const totalSec = this.state.seconds;
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec - hours * 3600) / 60);
    const seconds = totalSec - (hours * 3600 + minutes * 60);
    return `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`;
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
          </div>}

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
