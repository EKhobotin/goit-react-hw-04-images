import React, { Component } from 'react';
import { ButtonLoadMore, ButtonWrapper } from './Button.styled';

export class Button extends Component {
  clickLoadMore = () => {
    this.props.onClick();
  };

  render() {
    return (
      <ButtonWrapper>
        <ButtonLoadMore type="submit" onClick={this.clickLoadMore}>
          Load more
        </ButtonLoadMore>
      </ButtonWrapper>
    );
  }
}
