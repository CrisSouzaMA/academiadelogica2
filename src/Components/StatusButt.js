import React from 'react';

class StatusButt extends React.Component {
  render() {
    const { status, statusNumber, handleClick } = this.props;
    
    return (
      <button
      className='butt'
      type='button'
      id={ statusNumber }
      onClick={ handleClick }
    >
      { status }
    </button>
    );
  }
}

export default StatusButt;