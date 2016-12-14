import * as types from '../constants/ActionTypes';

export function loadStorySet(storysets) {
  return {
    type: types.LOAD_LOCAL_STORYSET,
    storysets
  }
}

export function updateStorySet(storysets) {
  return {
    type: types.UPDATE_LOCAL_STORYSET,
    storysets
  }
}
