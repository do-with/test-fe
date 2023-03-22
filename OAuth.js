// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음

const CLIENT_ID = "82ee1e22b77d96174df564b98166f90b";
const REDIRECT_URI = "http://127.0.0.1:19006/kakao-login";

export const KAKAO_AUTH_URL =
    `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;