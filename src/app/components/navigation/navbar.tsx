"use client";

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
// import { useRouter, useSearchParams } from 'next/navigation';

const NavBar: React.FC = () => {
  const [baseURL, setBaseURL] = useState<string>('');

  useEffect(() => {
    setBaseURL(window.location.href);
  }, []);

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
            <Button color="inherit" href={`${baseURL}`}>Home</Button>
            <Button color="inherit" href={`${baseURL}/about`}>About</Button>
            <Button color="inherit" href={`${baseURL}`}>Projects</Button>
            <Button color="inherit" href={`${baseURL}`}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
