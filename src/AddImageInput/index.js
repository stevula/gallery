import React, { Component } from 'react';

class AddImageInput extends Component {
  render() {
    return (
      <div>
        <label>Add photo</label>
        <input type="file" accept="image/png,image/jpeg" onChange={this.props.onChange} />
      </div>
    );
  }
};

export default AddImageInput;
