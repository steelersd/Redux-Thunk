import * as types from '../actions/actionTypes'
import initialState from '../store/initialState'

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_RANDOM_GUID :
      return {...state, guid: action.guid}
    case types.UPDATE_RANDOM_NUMBER:
      return {...state, random: action.number}
    case types.FETCHING:
      return {...state, fetching : action.isFetching}
    default:
      return {...state};
  }
}
