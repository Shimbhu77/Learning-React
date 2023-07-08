import { Box, Button, Container, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

export default function FormPost() {

    const postClickHandler= () =>{
        console.log("tweet posted.");
    }

    return (
        <>

            {/* <Container maxWidth='lg' sx={{ border: '4px solid red' }}> */}
            <Container maxWidth='lg'>
                <Typography sx={{ fontSize: 'h6.fontSize', m: 2 }} >Post Tweet</Typography>
                {/* <Box component="form" sx={{ border: '4px solid green', mt: 2 }}> */}
                <Box component="form" sx={{mt: 2 }}>
                    {/* <Box sx={{border:'4px solid blue',m:2}}> */}
                    <Box sx={{ m: 2 }}>
                        <TextField
                            id="outlined-required"
                            label="username"
                            fullWidth
                        />
                    </Box>
                    {/* <Box sx={{border:'4px solid blue',m:2}}> */}
                    <Box sx={{ m: 2 }}>
                        <TextField
                            id="outlined-required"
                            label="post title"
                            fullWidth
                        />
                    </Box>
                    {/* <Box sx={{border:'4px solid blue',m:2}}> */}
                    <Box sx={{ m: 2 }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="post description"
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </Box>
                    {/* <Box sx={{border:'4px solid blue',m:2}}> */}
                    <Box sx={{ m: 2 }}>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={postClickHandler}>
                            Post Tweet
                        </Button>
                    </Box>
                </Box>
            </Container>

        </>
    )
}
