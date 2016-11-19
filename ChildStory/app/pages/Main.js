import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  InteractionManager,
  Text
} from 'react-native';

import TopToolbarDock from '../components/TopToolbarDock';
import MenuButton from 'react-native-menu-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Storage from '../utils/Storage';    

import ChidStorySets from './ChidStorySets';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { storysetsActions } = this.props;
    InteractionManager.runAfterInteractions(() => {
      Storage.get('storysets')
        .then((storysets) => {
          if (!storysets) {
            return;
          }
          storysetsActions.loadStorySet(storysets);
        });
    });
  }

  onHandleSelect(value) {
    const { navigator } = this.props;
    if (value === 1) {
      navigator.push({
        component: ChidStorySets,
        name: 'ChidStorySets'
      });
    } else if (value === 2) {
      navigator.push({
        component: ChidStoryPublic,
        name: 'ChidStoryPublic'
      });
    }
  }

  render() {
    const {navigator, route} = this.props;
const menuGroup= [{key:"0",value:"menu1",text:"发起群聊"},{key:"1",value:"menu2",text:"添加朋友"},{key:"2",value:     "menu3",text:"扫一扫"},{key:"3",value:"menu4",text:"收付款" }]

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
  },
  rightIOS: {
    marginTop: 20,
    marginRight: 8
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  menuText: {
    fontSize: 15,
    marginLeft: 15,
    color: 'black'
  }
});
export default Main;
