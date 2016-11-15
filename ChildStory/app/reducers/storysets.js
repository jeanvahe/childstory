const initialState = [
  {title: "孩子病了能快点好起来", count: 0},
  {title: "骂了孩子", count: 0},
  {title: "孩子生日", count: 0},
}];

export default function storysets(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state;
    case 'DECREMENT':
      return state;
    case 'CHANGE_TITLE':
      return state;
    default:
      return state
  }
};

o


