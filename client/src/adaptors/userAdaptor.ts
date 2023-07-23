import axios from "axios";

const BASE = process.env.REACT_APP_BACKEND_URL + "/api/users"

export const postUser = (nickname: string, email:string, password:string) => {
    const res = axios
    .post(`${BASE}/register`, {
        username: nickname,
        email: email,
        password: password
    })

    return res
}

export const postSignIn = (email:string, password:string) => {
    const res = axios
    .post(`${BASE}/login`, {
        email: email,
        password: password
    }, {withCredentials: true})

    return res
}

export const checkSignIn = () => {
    const res = axios
    .get(`${BASE}/issignedin`, {withCredentials: true})

    return res
}

export const getUserInfo = () => {
    const res = axios
    .get(`${BASE}/userinfo`, {withCredentials: true})

    return res
}

export const signOut = () => {
    const res = axios
    .delete(`${BASE}/logout`, {withCredentials: true})

    return res
}

export const modifyUserInfo = (field: string, updatedValue: string) => {
    const res = axios
    .put(`${BASE}/modifyuserinfo`, {field: field, update: updatedValue}, {withCredentials: true})
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err.response.data
    })
    return res
}