import React, { Component } from 'react';
import GalleryImage from '../GalleryImage';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrcs: [
        './media/1.jpeg',
        './media/2.jpeg',
        './media/3.jpeg',
        './media/4.jpeg',
        './media/5.jpeg',
        './media/6.jpeg',
        './media/7.jpeg',
        './media/8.jpeg',
        './media/9.jpeg',
        './media/10.jpeg',
        './media/11.jpeg',
        './media/12.jpeg',
        './media/13.jpeg',
        './media/14.png',
        './media/15.jpeg',
        './media/16.jpeg',
        './media/17.jpeg',
        './media/18.jpeg',
      ]
    };
  }

  render() {
    const imgs = this.state.imgSrcs.map(imgSrc => <GalleryImage key={imgSrc} src={imgSrc} />);
    return (
      <div>
        {imgs}
      </div>
    );
  }
}

export default GalleryContainer;
