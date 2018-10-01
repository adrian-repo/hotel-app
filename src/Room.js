import React from 'react';
import { connect } from 'react-redux';
import { checkIn, checkOut, cleanRoom } from './store';
import 'tachyons';

const Room = ({ roomNumber, guestName, bussy, dirty, checkIn, checkOut, cleanRoom }) => 

    <div className={ dirty ? ' b--orange grow dib br4 tc ma2 pa2 ba bg-light-red': 'b--orange grow dib br4 tc ma2 pa2 ba bg-lightest-blue'} >
      <h3 className='pa2 br2 bg-dark-blue white'>Room {roomNumber}</h3>
      <span style={{visibility: !dirty ? 'visible' : 'hidden' }}>{guestName ? <h4>Guest: {guestName} </h4> : <h4>Available</h4>}</span>
      <button className='br2 dib pa2 bg-light-green' style={{visibility: !bussy&&!dirty ? 'visible' : 'hidden' }} onClick={checkIn}>Check In</button>
      <button className='br2 dib pa2 bg-light-red' style={{visibility: bussy ? 'visible' : 'hidden' }} onClick={checkOut}>Check Out</button>
      <button className='br2 dib pa2 bg-light-red' style={{visibility: dirty ? 'visible' : 'hidden' }} onClick={cleanRoom}>Clean dirty room</button>
    </div>


function mapDispatchToProps(dispatch, props) {
  return {
    checkIn: () => dispatch(checkIn(props.roomNumber)),
    checkOut: () => dispatch(checkOut(props.roomNumber)),
    cleanRoom: () => dispatch(cleanRoom(props.roomNumber)),
  }
}

export default connect(null, mapDispatchToProps)(Room)