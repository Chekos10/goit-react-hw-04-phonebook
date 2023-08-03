import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contact'))??[]);
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    localStorage.setItem('contact', JSON.stringify(contacts))
  },[contacts])

  const createContact = (name, number) => {
    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicate) {
      alert('This contact already exists in the phone book!');
      return;
    }
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const removeContact = id => {
    setContacts(prevContacts => 
      prevContacts.filter(contact =>contact.id!==id))
  };
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };
  const filteredContacts = () => {
    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactsList
        removeContact={removeContact}
        contacts={filteredContacts()}
      />
    </>
  );
};
