import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = newContact => {
    const { contacts } = this.state;
    const findSubmit = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (findSubmit) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState({ contacts: [newContact, ...contacts] });
  };

  eventFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  idDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} eventFilter={this.eventFilter} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          idDelete={this.idDelete}
        />
      </div>
    );
  }
}
