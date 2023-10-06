import React, { useState, useContext } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { ContactContext } from './ContactContext';

const UpdateContact = ({ contact, onClose }) => {
  const { updateContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({ ...contact });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateContact(formData);
    onClose();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Edit Contact</h1>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          value={formData.firstName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          value={formData.lastName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          fullWidth
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Grid>
    </Grid>
  );
};

export default UpdateContact;
