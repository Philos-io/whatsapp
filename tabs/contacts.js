
'use strict';

var React = require('react-native');v
var contacts = require('./common/contacts');

var {
  View,
  Text,
  Image,
  StyleSheet,
  ListView,
  TouchableHighlight
} = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
    r1 !== r2
  }
});

var Contact = React.createClass({
  
  render(){
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={ styles.contact }>
              <Image style={ styles.contactImage } source={ { uri: this.props.model.image  } } />
              <Text>{this.props.model.name}</Text>
            </View>
          </TouchableHighlight>
    );
  }
});



var Contacts = React.createClass({
  getInitialState(){
      return {
        dataSource: ds.cloneWithRows(contacts)
      };
  },
  render(){
    return (
      <View style={ styles.container }>
            <View style={ styles.header }>
              <Text style={styles.text}>
                  Contacts
                </Text> 
            </View>
            <View style={ styles.content }>
              
              <ListView
              dataSource={this.state.dataSource}
              renderRow={(user) => <Contact model={user}/>}/>
            </View>
          </View>
    );

  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 40,
    backgroundColor: 'red'
  },
  text: {
    textAlign: 'center', 
    marginTop: 10, 
    fontSize: 25
  },
  contactImage:{
    height: 50,
    width: 50,
    marginLeft: 5,
    borderRadius: 5,
  }
});

module.exports = Contacts;
