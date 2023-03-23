//리다이렉트될 화면
import React from "react";
import {View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
function kakao({navigation}) {
    useEffect(() => {
        async function handle() {
            try {
                const url = new URL(window.location.href);
                const code = url.searchParams.get('code');
                console.log(code);
                const response = await fetch(
                    `http://localhost:19006/kakao?code=${code}`,
                    {
                        method: 'GET',
                    },
                );
                const data = await response.json();
                const token = data.headers.authorization;

                localStorage.setItem('token', token);
                navigation.navigate('Main');
            } catch(e){
                console.error(e);
                navigation.navigate('Home');
            }
        }

        handle().then();
    }, []);

}
export default kakao;


