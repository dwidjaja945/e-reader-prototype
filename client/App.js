import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native";

import { Epub } from 'epubjs-rn';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		// this._onPressButton = this._onLongPressButton.bind(this);
		this.onPress = this.onPress.bind(this);
	}
	onLongPress = (event) => {
		console.log(event);
		// Alert.alert(event.target)
	}

	onPress(event){
		console.log(event);
	}

	render() {
		return (
		// 	<TouchableHighlight style={styles.container}>
		// 		<Text style={styles.button} onPress={ (event) => { this.onPress(event) } } >Testing this Highlight</Text>
		// 	</TouchableHighlight>
		// )
			<Epub style={styles.epub} onLongPress={(event) => this.onLongPress(event)} src={"https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"}
			flow="scrolled" />
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3',
		color: 'white'
	},
	epub: {
		marginTop: 40,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
