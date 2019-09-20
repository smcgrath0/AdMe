import React from 'react';
import AppContext from '../context';

export default class PortfolioIcon extends React.Component {
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

    let color = '#EEEEEE';
    if (this.state.hoverStatus) {
      color = '#000000';
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" onMouseOver={() => { this.handleHoverOn(); }} onMouseLeave={() => { this.handleHoverOff(); }} width='3rem' height='3rem' viewBox="0 0 100 100">
        <path d="M95 31.5c0-4.1-1-4.6-5.1-4.8-5.3-.3-10.5-.3-15.8-.6-2.2-.1-4.3-.3-6.6-.5 0-1.2 0-2 .1-2.9.2-5.3-1.5-7.7-6.8-9-2-.5-4.1-.9-6.2-1-5.6-.1-11.3-.1-16.9 0-3.2.1-5.2 1.9-5.7 5-.4 2-.4 4.2-.6 6.7-1.2 0-2.4-.1-3.6-.1-5.2 0-10.4-.3-15.5.1-5.1.5-6.5 2-6.8 6.8-.4 5.9-.5 11.7-.5 17.5 0 2.4 0 5 2.4 6.8.4.3.4 1 .5 1.6.2 4.8.5 9.5.6 14.3.1 3.2-.1 6.5-.1 9.7-.1 4.3 1.4 5.7 5.7 5.4 1.8-.1 3.6-.4 5.4-.4 15.9.1 31.7.3 47.6.5 6.7.1 13.3.4 20 .6 3.8.1 3.6.1 3.8-3.7.5-11.6-1.2-23.3 2.5-34.8 1.7-5.3 1.5-11.4 1.6-17.2zM40.7 16c5.8 0 11.6.1 17.4.6 5.2.4 7 2.8 6 6.9-.2.8-1 1.4-1.5 2.1-1.4-7.1-1.3-7.3-8.1-8.2-4.2-.6-8.6-.3-12.8-.2-3.2 0-4.6 1.9-4.6 4.9 0 .5 0 1-.1 1.4-.2.5-.6.8-1 1.2-.4-.4-1-.8-1.2-1.3-.9-4.8 1-7.4 5.9-7.4zm17.9 9.1c-6-.1-11.9-.3-17.9-.4-.7-3.8-.2-4.6 3.4-4.5 3.9.1 7.8.6 11.7.8 2.7 0 3.2 1.6 2.8 4.1zm28.6 57.5c0 .7-1.4 1.8-2.1 1.8-5 0-9.9-.3-14.9-.6-17.2-1-34.4-1.7-51.6-.7-2.1.1-4.2.2-6.3.2-.3-8.9-.6-17.5-.9-25.7 9 1.8 17.8 3.6 26.9 5.4-.1-.2.1 0 .1.2-.8 4.9-1.7 6.8 5.3 7.2 2.9.2 5.9 0 8.9 0 2.2 0 3.3-1.2 3.5-3.3.2-1.4.6-2.8.9-4.3 10.4-.7 20.7-1.5 30.9-5.9-.2 8.9-.4 17.3-.7 25.7zM41.6 62.8c2.2 3.2 5.3 2.5 8 2.9.4.1 1.2-.9 1.5-1.6.3-.8 0-1.7.1-2.6 1-6 1.1-6.1-4.9-6.1-1.2 0-2.4 1-3.7 1.6.1-.8.4-2 .4-3.2v-.4c2.6.5 8.9 1.5 11.2 1.6-.5 3.6-1 6.9-1.4 10.2-.2 1.6-1 2.2-2.4 2.2-3 0-6-.1-9.4-.2.3-1.7.4-2.8.6-4.4zm7.4-4.4c-.3 1.6-.6 2.8-.9 4.3-.9-.1-1.8-.1-2.7-.2-.4-3.6-.3-3.7 3.6-4.1zm42.8-24.7c-.6 5.9-1.3 11.8-2.1 17.6-.1.7-1.1 1.7-1.8 1.9-6.4 1.9-12.8 3.8-19.3 5.3-3.6.8-7.3.7-11.3 1 .2-1.7.5-3.1.7-4.5.2-1.7-.3-3.2-2.2-3.4-2.7-.4-10.2-1.8-12.9-1.8-1 0-2 1-2.9 1.6.4.3.8.7 1.2 1-.2.2-.4.4-.5.7-.7 1.9-1 3.8-1.5 5.7-10.1-.4-19.7-2.3-28.9-6.1-.8-.3-1.8-1.6-1.8-2.5-.2-6.5-.3-12.9-.2-19.4 0-.9 1.1-2.2 2-2.5 1.8-.6 3.7-.9 5.6-.8 24.2.8 48.4 1.7 72.6 2.4 2.9.2 3.5 1.7 3.3 3.8z" fill={color} />

      </svg>
    );
  }
}
PortfolioIcon.contextType = AppContext;
