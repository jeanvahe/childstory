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
import ChidStoryAdd from './ChidStoryAdd';

const toolbarActions = [
  { title: '增加', iconName: 'md-add', show: 'always' }
];

class ChidStorySet extends React.Component {
  constructor(props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
    this.renderItem = this.renderItem.bind(this); 
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([]),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.route.storysets[nextProps.route.rowid].stories),
    });
  }

  onActionSelected() {
    const { navigator } = this.props;
    navigator.push({
      component: ChidStoryAdd,
      name: 'ChidStoryAdd',
      rowid: this.props.route.rowid,
      storysets: this.props.route.storysets
    });
  }

  onPress(story) {
  }

  renderItem(story, sectionid, rowid) {
    return (
      <TouchableOpacity onPress={() => this.onPress(story)}>
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
               {route.storysets[route.rowid].title}
            </Text>
          </View>
        </TouchableOpacity>
        <ListView
          initialListSize={0}
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
