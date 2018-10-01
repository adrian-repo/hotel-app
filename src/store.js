import { createStore } from 'redux'

// state
const initialState = {
  roomList: []
}

// actions
export function initRooms(topNumber) {
  return { type: "INIT_ROOMS", payload: topNumber }
}

export function checkIn(roomNumber) {
    const guestName = prompt('Please enter the Guest Name','Guest Name');
   return { type: "CHECK_IN", payload: { room: roomNumber, name: guestName }
        }
}

export function checkOut(roomNumber) {
    return { type: "CHECK_OUT", payload: roomNumber }
 }

export function cleanRoom(roomNumber) {
    return { type: "CLEAN_ROOM", payload: roomNumber }
 }


// reducer
function reducer(state, action) {
     
  if (action.type === "INIT_ROOMS") {
       const rooms = [];
       for (let i=0; i < 13; i++) {
       rooms.push({
            roomNumber: i,
            guestName: undefined,
            bussy: false,
            dirty: false,
       });        
    };
    return {
      ...state,
      roomList: rooms,
    }
  } //end if Init


    if (action.type === "CHECK_IN") {
        const oldList = state.roomList;
        const newList = [];
        oldList.map(x => {
            if (x.roomNumber === action.payload.room) {
                    newList.push({
                        'roomNumber': action.payload.room,
                        'guestName': action.payload.name,
                        'bussy': true,
                        'dirty': false,
                    })}
            else {
                newList.push(x);
            }

            return newList
        })
        let roomList = newList;
        return { ...state,
            roomList
          }
} //end of Check-In


if (action.type === "CHECK_OUT") {
    const oldList = state.roomList;
    const newList = [];
    oldList.map(x => {
        if (x.roomNumber === action.payload) {
                newList.push({
                    'roomNumber': action.payload,
                    'guestName': undefined,
                    'bussy': false,
                    'dirty': true,
                })}
        else {
            newList.push(x);
        }

        return newList
    });
    let roomList = newList;
    return { ...state,
        roomList
      }
} //end of Check-Out



if (action.type === "CLEAN_ROOM") {
    const oldList = state.roomList;
    const newList = [];
    oldList.map(x => {
        if (x.roomNumber === action.payload) {
                newList.push({
                    'roomNumber': action.payload,
                    'guestName': undefined,
                    'bussy': false,
                    'dirty': false,
                })}
        else {
            newList.push(x);
        }

        return newList
    });
    let roomList = newList;
    return { ...state,
        roomList
      }
} //end of Clean Room



return state
} //end of reducer

// store

const store = createStore(reducer, initialState +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store
