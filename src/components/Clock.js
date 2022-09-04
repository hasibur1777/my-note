import React from 'react';

class Clock extends React.Component {
  state = { date: new Date(), locale: 'bn-BD' };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tik(), 1000);
  }

  tik() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleButton = () => {
    if (this.state.locale === 'bn-BD') {
      this.setState({
        locale: 'eng-US',
      });
    } else {
      this.setState({
        locale: 'bn-BD',
      });
    }
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div className="text-center">
        <h4>
          <span className="text">
            TIME: {date.toLocaleTimeString(locale)}
          </span>
        </h4>
        <button
          className="btn btn-dark btn-sm"
          onClick={this.handleButton}
        >
          Change
        </button>
      </div>
    );
  }
}

export default Clock;
