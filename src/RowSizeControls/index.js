import React, { Component } from 'react';

class RowSizeControls extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <label>Images per row</label>
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
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default RowSizeControls;
