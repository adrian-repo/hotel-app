import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';

const Inventory = ({ roomList }) => (
  <div className='container tc ma5'>
      <div className='w-100 pa4'>
        <h1 className='white'>HOTEL PMS</h1>
      </div>
      {roomList.map(data => 
        <Room key={data.roomNumber} roomNumber={data.roomNumber} guestName={data.guestName} bussy={data.bussy} dirty={data.dirty} />
        )}
  </div>
);

function mapStateToProps(state) {
  return {
    roomList: state.roomList,
  }
}

export default connect(mapStateToProps)(Inventory)
