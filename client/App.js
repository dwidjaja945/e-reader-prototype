import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Epub, Streamer } from 'epubjs-rn';

// Might not need
import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';
// End

// const server = new StaticServer(8080);
// server.start().then( url => {
// 	debugger;
// 	console.log("URL served at : " , url);
// })
// debugger;
// const path = RNFS.DocumentDirectoryPath;
// console.log(path);



// // ========================================================================================================================
// // const streamer = new Streamer();

// // streamer.start("8899")
// // 	.then( origin => {
// // 		console.log("Served from origin: " , origin);
// // 		return streamer.get("https://s3.amazonaws.com/epubjs/books/moby-dick.epub");
// // 	})
// // 	.then( src => {
// // 		console.log("Loading from src :", src);
// // 	})

export default class App extends React.Component {
	render() {
		return (
			<View id='area' style={styles.container}>
				<Epub src={"https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"}
					flow={"scrolled"} />
			</View>
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
	epub: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});
