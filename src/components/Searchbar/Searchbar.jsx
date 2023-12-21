import React, { useState } from 'react';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Icon,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const inputSearchForm = e => setValue(e.target.value);
  const handleSearch = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <Search>
      <SearchForm onSubmit={handleSearch}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <Icon />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={inputSearchForm}
        />
      </SearchForm>
    </Search>
  );
};

// export class Searchbar extends Component {
//   state = {
//     value: '',
//   };
//   inputSearchForm = e => {
//     // console.log('change');
//     // console.log(e.target.value);
//     this.setState({ value: e.target.value });
//   };
//   handleSearch = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.value);
//   };

//   render() {
//     return (
//       <Search>
//         <SearchForm onSubmit={this.handleSearch}>
//           <SearchFormButton type="submit">
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//             <Icon />
//           </SearchFormButton>

//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.value}
//             onChange={this.inputSearchForm}
//           />
//         </SearchForm>
//       </Search>
//     );
//   }
// }
