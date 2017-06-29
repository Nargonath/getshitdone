import React, { Component } from 'react';
import { func } from 'prop-types';

class TimerForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', duration: '00:00' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.name === '' || this.state.duration === '00:00') {
      return;
    }

    this.props.onValidate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               name="name"
               value={this.state.name}
               onChange={this.handleChange}
               placeholder="Nom de la tâche"/>

        <input type="time"
               name="duration"
               value={this.state.duration}
               onChange={this.handleChange} />

        <input type="submit"
               value="Valider" />
      </form>
    );
  }
}

TimerForm.propTypes = {
  onValidate: func.isRequired,
};

export default TimerForm;
