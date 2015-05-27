var React = require('react-native');

var {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} = React;

var Contacts  = require('./tabs/contacts');
var Chats  = require('./tabs/chats');
var Recents  = require('./tabs/recents');
var Favorites  = require('./tabs/favorites');
var Settings  = require('./tabs/settings');


var whatsapp = React.createClass({
  getInitialState(){
    return {
      selectedTab: "Contacts"
    }
  },

  _changeTab(tab){
    this.setState({
      selectedTab: tab
    });
  },

  render(){
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="Favorites" onPress={() => this._changeTab('Favorites')} selected={ this.state.selectedTab === 'Favorites' } icon={require('image!favorites')}>
          <Favorites/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Recents" onPress={() => this._changeTab('Recents')} selected={ this.state.selectedTab === 'Recents' } icon={require('image!recents')}>
          <Recents/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Contacts" onPress={() => this._changeTab('Contacts')} selected={ this.state.selectedTab === 'Contacts' } icon={require('image!contacts')}>
          <Contacts/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Chats" onPress={() => this._changeTab('Chats')} selected={ this.state.selectedTab === 'Chats' } icon={require('image!chats')}>
          <Chats/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Settings" onPress={() => this._changeTab('Settings')} selected={ this.state.selectedTab === 'Settings' } icon={require('image!settings')}>
          <Settings/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  homePage: {
    backgroundColor: '#fff',
    flex: 1
  }
});

AppRegistry.registerComponent('whatsapp', () => whatsapp);


