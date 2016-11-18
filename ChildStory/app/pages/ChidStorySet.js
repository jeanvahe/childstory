import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import TopToolbar from '../components/TopToolbar';

const toolbarActions = [
  { title: '增加', iconName: 'md-add', show: 'always' }
];

class ChidStorySet extends React.Component {
  constructor(props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.storyset.storyset.stories[this.props.route.rowid]),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: dataSource.cloneWithRows(this.props.storyset.storyset.stories[this.props.route.rowid]),
    });
  }

  onActionSelected() {
    navigator.push({
      component: ChidStoryAdd,
      name: 'ChidStoryAdd',
      rowid: this.props.route.rowid
    });
  }

  onPress(story) {
  }

  renderItem(story, sectionid, rowid) {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.containerItem}>
          <Text>
             {story.content}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    const { navigator, route } = this.props;
    return (
      <View style={styles.container}>
        <TopToolbar
          title="Main"
          navigator={navigator}
          onActionSelected={this.onActionSelected}
          actions={toolbarActions}
        />
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.containerItem}>
            <Text>
               {route.storyset.title}
            </Text>
          </View>
        </TouchableOpacity>
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
  listView: {
    backgroundColor: '#eeeeec'
  },
  containerItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
  },
})
export default ChidStorySet;
