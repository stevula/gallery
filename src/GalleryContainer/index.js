import React, { Component } from 'react';
import GalleryRow from '../GalleryRow';
import arrayToChunks from '../lib/arrayToChunks.js';

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
    return (
      <div>
        {
          arrayToChunks(this.state.imgSrcs, 3).map((rowImgSrcs, index) => {
            return <GalleryRow key={index} imgSrcs={rowImgSrcs} />;
          })
        }
      </div>
    );
  }
}

export default GalleryContainer;
