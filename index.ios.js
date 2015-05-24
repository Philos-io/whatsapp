var React = require('react-native');

var {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} = React;


var whatsapp = React.createClass({
  getInitialState(){
    return {
      selectedTab: "chat"
    }
  },
  render(){
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="Favorites" selected={ this.state.selectedTab === 'Favorites' } icon={require('image!favorites')}>
          <View style={ styles.homePage }>
            <Text>Favorites</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Recents" selected={ this.state.selectedTab === 'Recents' } icon={require('image!recents')}>
          <View style={ styles.homePage }>
            <Text>Recents</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Contacts" selected={ this.state.selectedTab === 'Contacts' } icon={require('image!contacts')}>
          <View style={ styles.homePage }>
            <Text>Contacts</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Chats" selected={ this.state.selectedTab === 'Chats' } icon={require('image!chats')}>
          <View style={ styles.homePage }>
            <Text>Chats</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Settings" selected={ this.state.selectedTab === 'Settings' } icon={require('image!settings')}>
          <View style={ styles.homePage }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  homePage: {
    backgroundColor: '#',
    flex: 1
  }
});

AppRegistry.registerComponent('whatsapp', () => whatsapp);


