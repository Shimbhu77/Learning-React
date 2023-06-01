import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author, date, source } = this.props;
    return (
      <div>

        <div className="card" style={{marginBottom:'10px'}} >
          <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        left: '0'
                    }
                    }>

                        <span className="badge rounded-pill bg-success"> {source} </span>
           </div>
          <img src={!imageUrl?"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/30_05_2023_18_25_34_9884043.jpg?width=920&format=jpeg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} : {new Date(date).toString()}</small></p>
            <a href={newsurl} target='_blank' className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem