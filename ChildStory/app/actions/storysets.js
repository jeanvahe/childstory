import * as types from '../constants/ActionTypes';

export function loadStorySet(storysets) {
  return {
    type: types.LOAD_STORYSET,
    storysets
  }
}
