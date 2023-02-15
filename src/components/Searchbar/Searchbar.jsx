import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarButton,
  SearchButtonLabel,
  SearchbarInput,
} from './Styled';

export const Searchbar = onSubmit => {
  return (
    <SearchbarHeader>
      <SearchbarForm>
        <SearchbarButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchbarButton>

        <SearchbarInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
