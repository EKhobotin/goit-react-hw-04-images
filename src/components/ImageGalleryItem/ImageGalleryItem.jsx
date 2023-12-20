import React, { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  handleClick = () => {
    // console.log(this.props.largeURL);
    // console.dir(e.target);
    // console.log(e.currentTarget);
    this.props.onClick(this.props.largeURL);
  };

  render() {
    return (
      <GalleryItem onClick={this.handleClick}>
        <GalleryItemImage
          src={this.props.url}
          alt={this.props.tags}
          largeURL={this.props.largeURL}
        />
      </GalleryItem>
    );
  }
}
