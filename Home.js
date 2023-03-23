import React from "react";
import {StyleSheet, View, TouchableOpacity, Image, Text, Link} from 'react-native';
import {KAKAO_AUTH_URL} from "./OAuth";
function Home({navigation}) {
    return(
        <View>
            {/*<Image source={require(`/assets/kakao_login_medium_narrow.png`)} />*/}
            <Text>홈 화면</Text>
            <View>
                <Text href={KAKAO_AUTH_URL}>
                    <Text style={styles.loginButton}>카카오 로그인</Text>
                    <Image source={{url: `/assets/kakao_login_medium_narrow.png`}} />
                </Text>
            </View>
        </View>
    );
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#fad'
    }
});