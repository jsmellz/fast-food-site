import { initialStore } from './initialStore'
import {
  LOAD_NOUNS, UPDATE_SETTINGS, LOAD_CLOTHING
} from './actions'

function ffnApp (state = initialStore, action) {
  switch (action.type) {
    case LOAD_NOUNS:
      return Object.assign({}, state, {
        nouns: {
          byId: {
            ...action.nouns
          },
          allIds: [...Object.keys(action.nouns)]
        }
      })
    case UPDATE_SETTINGS:
      return Object.assign({}, state, {
        settings: { ...action.settings }
      })
    case LOAD_CLOTHING:
      return Object.assign({}, state, {
        clothingStatesById: {
          ...state.clothingStatesById,
          [action.tokenId]: action.clothesList
        }
      })
    default:
      return state
  }
}

export default ffnApp