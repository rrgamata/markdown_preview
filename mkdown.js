'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
  
    return e(
      'h1',
      { onClick: () => this.setState({ liked: true }) },
      'Hello World!'
    );
  }
  
}


const domContainer = document.querySelector('#app');
ReactDOM.render(e(LikeButton), domContainer);