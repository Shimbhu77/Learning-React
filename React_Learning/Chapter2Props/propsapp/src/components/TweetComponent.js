import React from 'react'
import LikeButton from './LikeButton'

export default function TweetComponent(props) {
    return (
        <div className='container'>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body ">
                    <h5 className="card-title">Tweet Id : {props.tweetId}</h5>
                    <h5 className="card-title">Tweeted by : {props.username}{props.verified && '✅'}</h5>
                    <h6 className="card-title">Posted on : {props.time}</h6>
                    <p className="card-text">{props.content}</p>
                    <div className="container">
                        <LikeButton />
                        <button type="button" className="btn btn-warning mx-1" onClick={()=> props.handleUpdate(props.tweetId)}>Update</button>
                        <button type="button" className="btn btn-danger " onClick={()=> props.handleDelete(props.tweetId)} >Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
