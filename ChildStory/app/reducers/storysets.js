import * as types from '../constants/ActionTypes';

const initialState = {
  loading: false,
  storysets: [
  {title: "孩子病了能快点好起来", stories: []},
  {title: "骂了孩子", stories:[]},
  {title: "孩子生日", stories:[]}
  ]
};

export default function storysets(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LOCAL_STORYSET:
      return Object.assign({}, state, {
        storysets: action.storysets
      });
    case types.LOAD_LOCAL_STORYSET:
      return Object.assign({}, state, {
        storysets: action.storysets
      });
    default:
      return state
  }
};











