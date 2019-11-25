import React from 'react'
import ArticleDisplay from '../components/ArticleDisplay'
import PageNotFound from '../components/PageNotFound'
import '../assets/css/articlePage.css';


class ArticlePage extends React.Component {
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
      if(this.state.content[0].status === 404)
        return <PageNotFound/>
      return <ArticleDisplay content={this.state.content}/>
    }
}

export default ArticlePage