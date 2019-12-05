import React from 'react'
import MetaTags from 'react-meta-tags'
import ArticleDisplay from '../components/Article/ArticleDisplay'
import PageNotFound from '../components/Global/PageNotFound'
import base64 from 'base-64'
import '../assets/css/articlePage.css';


class ArticlePage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        content: {
          title: "Loading",
          created: 0,
          status: 200,
          output: [],
          hero: null,
        },
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
      const domain = window.location.hostname === 'localhost'?'':'http://meetings.hmpcloud.com'
      fetch(`${domain}/api/get-content-id?path=${current_path}&user_domain=${window.location.hostname}`, {
        headers: new Headers({
          "Authorization": `Basic ${base64.encode("admin:ch33s3y")}`,
          "Access-Control-Allow-Origin":"*",
          "Content-Type":"application/hal_json",
        }),
        mode: 'cors',
        method: 'GET'
      })
        .then(response=>response.json())
        .then(content => this.setState({content}))
    }
  
  
  
    render() {
      if(this.state.content.status === 404) {
        return (<>
          <MetaTags><title>Page Not Found | {this.props.branding.brand.site_name}</title></MetaTags>
          <PageNotFound/>
        </>)
      }
      document.body.className = 
        'node-' + this.state.content.nid + 
        ' node-type-' + this.state.content.type +
        ' page-' + (this.props.location.pathname === '/'?'home':this.props.location.pathname.replace(/\//g,'-'))
       
       return (<>
          <MetaTags><title>{this.state.content.title}|{this.props.branding.brand.site_name}</title></MetaTags>
          <ArticleDisplay content={this.state.content.output} hero={this.state.content.hero} />
        </>)
    }
}

export default ArticlePage