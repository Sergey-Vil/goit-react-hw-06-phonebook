import ContactsForm from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import css from './contactsBook.modale.css';

export const ContactsBook = () => {
  return (
    <div className={css.phonebook}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactsForm />
      <h2 className={css.title}>Contacts</h2>
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};

export default ContactsBook;
