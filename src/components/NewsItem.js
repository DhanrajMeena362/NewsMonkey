import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/08/16/600x338/chandrayaan3_1692172386402_1692172415019.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
                <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem