import React from 'react';
import { Container, Grid, AppBar, Toolbar, Typography } from '@mui/material';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactProvider from './ContactContext';
import './PhoneBookApp.css';


function PhoneBookApp() {
  return (
    <ContactProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} className="app-title" >
            Phone Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ContactList />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AddContact />
          </Grid>
        </Grid>
      </Container>
    </ContactProvider>
  );
}

export default PhoneBookApp;
