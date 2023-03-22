import {StyleSheet, View} from 'react-native';
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

const KakaoAuthHandle = () => {
    const navigation = useNavigation();

    useEffect(() => {
        async function handleKakaoAuth() {
            const url = new URL(window.location.href);
            const code = url.searchParams.get('code');

            const response = await fetch(
                `http://localhost:8080/user/kakao/callback?code=${code}`,
                {
                    method: 'GET',
                },
            );
            const data = await response.json();
            const token = data.headers.authorization;
            localStorage.setItem('token', token);
            navigation.navigate('Home');
        }
        handleKakaoAuth().then();
    }, []);

    return (
        <View style={styles.container}></View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default KakaoAuthHandle;

// import axios from 'axios';
// import { useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {View} from "react-native-web";
//
// const KakaoAuthHandle = () => {
//     const navigation = useNavigation();
//
//     useEffect(() => {
//         let code = new URL(window.location.href).searchParams.get('code');
//         const kakaoLogin = async () => {
//             await axios
//                 .get(`http://localhost:8080/user/kakao/callback?code=${code}`)
//                 .then((res) => {
//                     localStorage.setItem('token', res.headers.authorization);
//                     navigation.navigate('Home');
//                 });
//         };
//         kakaoLogin();
//     }, [navigation]);
//
//     return  <View style={styles.container}></View>;
//
//     const styles = StyleSheet.create({
//         container: {
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//     });
// };
//
// export default KakaoAuthHandle;

