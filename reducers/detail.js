const initialState = {
  gameDetail: ''
}

export default function(state = initialState, action) {
  console.log(action.payload)
  switch (action.type){
    case 'GET_DETAIL_GAME':
      return {...state, gameDetail: action.payload}
    case 'CLEAR_STATE_DETAIL':
      return {...state, gameDetail: ''}
    default:
      return state
  }
}
