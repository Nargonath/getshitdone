import React, { Component } from 'react';
import { func } from 'prop-types';

import Input from './Input';
import Submit from './Submit';

class TimerForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', duration: '00:00' };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.name === '' || this.state.duration === '00:00') {
      return;
    }

    this.props.onValidate(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Task name"
        />

        <Input type="time" name="duration" value={this.state.duration} onChange={this.handleChange} />

        <Submit type="submit" value="Start" />
      </form>
    );
  }
}

TimerForm.propTypes = {
  onValidate: func.isRequired,
};

export default TimerForm;
