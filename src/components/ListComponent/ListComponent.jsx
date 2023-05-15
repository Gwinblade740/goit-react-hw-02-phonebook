import React from 'react';
import css from 'components/ListComponent/ListComponent.module.css';
const ListComponent = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactList}>
            {name} : {number}
            <button
              className={css.btnContactList}
              onClick={() => onDeleteContact(id)}
            >
              {' '}
              Delete{' '}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListComponent;
