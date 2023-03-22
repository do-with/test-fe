const CLIENT_ID = '82ee1e22b77d96174df564b98166f90b'
const REDIRECT_URI = 'http://localhost:19006/user/kakao'

export const KAKAO_AUTH_URL =
    `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`