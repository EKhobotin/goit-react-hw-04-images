import React, { Component } from 'react';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Icon,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  inputSearchForm = e => {
    // console.log('change');
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  handleSearch = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.handleSearch}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            <Icon />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.inputSearchForm}
          />
        </SearchForm>
      </Search>
    );
  }
}
