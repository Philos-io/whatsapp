'use strict';

var React = require('react-native');

var {
	View,
	Text,
	Image,
	StyleSheet,
	ListView
} = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
		r1 !== r2
	}
});

var Settings = React.createClass({
	getInitialState(){
	  	return {
	    	dataSource: ds.cloneWithRows(['Davy', 'Philos', 'Yann']),
	  	};
	},
	render(){
		return (
			<View style={ styles.container }>
		        <View style={ styles.header }>
	        		<Text style={styles.text}>
		            	Settings
		          	</Text>
		        </View>
		        <View style={ styles.content }>
		          
		          <ListView
				      dataSource={this.state.dataSource}
				      renderRow={(name) => <Text>{name}</Text>}/>
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
    backgroundColor: 'brown'
  },
  text: {
  	textAlign: 'center', 
  	marginTop: 10, 
  	fontSize: 25
  }
});

module.exports = Settings;