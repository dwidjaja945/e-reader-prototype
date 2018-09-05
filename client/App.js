import React from 'react';
import { Clipboard , StyleSheet, Text, View, TouchableHighlight, Alert , WebView } from "react-native";

import { Epub } from 'epubjs-rn';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			highlightedText: ""
		}
		this.getHighlightedText = this.getHighlightedText.bind(this);
	}

	async _getContent() {
		const content = await Clipboard.getString();
		return content;
	}

	getHighlightedText() {
		return new Promise( (resolve , reject) => {
			try {
				const highlightedText = this._getContent();
				resolve(highlightedText);
			} catch ( ex ) {
				reject(ex);
				console.log(ex);
			}
		});
	}

	selectText = (event, rendition) => {
		Promise.all([this.getHighlightedText()])
			.then((data) => {
				this.setState({
					highlightedText: data[0]
				});
			})
			.catch( ( err ) => {
				console.log("promise errors" , err );
			} );

		// console.log('event', event);
		// console.log('epubCFI.prototype.parse(event)', epubCFI.prototype.parse(event));
		// const parsedEvent = epubCFI.prototype.parse(event);
		// console.log("window" , window);

		// console.log("epubCFI.prototype.getRange(event)", epubCFI.prototype.getRange(event));
	}

	render() {

		return (
		<Epub onSelected={ (event, a) => this.selectText(event, a) } style={styles.epub} src={"https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"}
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
