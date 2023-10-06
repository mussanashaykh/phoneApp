import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Paper, Avatar, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, Checkbox, Select, InputLabel, MenuItem } from '@mui/material';
import { ContactContext } from './ContactContext';

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    phoneNumber: '', 
    profilePic: '', 
    relationship: '', 
    verified: false,  
    countryCode: '' 
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, profilePic: reader.result });
      setSelectedImage(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!formData.profilePic) {
      const initials = `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`;
      setFormData({ ...formData, profilePic: initials });
    }
    
    addContact(formData);
    setFormData({ firstName: '', lastName: '', phoneNumber: '', profilePic: '', relationship: '', verified: false, countryCode: '' }); 
    setSelectedImage(null); 
  };

  return (
    <Paper elevation={3} sx={{ padding: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Add Contact</h1>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>Country Code</InputLabel>
            <Select
              value={formData.countryCode}
              onChange={handleChange}
              label="Country Code"
              name="countryCode"
            >
              <MenuItem value="+92">+92 (PK)</MenuItem>
              <MenuItem value="+1">+1 (US)</MenuItem>
              <MenuItem value="+44">+44 (UK)</MenuItem>
              
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleChange}
          />
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
          <FormControl component="fieldset">
            <FormLabel component="legend">Relationship</FormLabel>
            <RadioGroup
              row
              aria-label="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
            >
              <FormControlLabel value="family" control={<Radio />} label="Family" />
              <FormControlLabel value="friend" control={<Radio />} label="Friend" />
              <FormControlLabel value="Work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.verified}
                onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
                name="verified"
                color="primary"
              />
            }
            label="Verified"
          />
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            type="file"
            style={{ display: 'none' }}
            id="fileInput"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">
            <Button variant="contained" color="primary" component="span">
              Upload Profile Pic
            </Button>
          </label>
          {selectedImage && (
            <div style={{ marginTop: '1rem' }}>
              <Avatar alt="Selected Image" src={selectedImage} sx={{ width: 60, height: 60, marginRight: '0.5rem' }} />
              <span>Selected Image</span>
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddContact;
