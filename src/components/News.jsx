import React, { Component } from 'react'
import Newsitem from './Newsitem'
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Loading'

export default class News extends Component {
 
   articles = [
    
  ]
  constructor(){
    super()
    this.state = {
      articles : this.articles,
      page : 1,
      Disable : false,
      loading : false,
      progress : 0,
      
    }
    
  }

  async componentDidMount(){
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6de8dfe9aece43d1b22f43726e70a71a&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json();

   
    this.setState({articles : parsedData.articles , loading:false, totalResults :parsedData.totalResults , progress: this.state.progress+90})
    

  }

   fetchMoreData = async() => {
    
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6de8dfe9aece43d1b22f43726e70a71a&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let fetchdata = await fetch(url)
    let parsedData = await fetchdata.json()
    this.setState({page:this.state.page +1})
    this.setState({
      
      articles: this.state.articles.concat(parsedData.articles),
      loading:false,
      totalResults : parsedData.totalResults
    
})
   }

  render(){
    return (
      <> 
      {document.getElementById('titles').innerHTML= "Top headlines on " + this.props.category}
      <div> 
         
        <div className= "container my-3" > 
        <h2 className="text-center my-siddharth-text">Top Headlines - {(this.props.category).toUpperCase(1)}  </h2>
        {this.state.loading && < Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={< Spinner />}
        >
           <div className= "row"> 

            {this.state.articles.map(element => { 
              return <div className="col"> 
                  <Newsitem title = {element.title} description ={element.description} imageURL= {element.urlToImage} textURL= {element.url} author = {element.author} time={element.publishedAt} name={element.source.name}/> 
                 </div>})} 
                
            </div> 
            </InfiniteScroll> 
        </div> 
        
       
    
      </div></>
      
    )
  }

}


