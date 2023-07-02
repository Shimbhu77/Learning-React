import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Tweet() {

    const [tweet, setTweet] = useState([]);



    useEffect(() => {

        const url = 'http://localhost:8888/tweets';
        const fetchData = async () => {
            try {
                const tweetData = await fetch(url);
                const data = await tweetData.json();
                setTweet(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {tweet.map((el) => (
                        <Grid item lg={3} md={6} sm={12} key={el.tweetId}>
                            <Card></Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>

    )
}
