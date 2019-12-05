import React from 'react';
import {BrowserRouter  as Router,Switch,Route,Link} from 'react-router-dom';
import ArticlePage from './pages/ArticlePage'
import base64 from 'base-64'
import Header from './components/Header/Header'
import './assets/css/App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      branding: {
        brand: {
          primary_color: '#fff',
          secondary_color: '#fff',
          site_name: 'HMP Meeting',
          primary_logo: null,
          network_logo: null,
          network_link: 'https://www.hmpglobal.com'
        }
      }
    }
    this.getBranding = this.getBranding.bind(this)
  }

  componentDidMount(prevProps) {
    this.getBranding()
  }

  getBranding() {
    const domain = window.location.hostname === 'localhost'?'':'http://meetings.hmpcloud.com'
    fetch(`${domain}/api/get-branding?user_domain=${window.location.hostname}`, {
      headers: new Headers({
        "Authorization": `Basic ${base64.encode("admin:ch33s3y")}`,
        "Access-Control-Allow-Origin":"*",
        "Content-Type":"application/hal_json",
      }),
      mode: 'cors',
      method: 'GET'
    })
      .then(response=>response.json())
      .then(content => this.setState({branding:content}))
  }

  render() {
    document.body.style.setProperty('--color',this.state.branding.brand.primary_color)
    document.body.style.setProperty('--color',this.state.branding.brand.secondary_color)
    return (
      <div className="App">
          <Router>
            <Header branding= {this.state.branding} />
            <Switch>
              <Route path="/" exact><Tmp/></Route>
              <Route component={ArticlePage}/>
            </Switch>
          </Router> 
      </div>
    );
  }
}

const Tmp = () => (<>Homepage<br></br><Link to="/article/test-page">TestPage</Link></>)



export default App;
