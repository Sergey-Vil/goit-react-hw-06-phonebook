import React from 'react';
import css from './contactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'redux/contacts/contact-slice';
import { selectFindContact } from 'redux/filter/filterSelect';

export const ContactsList = () => {
  const contacts = useSelector(selectFindContact);
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };
  const elements = contacts.map(contact => (
    <li key={contact.id}>
      <p>
        &#8226; {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        className={css.delete__btn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};
