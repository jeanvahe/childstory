import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import TopToolbar from '../components/TopToolbar';
import { toastShort } from '../utils/ToastUtil';

const toolbarActions = [
  { title: '保存', disabled: true, iconName: 'md-checkmark', show: 'always' }
];

let feedbackText;

class ChildStoryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
    this.state = {hasInput: false};
  }

  onActionSelected() {
    const { navigator } = this.props;
    navigator.pop();
    this.props.storysets.storysets[this.props.route.rowid].stories.push(feedbackText);
    this.props.updateStorySet(this.props.storysets);
    // rowid, story content
  }

  onChangeText(text) {
    feedbackText = text;
    if (feedbackText === undefined || feedbackText.replace(/\s+/g, '') === '') {
      toolbarActions.disabled = true;
      this.setState({hasInput: false});
    }
    else {
      toolbarActions.disabled = false;
      this.setState({hasInput: true});
    }

  }

  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <TopToolbar
          title="Main"
          navigator={navigator}
          onActionSelected={this.onActionSelected}
          actions={toolbarActions}
        />
        <TextInput
          style={styles.textInput}
          placeholder="请写下您宝贵的意见或建议！"
          placeholderTextColor="#aaaaaa"
          underlineColorAndroid="transparent"
          numberOfLines={200}
          multiline
          autoFocus
          onChangeText={(text) => this.onChangeText(text)}
        />
      </View>
     )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fcfcfc'
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 15,
    textAlignVertical: 'top'
  }
});
export default ChildStoryAdd;

