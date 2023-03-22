// 리다이렉트될 화면
import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "/redux/modules/user";
import Spinner from "react-spinners";
const kakao = (props) => {
    const dispatch = useDispatch();

    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code));
    }, []);

    return <Spinner />;
};

export default kakao;