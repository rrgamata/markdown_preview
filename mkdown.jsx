vars
const projectName = 'markdown-previewer';

class Hello extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h1>Hello World!</h1>
      </div>
    );
  }
};

ReactDOM.render(<Hello />, document.getElementById('app'));