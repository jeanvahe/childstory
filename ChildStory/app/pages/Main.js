import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import TopToolbar from '../components/TopToolbar';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import Storage from '../utils/Storage';
import Home from './Home';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  onHandleSelect(value) {
    console.log(value);
  }

  render() {
    const {navigator, route, reducer} = this.props;
    return (
      <View style={styles.container}>
        <TopToolbarDock
          title="Main"
          navigator={navigator}>
          <Icon.Button
            iconStyle={styles.rightIOS}
            name="ios-create-outline"
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.8}
            onPress={()=>this.onHandleSelect(1)}
          /> 
          <MenuButton  
            buttonStyle={[styles.rightIOS]} 
            button={<Icon name={ 'ios-apps-outline' } size={26} color={'gray'}/> }
            optionsStyle={{top:58, width: 150}}
            menuGroup={menuGroup}
            onSelect={()=>this.onHandleSelect(2)} 
            optionStyle={styles.menuOption}
            optionTextStyle={styles.menuText}
            optionImageStyle={styles.menuImage}
          />
        </TopToolbarDock>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  textStyle:{
    color:'#999',
  },
  selectedTextStyle:{
    color:'black',
  }
});
export default Main;
