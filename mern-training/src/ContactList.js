import React, { useContext, useState } from 'react';
import { Button, Card, CardContent, Grid, Typography, Dialog, DialogTitle, DialogContent, Paper, Avatar } from '@mui/material';
import { ContactContext } from './ContactContext';

const ContactList = () => {
  const { contacts, deleteContact } = useContext(ContactContext);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleViewOpen = (contact) => {
    setSelectedContact(contact);
    setViewOpen(true);
  };

  const handleViewClose = () => {
    setSelectedContact(null);
    setViewOpen(false);
  };

  return (
    <Paper elevation={3} sx={{ padding: '1rem' }}>
      <Typography variant="h4" mb={2} sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
        My Contacts
      </Typography>

      <Grid container spacing={2}>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <Grid item key={contact.id} xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar sx={{ width: 60, height: 60 }}>
                        {contact.profilePic ? (
                          <img src={contact.profilePic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          `${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}`
                        )}
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5">{contact.firstName} {contact.lastName}</Typography>
                      <Typography>{contact.phoneNumber}</Typography>
                      <Typography><strong>Relationship:</strong> {contact.relationship}</Typography>
                      <Typography><strong>Verified:</strong> {contact.verified ? 'Yes' : 'No'}</Typography>
                      <Typography><strong>Country Code:</strong> {contact.countryCode}</Typography>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={() => handleViewOpen(contact)}>
                        View
                      </Button>
                      <Button variant="contained" color="secondary" onClick={() => deleteContact(contact.id)} sx={{ marginLeft: '0.5rem' }}>
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" color="textSecondary">
              No contacts available
            </Typography>
          </Grid>
        )}

        <Dialog open={viewOpen} onClose={handleViewClose}>
          <DialogTitle>Contact Details</DialogTitle>
          <DialogContent>
            {selectedContact && (
              <div>
                <Typography variant="h6">Name: {selectedContact.firstName} {selectedContact.lastName}</Typography>
                <Typography>Phone Number: {selectedContact.phoneNumber}</Typography>
                <Typography><strong>Relationship:</strong> {selectedContact.relationship}</Typography>
                <Typography><strong>Verified:</strong> {selectedContact.verified ? 'Yes' : 'No'}</Typography>
                <Typography><strong>Country Code:</strong> {selectedContact.countryCode}</Typography>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Grid>
    </Paper>
  );
};

export default ContactList;
