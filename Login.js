// import {KAKAO_AUTH_URL} from "./OAuth";
// import React from "react";
// import { StyleSheet, View, Text, Link } from 'react-native';
// import { WebView } from 'react-native-webview';
// import axios from 'axios';
// import {Platform} from 'react-native';
//
// function Login({navigation}) {
//     const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('CHECK!')`;
//
//     const getCode = (target: string) => {
//         const exp = 'code=';
//         const condition = target.indexOf(exp);
//         if (condition !== -1) {
//             const requestCode = target.substring(condition + exp.length);
//             requestToken(requestCode).then(r => {});
//         }
//     };
//
//     const requestToken = async (code: string,) => {
//         const requestTokenUrl = 'https://kauth.kakao.com/oauth/token';
//
//         const options = qs.stringify({
//             grant_type: 'authorization_code',
//             client_id: "82ee1e22b77d96174df564b98166f90b",
//             redirect_uri: "http://127.0.0.1:19006/kakao-login",
//             // redirect_uri: "http://192.168.221.13:19000/kakao-login",
//             code,
//         });
//
//         try {
//             const tokenResponse = await axios.post(requestTokenUrl, options);
//             const ACCESS_TOKEN = tokenResponse.data.access_token;
//
//             const body = {
//                 ACCESS_TOKEN,
//             };
//             const response = await axios.post(REDIRECT_URI, body);
//             const value = response.data;
//             const result = await storeUser(value);
//             if (result === 'stored') {
//                 const user = await getData('user');
//                 dispatch(read_S(user));
//                 await navigation.navigate('Main');
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     };
//
//     return (
//         <View>
//         {
//         (function() {
//             if (Platform.OS === 'web') return (<Text>흑</Text>);
//             else return (
//                 <WebView
//                 originWhitelist={['*']}
//                 scalesPageToFit={false}
//                 style={styles.webview}
//                 source={{
//                     uri: {KAKAO_AUTH_URL},
//                 }}
//                 injectedJavaScript={INJECTED_JAVASCRIPT}
//                 javaScriptEnabled={true}
//                 onMessage={event => {
//                     const data = event.nativeEvent.url;
//                     getCode(data);
//                 }}
//
//                 // onMessage ... :: webview에서 온 데이터를 event handler로 감지하여 parseAuthCood로 전달
//             />);
//         })()
//         }
//         </View>
//     );
// };
// export default Login;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft:100,
//         width: 300,
//     },
//     webview: {
//         flex: 1,
//     },
//     webviewContainer: {
//         flex: 1,
//         alignSelf: 'stretch',
//     },
// });