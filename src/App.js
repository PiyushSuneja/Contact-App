import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import Header from './Components/Header'
import './App.css';
import Addcontact from './Components/Addcontact';
import Contactlist from './Components/Contactlist';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState([]);
  const addContactHandler = (contact) => {

    setcontacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setcontacts(newContactList);
  }

  useEffect(() => {
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivecontacts) setcontacts(retrivecontacts);
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container">
      <Header />
      <Addcontact addContactHandler={addContactHandler}></Addcontact>
      <Contactlist contacts={contacts} getContactId={removeContactHandler} />
    </div>
  )
}

export default App;
