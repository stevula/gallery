import React, { Component } from 'react';

class RowSizeControls extends Component {
  render() {
    return (
      <div>
        <label>Images per row</label>
        <input type="number" min="0" max="20" value={this.props.value} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default RowSizeControls;
