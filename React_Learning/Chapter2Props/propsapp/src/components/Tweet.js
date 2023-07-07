import React, { useState } from 'react'
import TweetComponent from './TweetComponent'
import PostTweet from './PostTweet';

const tweets = [
    {
        tweetId: 1,
        content: "Nikki is going live now.",
        time: "6 july 2023",
        username: "Shimbhu",
        verified: true
    },
    {
        tweetId: 2,
        content: "My AI tutor Nidhi is going live now.",
        time: "9 july 2023",
        username: "Shimbhu",
        verified: true
    },
    {
        tweetId: 3,
        content: "Today we have started Kumawat foundation.",
        time: "9 july 2029",
        username: "Payal",
        verified: false
    }
]


export default function Tweet() {

    console.log("render tweet ");

    const [data, setData] = useState(tweets);
    const [edTweet, setedTweet] = useState(null);

    const addPostTweet = (tweet) => {

        setData([...data,
        {
            ...tweet,
            tweetId: data.length + 1
        }
        ]);
    }
    const deleteTweet = (tweetId) => {

        console.log("delete ",tweetId)
        setData(data.filter(tweet => tweet.tweetId!==tweetId));
    }
    const updateTweet = (tweetId) => {

        console.log("get tweet for editing. ",tweetId)
        setedTweet(data.find(el => el.tweetId===tweetId));
    }

    const editTweet = (tweet) => {

        const index = data.findIndex(t => t.tweetId===tweet.tweetId);

        const updatedData = [...data];
        
        updatedData.splice(index,1,tweet);
        console.log("edit ",tweet);
        setData(updatedData);
        setedTweet(null);
    }

    return (
        <>
            <div className="container">

                <PostTweet addPostTweet={addPostTweet}  handleUpdate={editTweet} edTweet={edTweet}></PostTweet>

                <div className='my-10 d-flex-wrap'>
                    {data.map(tweet =>
                        <TweetComponent
                            key={tweet.tweetId}
                            tweetId={tweet.tweetId}
                            content={tweet.content}
                            time={tweet.time}
                            username={tweet.username}
                            verified={tweet.verified}
                            handleUpdate={updateTweet}
                            handleDelete={deleteTweet}

                        />
                    )}
                </div>
            </div>

        </>
    )
}
