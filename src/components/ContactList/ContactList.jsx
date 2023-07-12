import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { fetchContacts } from 'redux/operations';

const ContactList = ({ contact }) => {
  const { data, error, isLoading } = fetchContacts();
  const { filter } = useSelector(selectFilter);

  if (!data) {
    return null;
  }
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {!error && isLoading && <div>Loading</div>}
      <ul className={styles.List}>
        {visibleContacts.map(contact => (
          <li className={styles.List_item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contact: PropTypes.object,
  contacts: PropTypes.object,
  input: PropTypes.string,
};
export default ContactList;
