const initialState = {
  games: []
}

export default function(state = initialState, action) {
  switch (action.type){
    case 'GET_ALL_GAMES':
      return {...state, games: action.payload}
    default:
      return state
  }
}
