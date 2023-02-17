import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarButton,
  SearchButtonLabel,
  SearchbarInput,
} from './Styled';

export class Searchbar extends Component {
  state = {
    name: '',
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '' });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchbarForm onSubmit={this.handleFormSubmit}>
          <SearchbarButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchbarButton>

          <SearchbarInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="name"
            Value={this.state.name}
            onChange={this.handleChange}
          />
        </SearchbarForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
