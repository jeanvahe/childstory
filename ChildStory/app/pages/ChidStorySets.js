import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ListView,
  Text
} from 'react-native';

import TopToolbar from '../components/TopToolbar';
import { toastShort } from '../utils/ToastUtil';

const toolbarActions = [
  { title: '创建', show: 'no' }
];

class ChidStorySets extends React.Component {
  constructor(props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.storysets),
    }
  }

  onActionSelected() {

  }

  _onPress(title) {
    console.log(title)
  }

  renderItem(storyset, sectionid, rowid) {
    return (
      <TouchableOpacity onPress={() => this._onPress(storyset.title)}>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
});
export default ChidStorySets;

