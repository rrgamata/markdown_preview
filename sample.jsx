

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
      return(
        <div>
        <h1>Hello World
        </h1></div>
      );
  }
  
}


//const domContainer = document.querySelector('#app');
ReactDOM.render(<Hello />, document.getElementById("app"));