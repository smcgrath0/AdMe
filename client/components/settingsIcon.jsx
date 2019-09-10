import React from 'react';

export default class SettingsIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStatus: false
    };
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }

  handleHoverOn() {
    this.setState({
      hoverStatus: true
    });
  }

  handleHoverOff() {
    this.setState({
      hoverStatus: false
    });
  }

  render() {
    let color = '#242038';
    if (this.state.hoverStatus) {
      color = '#EEEEEE';
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" onMouseOver={() => { this.handleHoverOn(); }} onMouseLeave={() => { this.handleHoverOff(); }} viewBox="0 0 100 125">
        <path className="st0" d="M90 39h-2.4c-1.2 0-2.4-.8-2.8-1.9-.2-.6-.4-1.1-.7-1.7-.5-1.1-.2-2.4.6-3.2l1.9-1.9c2.6-2.7 2.6-7 0-9.7l-6.5-6.7c-1.3-1.4-3.1-2.1-5-2.1s-3.7.8-5 2.1l-1.5 1.6c-.9.9-2.2 1.2-3.4.6-.4-.2-.9-.4-1.3-.6-1.1-.5-1.9-1.6-1.9-2.8V10c0-3.8-3.2-7-7-7h-9c-3.8 0-7 3.2-7 7v2.4c0 1.2-.8 2.4-1.9 2.8-.6.2-1.1.4-1.7.7-1.1.5-2.4.2-3.2-.6l-1.9-1.9c-2.7-2.6-7-2.6-9.7 0l-6.7 6.5c-1.4 1.3-2.1 3.1-2.1 5s.8 3.7 2.1 5l1.6 1.5c.9.9 1.2 2.2.6 3.4-.2.4-.4.9-.6 1.3-.5 1.1-1.6 1.9-2.8 1.9H10c-3.8 0-7 3.2-7 7v9c0 3.8 3.2 7 7 7h2.4c1.2 0 2.4.8 2.8 1.9.2.6.4 1.1.7 1.6.5 1.1.2 2.4-.6 3.2l-1.9 1.9c-2.6 2.7-2.6 7 0 9.7l6.5 6.7c1.3 1.4 3.1 2.1 5 2.1s3.7-.8 5-2.1l1.5-1.5c.9-.9 2.3-1.2 3.5-.7.4.2.9.4 1.3.6 1.1.5 1.9 1.6 1.9 2.8V90c0 3.8 3.2 7 7 7h9c3.8 0 7-3.2 7-7v-2.4c0-1.2.8-2.3 1.9-2.8l1.5-.6c1.1-.5 2.4-.2 3.3.6l1.7 1.7c1.3 1.3 3.1 2.1 4.9 2.1s3.6-.7 4.9-2.1l6.6-6.5c1.3-1.3 2.1-3.1 2.1-4.9 0-1.9-.7-3.6-2.1-5l-1.7-1.7c-.4-.4-.9-.6-1.4-.6-1.1 0-2 .9-2 2 0 .5.2 1 .6 1.4l1.7 1.7c1.2 1.2 1.2 3.1 0 4.2l-6.6 6.6c-1.2 1.1-3.1 1.1-4.2 0L70.5 82c-2-2-5.1-2.6-7.7-1.5-.4.2-.9.4-1.3.5-2.7 1-4.5 3.6-4.5 6.5V90c0 1.6-1.4 3-3 3h-9c-1.6 0-3-1.4-3-3v-2.7c0-2.8-1.7-5.4-4.4-6.5-.4-.2-.8-.3-1.2-.5-2.7-1.2-5.8-.6-7.9 1.5L27 83.4c-.6.6-1.3.9-2.2.9-.8 0-1.6-.3-2.2-.9l-6.5-6.7c-1.1-1.2-1.1-3 0-4.2l1.9-1.9c2-2 2.5-5 1.4-7.6l-.6-1.5c-1-2.7-3.6-4.5-6.5-4.5H10c-1.6 0-3-1.4-3-3v-9c0-1.6 1.4-3 3-3h2.7c2.9 0 5.4-1.7 6.5-4.4.2-.4.3-.8.5-1.2 1.2-2.7.6-5.8-1.5-7.9L16.6 27c-.6-.6-.9-1.3-.9-2.2 0-.8.3-1.6.9-2.2l6.7-6.5c1.2-1.1 3-1.1 4.2 0l1.9 1.9c2 2 5 2.5 7.6 1.4l1.5-.6c2.7-1 4.5-3.6 4.5-6.5V10c0-1.6 1.4-3 3-3h9c1.6 0 3 1.4 3 3v2.7c0 2.9 1.7 5.4 4.4 6.5.4.2.8.3 1.2.5 2.7 1.2 5.8.6 7.9-1.5l1.5-1.6c.6-.6 1.3-.9 2.2-.9.8 0 1.6.3 2.2.9l6.5 6.7c1.1 1.2 1.1 3 0 4.2L82 29.4c-2 2-2.5 5-1.4 7.6l.6 1.5c1 2.7 3.6 4.5 6.5 4.5H90c1.6 0 3 1.4 3 3v9c0 1.6-1.4 3-3 3h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2c3.8 0 7-3.2 7-7v-9c0-3.8-3.2-7-7-7z" fill={color} />
        <path className="st0" d="M50 40c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill={color} />
        <path className="st0" d="M50 24c-14.3 0-26 11.7-26 26s11.7 26 26 26 26-11.7 26-26-11.7-26-26-26zm0 48c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z" fill={color} />
      </svg>
    );
  }
}
