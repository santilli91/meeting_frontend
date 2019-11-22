import React from 'react';
import {BrowserRouter  as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/hi"><Tmp/></Route>
            <Route component={NodeRoute}/>
          </Switch>
        </Router> 
    </div>
  );
}

const Tmp = () => (<>Hello<Link to="/article/test-page">TestPage</Link></>)

class NodeRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [{
        title: "Loading",
        created: 0
      }],
    }
    this.getNID = this.getNID.bind(this)
  }

  componentDidMount(prevProps) {
    this.getNID(this.props.location.pathname)
  }

  componentDidUpdate(prevProps) {
    if(this.props.location.pathname !== prevProps.location.pathname)
      this.getNID(this.props.location.pathname)
  }

  getNID(current_path) {
    fetch(`/api/get-content-id?path=${current_path}`)
      .then(response=>response.json())
      .then(content => this.setState({content}))
  }



  render() {
    if(this.state.content[0].status == 404)
      return <Tmp/>
    return <Display content={this.state.content}/>
  }
}


const Display = ({content}) => {

  return (
    <article>
      <h1>{content[0].title}</h1>
      <div className="date">Created On: {content[0].created}</div>
      {content.map((item,key) => {
        switch(item.type) {
          case "button_group":
            return <ButtonGroup key={key} content={item} />
          case "colored_bar":
            return <ColoredBar key={key} content={item} />
          default:
            return <div key={key}></div>
        }  
      })}
    </article>
  )
}

const ButtonGroup = (props) => (
  <div className="button-group"><ul>
    {[props.content.field_link.map((link,key) => {
      return <li key={key}><Button  item={link} /></li>
    })]}
  </ul></div>
) 

const Button = ({item}) => {
  const link = item.split(':')
  return <Link className="button" to={link[1]}>{link[0]}</Link>
}

const ColoredBar = () => (
  <div className="colored-bar">
    Colored Bar
  </div>
)


export default App;
