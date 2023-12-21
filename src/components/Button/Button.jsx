import React from 'react';
import { ButtonLoadMore, ButtonWrapper } from './Button.styled';

export const Button = ({ onClick }) => {
  const clickLoadMore = () => {
    onClick();
  };
  return (
    <ButtonWrapper>
      <ButtonLoadMore type="submit" onClick={clickLoadMore}>
        Load more
      </ButtonLoadMore>
    </ButtonWrapper>
  );
};

// export class Button extends Component {
//   clickLoadMore = () => {
//     this.props.onClick();
//   };

//   render() {
//     return (
//       <ButtonWrapper>
//         <ButtonLoadMore type="submit" onClick={this.clickLoadMore}>
//           Load more
//         </ButtonLoadMore>
//       </ButtonWrapper>
//     );
//   }
// }
