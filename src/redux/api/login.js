import axios from "axios"
import { isBigBoss, setAuthStates, setError } from "../reducer"
import { baseUrl } from "../../api/api"
import Cookies from "js-cookie"

export const loginUser = (data) => async (dispatch, getState) => {

    const response = await axios.post(`${baseUrl}/api/auth/login`, data)
    console.log("loginApiRes", response.data)

    if (response.status == 200) {
        Cookies.set("userToken", response.data.token)

        dispatch(isBigBoss(response.data))

        return dispatch(setAuthStates(response.data))

    }

    else return dispatch(setError(response.data))
}


export const registration = (data) => async (dispatch, getState) => {
    console.log("regis", data)

    const useToken = Cookies.get("userToken")

    const response = await axios.post(`${baseUrl}/api/auth/register`, { ...data, "userToken": useToken })
    console.log("loginApiRes", response.data)
    if (response.status == 200) {
        alert("Employee Successfully added")
    }

    else return dispatch(setError(response.data))
}

