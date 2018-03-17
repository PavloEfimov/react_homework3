import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ getImages }) => {
  let input = null;

  return (
    <form className='form'
      onSubmit={evt => {
        evt.preventDefault();

        getImages(input.value);
      }}
    >
      <input placeholder="Search by name..." type="text" ref={node => (input = node)} />
      
    </form>
  );
};

export default SearchForm;