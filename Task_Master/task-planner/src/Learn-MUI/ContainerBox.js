import React from 'react';
import { Box, Container } from '@mui/material';

export default function ContainerBox() {
    return (
        <div>
            {/* <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'red', height: '100vh',border:'4px solid blue' }} />
            </Container> */}
            <Box
                sx={{
                    boxSizing: 'border-box',
                    bgcolor: 'aqua',
                    // height:'70px',
                    // width:'100px',
                    // p:'24px'
                    display: 'flex',
                    height: '300px',
                    color: 'grey',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Box component="div" sx={{border:'4px solid green',width:'700px', textAlign:'left',pl:'10px'}}>
                    In the example above, the Box component is used as the container element. The sx prop is applied to the Box component to define custom styles. The display: 'flex' property enables flexbox layout. The justifyContent: 'center' property horizontally centers the content within the Box, and the alignItems: 'center' property vertically centers the content.

                    Adjust the height value in the sx prop to match your requirements.

                    You can replace the with your desired content or components that you want to align at the center.

                    By using the Box component and custom styles through the sx prop, you can easily align a box at the center of its container in MUI.
                </Box>
            </Box>
        </div>
    )
}
