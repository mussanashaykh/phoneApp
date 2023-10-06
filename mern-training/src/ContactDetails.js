import React from 'react';
import { Avatar, Typography } from '@mui/material';

const ContactDetails = ({ contact }) => {
  return (
    <>
        {contact && (
          <div>
            <Typography variant="h6">Name: {contact.firstName} {contact.lastName}</Typography>
            <Typography>Phone Number: {contact.phoneNumber}</Typography>
            {contact.profilePic && (
              <div style={{ marginTop: '1rem' }}>
                <Avatar alt="Profile" src={contact.profilePic} sx={{ width: 60, height: 60 }} />
                <span>Profile Picture</span>
              </div>
            )}
          </div>
        )}
    </>
  );
};

export default ContactDetails;