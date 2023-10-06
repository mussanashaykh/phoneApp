import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

const ContactProvider = (props) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Friend',
      verified: true,
      countryCode: '+92'
    },
    {
      id: 2,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Family',
      verified: false,
      countryCode: '+92'
    },
    {
      id: 3,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Work',
      verified: true,
      countryCode: '+92'
    },
    {
      id: 4,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Friend',
      verified: false,
      countryCode: '+92'
    },
    {
      id: 5,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Family',
      verified: true,
      countryCode: '+92'
    },
    {
      id: 6,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Friend',
      verified: true,
      countryCode: '+92'
    },
    {
      id: 7,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Work',
      verified: false,
      countryCode: '+92'
    },
    {
      id: 8,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Friend',
      verified: true,
      countryCode: '+92'
    },
    {
      id: 9,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Work',
      verified: false,
      countryCode: '+92'
    },
    {
      id: 10,
      firstName: 'Sheikh',
      lastName: 'Musanna',
      phoneNumber: '0300-1234567',
      profilePic: null,
      relationship: 'Family',
      verified: true,
      countryCode: '+92'
    },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const viewContact = (id) => {
    const selectedContact = contacts.find(contact => contact.id === id);
    console.log('View Contact:', selectedContact);
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, viewContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
