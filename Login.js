import {KAKAO_AUTH_URL} from "./OAuth";
import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import qs from "qs";

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
function Login({navigation}) {
    const [hello, setHello] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8080/Kakao')
            .then(response => navigation.navigate('Kakao')
        )
    .catch(error => console.log(error))
    }, []);

    // const requestToken = async (code: string,) => {
    //     const requestTokenUrl = 'https://kauth.kakao.com/oauth/token';
    //
    //     const options = qs.stringify({
    //         grant_type: 'authorization_code',
    //         client_id: "82ee1e22b77d96174df564b98166f90b",
    //         redirect_uri: "http://172.20.10.4:19000/kakao",
    //         code,
    //     });
    //
    //     try {
    //         const tokenResponse = await axios.post(requestTokenUrl, options);
    //         const ACCESS_TOKEN = tokenResponse.data.access_token;
    //
    //         const body = {
    //             ACCESS_TOKEN,
    //         };
    //         const response = await axios.post("http://172.20.10.4:19000/kakao", body);
    //         const value = response.data;
    //         const result = await storeUser(value);
    //         if (result === 'stored') {
    //             const user = await getData('user');
    //             dispatch(read_S(user));
    //             await navigation.navigate('Main');
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // const getCode = (target: string) => {
    //     const exp = 'code=';
    //     const condition = target.indexOf(exp);
    //     if (condition !== -1) {
    //         const requestCode = target.substring(condition + exp.length);
    //         requestToken(requestCode);
    //         console.log(requestCode);
    //     }
    //
    // };

    const requestToken = async (code: string,) => {
        const requestTokenUrl = 'https://kauth.kakao.com/oauth/token';

        const options = qs.stringify({
            grant_type: 'authorization_code',
            client_id: "82ee1e22b77d96174df564b98166f90b",
            redirect_uri: "http://172.20.10.4:19000/Kakao",
            code,
        });
        // try {
        //     const tokenResponse = await axios.post(requestTokenUrl, options);
        //     const ACCESS_TOKEN = tokenResponse.data.access_token;
        //
        //     const body = {
        //         ACCESS_TOKEN,
        //     };
        //
        //     const response = await axios.post("http://172.20.10.4:19000/kakao", body);
        //     const value = response.data;
        //     const result = await storeUser(value);
        //     // if (result === 'stored') {
        //     //     const user = await getData('user');
        //     //     dispatch(read_S(user));
        //     //     await navigation.navigate('kakao');
        //     // }
        // } catch (e) {
        //     console.log(e);
        // }
    };

    const LogInProgress = (data) => {
        const exp = "code=";
        let condition = data.indexOf(exp);
        if (condition != -1) {
            let request_code = data.substring(condition + exp.length);
            // console.log("access code :: " + request_code);
            // 토큰값 받기
            requestToken(request_code).then(r => {});
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={false}
                style={{ marginTop: 30 }}
                source={{ uri:
                    `https://kauth.kakao.com/oauth/authorize?client_id=82ee1e22b77d96174df564b98166f90b&redirect_uri=http://172.20.10.4:19000/Kakao&response_type=code` }}
                iinjectedJavaScript={runFirst}
                javaScriptEnabled={true}
                onMessage={(event) => { LogInProgress(event.nativeEvent["url"]); }}
            />
        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:100,
        width: 300,
    },
    webview: {
        flex: 1,
    },
    webviewContainer: {
        flex: 1,
        alignSelf: 'stretch',
    },
});