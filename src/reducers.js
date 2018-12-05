import { combineReducers } from 'redux'

const initialState = {
  albums: [],
  collection: []
}

function albums(state = initialState.albums, action) {
  switch (action.type) {
    case 'ALBUMS_LOAD_SUCCESS':
      return action.albums
    default:
      return state
  }
}

const rootReducer = combineReducers({
  albums
})

export default rootReducer