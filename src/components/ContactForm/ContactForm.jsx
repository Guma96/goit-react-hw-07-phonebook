import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from "./ContactForm.module.css";

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';

const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactData = { name, number };
    form.reset();
    if (data.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return false;
    }
    try {
      await addContact(contactData);
      Notify.success('Contact was added to your phonebook');
    } catch (error) {
      Notify.failure('Something wrong. Please, try again');
    }
  };

    return (
      <form className={styles.Editor} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.Editor_label}>
          Name
          <input
            className={styles.Editor_input}
            type="text"
            name="name"
          />
        </label>
        <label className={styles.Editor_label}>
          Number
          <input
            className={styles.Editor_input}
            type="text"
            name="number"
          />
        </label>
        <button className={styles.Editor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.object,
};