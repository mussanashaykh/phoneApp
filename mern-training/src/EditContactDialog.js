import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const EditContactDialog = ({ contact, onUpdate, onClose }) => {
  const [editedContact, setEditedContact] = useState(contact || { firstName: '', lastName: '', phoneNumber: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleSave = () => {
    onUpdate(editedContact);
    onClose();
  };

  return (
    <Dialog open={!!contact} onClose={onClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          value={editedContact.firstName}
          onChange={handleInputChange}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          value={editedContact.lastName}
          onChange={handleInputChange}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          fullWidth
          value={editedContact.phoneNumber}
          onChange={handleInputChange}
          sx={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditContactDialog;
