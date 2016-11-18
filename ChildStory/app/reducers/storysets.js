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
    case types.FETCH_STORYSET_LIST:
      return state;
    case types.RECEIVE_STORYSET_LIST:
      return state;
    case types.LOAD_STORYSET:
      return Object.assign({}, state, {
        loading: true,
        storysets: action.storysets
      });
    default:
      return state
  }
};











