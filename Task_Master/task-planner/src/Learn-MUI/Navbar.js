import { Avatar, Box, Container, Drawer, IconButton, Menu, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'

export default function Navbar() {

    const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    // <Container maxWidth='xl' sx={{ border: '4px solid green', height: '70px', display: 'flex', justifyContent: 'space-between',alignItems: 'center', boxSizing: 'border-box', bgcolor: 'ghostwhite' }}>
    <Container maxWidth='xl' sx={{ height: '70px', display: 'flex', justifyContent: 'space-between',alignItems: 'center', boxSizing: 'border-box', bgcolor: 'ghostwhite' }}>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px',border: '4px solid red' }}> */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Box>
          <Typography sx={{ fontWeight: 'bold', letterSpacing: 4, fontStyle: 'italic', fontSize: '20px' }}>
            ShimbhuAI
          </Typography>
        </Box>
        {/* Navigation links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', gap: '20px' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
            Home
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
            About
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
            Contact
          </Typography>
        </Box>
      </Box>
      {/* Avatar */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handleDrawerToggle}>
        <Avatar sx={{ bgcolor: 'deepOrange.500' }} alt="SK" src="/static/images/avatar/3.jpg" />
        {/* Hamburger menu button for mobile view */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Box>
      </Box>
      {/* Drawer for mobile view */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: '300px', p: 2 }}> 
        <Avatar sx={{ bgcolor: deepOrange[500] }} alt="SK" src="/static/images/avatar/3.jpg" />
          <Typography variant="h6" sx={{ mb: 2 }}>
           My Account 
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Home
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            About
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Contact
          </Typography>
        </Box>
      </Drawer>
    </Container>
  )
}
