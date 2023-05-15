import React from 'react';
import css from 'components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={css.filterLabel} htmlFor="filter">
        Find contacts by name{' '}
      </label>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
