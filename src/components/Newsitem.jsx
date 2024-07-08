
import React, { Component } from 'react'
import Picture from './noimage.webp'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newsitem extends Component {
  render() {
    let {title , description , imageURL , textURL, author , time} = this.props;
    let descsmall = "No description available"
    if(description){
      descsmall = description.slice(0,120)
    }
    if(imageURL === null){
        imageURL = Picture
    }
    return (
      <div>
        <div className="card my-cards" style={{ width: '18rem'}}>
        <span className="position-absolute top-0  translate-middle p-2 bg-danger border border-light rounded-pill badgeclass">
        <span className="badge text-bg-danger">{this.props.name}</span>
  </span>
          

            <img src={imageURL  } className="card-img-top image69 imgsid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title && title.length <= 30 ? title : title.slice(0,60)}...</h5>
                <p className="card-text">
                  {descsmall}...
                </p>
                <a href={textURL} target="_blank" className="btn btn-dark button-sid">Read More</a>
                <p className="bottom-texts">Author- {author}</p>
                
            </div>
            <div className="card-footer text-body-secondary">
    {new Date(this.props.time).toDateString()} , {new Date(this.props.time).toLocaleTimeString()}
  </div>
          
            </div>
      </div>
    )
  }
}
