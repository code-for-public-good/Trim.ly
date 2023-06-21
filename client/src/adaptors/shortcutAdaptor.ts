import axios from "axios";

const BASE = process.env.REACT_APP_BACKEND_URL + "/api/shortcuts"

export const postShortcut = (original: String) => {
    const res = axios
    .post(BASE + "/add", {
        original: original
    })
    return res
}

export const getShortcut = (shortcut: string ) => {
    const res = axios
    .get(`${BASE}/retrieve/${shortcut}`)

    return res
}