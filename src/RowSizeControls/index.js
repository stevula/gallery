import React, { Component } from 'react';

class RowSizeControls extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <label>{this.props.value} images per row</label>
        <input
          style={{
            display: 'block',
            margin: '0 auto',
          }}
          type="range"
          min="1"
          max="10"
          value={this.props.value}
          onChange={this.props.onChange} />
      </div>
    );
  }
}

export default RowSizeControls;
