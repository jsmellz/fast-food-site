export const LOAD_NOUNS = 'LOAD_NOUNS'
export function loadNouns (nouns) {
  return {
    type: LOAD_NOUNS,
    nouns
  }
}

export const LOAD_CLOTHING = 'LOAD_CLOTHING'
export function loadClothing (tokenId, clothesList) {
  return {
    type: LOAD_CLOTHING,
    tokenId,
    clothesList
  }
}

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export function updateSettings (settings) {
  return {
    type: UPDATE_SETTINGS,
    settings
  }
}