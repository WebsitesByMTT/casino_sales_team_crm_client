import axios from "axios"
import { setData, setError } from "../reducer"
import { baseUrl } from "../../api/api"
import Cookies from "js-cookie"



export const getTlEntries = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/tl/gettlEntries`, { "userToken": useToken })

    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

export const addTlEntry = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/tl/tlEntries`, { ...data, "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

