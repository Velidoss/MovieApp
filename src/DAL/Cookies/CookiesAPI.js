import Cookies from "js-cookie";

const cookiesAPI = {
    getSessionCookie: () => (Cookies.get('session_id')),

    setSessionCookie: (sessionId)=>(Cookies.set('session_id', sessionId)),

    deleteSessionCookie: ()=>(Cookies.remove('session_id')),

    getRequestTokenCookie: () => (Cookies.get('request_token')),

    setRequestTokenCookie: (requestToken)=>(Cookies.set('request_token', requestToken)),

    deleteRequestTokenCookie: ()=>(Cookies.remove('request_token')),
};

export default cookiesAPI;