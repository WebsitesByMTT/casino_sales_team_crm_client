import axios from "axios"
import { setAuthStates, setError } from "../reducer"
import { baseUrl } from "../../api/api"
import Cookies from "js-cookie"

export const loginUser = (data) => async (dispatch, getState) => {

    const response = await axios.post(`${baseUrl}/api/auth/login`, data)
    console.log("loginApiRes", response.data)
    if (response.status == 200) {
        Cookies.set("userToken", response.data.token)
        return dispatch(setAuthStates(response.data))

    }

    else return dispatch(setError(response.data))
}

