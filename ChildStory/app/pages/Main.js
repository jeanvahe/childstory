import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import TopToolbarDock from '../components/TopToolbarDock';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';

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
