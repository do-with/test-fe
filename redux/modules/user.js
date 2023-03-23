// import axios from 'axios';
// import React, {useEffect} from 'react';
//
// function user(code, {navigation}){
//     React.useEffect(() => {
//         (async () => {
//             try {
//                 const res = await axios.get(`kakao-login/code=${code}`);
//                 const token = res.headers.authorization;
//                 window.localStorage.setItem('token', token);
//                 console.log(res);
//                 console.log(1);
//                 navigation.navigate('Main');
//
//             } catch (e) {
//                 console.error(e);
//                 navigation.navigate('Login');
//             }
//         })();
//     }, []);
//
//     return {
//
//     }
// };
// export default user;