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