import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/Main';
import * as actionCreators from '../actions/action';
import * as storysetsActionCreators from '../actions/storysets';

class MainContainer extends React.Component {
  static componentDidMount() {
  }

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const { reducer, storysets } = state;
  return {
    reducer,
    storysets
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch);
  const storysetsActions = bindActionCreators(storysetsActionCreators, dispatch);
  return {
    actions,
    storysetsActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
