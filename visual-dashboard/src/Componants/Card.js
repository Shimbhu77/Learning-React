import React from 'react'

export default function Card(props) {
  return (
    <>
        <div className="card">
            <div className="card-header">
              <h5>Provided by : { props.source ? props.source :"Unknown"}</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.insight}</p>
                <a target='_blank' href={props.url} className="btn btn-dark">Read More</a>
            </div>
        </div>
    
    </>
  )
}
