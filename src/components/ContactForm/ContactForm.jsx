import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import c from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleOnSubmit = e => {
    e.preventDefault();

    const data = {
      id: nanoid(),
      name: name,
      phone: number,
    };

    const isItUniqueName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isItUniqueName) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(data));
      resetForm();
    }
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        return setName(e.currentTarget.value);
      case 'number':
        return setNumber(e.currentTarget.value);
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={c.contactAddForm} onSubmit={handleOnSubmit}>
      <label className={c.contactAddLabel}>
        Name
        <input
          className={c.contactAddInput}
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={c.contactAddLabel}>
        Number
        <input
          className={c.contactAddInput}
          type="tel"
          name="number"
          value={number}
          placeholder="Enter Phone Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={c.contactAddBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
