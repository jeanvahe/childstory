import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ListView,
  RecyclerViewBackedScrollView,
  TouchableOpacity,
  Text
} from 'react-native';

import TopToolbar from '../components/TopToolbar';
import { toastShort } from '../utils/ToastUtil';
import ChidStorySet from './ChidStorySet';

const toolbarActions = [
  { title: '创建', show: 'no' }
];

class ChidStorySets extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.onActionSelected = this.onActionSelected.bind(this);
    this.renderItem = this.renderItem.bind(this); 
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.route.storysets),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.route.storysets),
    });
  }

  onActionSelected() {

  }

  onPress(rowid) {
    const { navigator } = this.props;
    console.log(rowid)
    navigator.push({
      component: ChidStorySet,
      name: 'ChidStorySet',
      rowid: rowid,
      storysets: this.props.route.storysets
    });
  }

  renderItem(storyset, sectionid, rowid) {
    return (
      <TouchableOpacity onPress={()=>this.onPress(rowid)}>
        <View style={styles.containerItem}>
          <Text>
             {storyset.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigator } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <TopToolbar
          title="Main"
          navigator={navigator}
          onActionSelected={this.onActionSelected}
          actions={toolbarActions}
        />
        <ListView
          initialListSize={1}
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          style={styles.listView}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
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
  },
  listView: {
    backgroundColor: '#eeeeec'
  },
  containerItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
});
export default ChidStorySets;

