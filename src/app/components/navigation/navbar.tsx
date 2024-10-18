import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <Container maxWidth={false} sx={{ margin: '0px!important', padding: '0px!important' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'black',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
          paddingLeft: '3%'
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0', width: '100%' }}>
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', fontSize: '50px' }}>
            👽
          </Typography>

          <div style={{ marginLeft: 'auto' }}>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/about">About</Button>
            <Button color="inherit" href="/projects">Projects</Button>
            <Button color="inherit" href="/contact">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
