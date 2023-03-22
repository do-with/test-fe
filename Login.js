import {KAKAO_AUTH_URL} from "./OAuth";
import React from "react";
import { View, TouchableOpacity, Image} from 'react-native';

function Login() {
    return(
        <View>
            <a href={KAKAO_AUTH_URL}>
                <Image src="/assets/kakao_login_medium_narrow.png" />
            </a>
        </View>
    );
};
export default Login;