import axios from "axios"
import { setData, setError } from "../reducer"
import { baseUrl } from "../../api/api"
import Cookies from "js-cookie"



export const firstDepositeEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/firstDepositeEntry`, { ...data,"userToken": useToken })

    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

export const firstDepositeGetApi = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/getFirstDepositeEntry`, { "userToken": useToken })

    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

export const freeToPlayEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/freeToPlay`, { ...data, "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}
export const freeToPlayGetApi = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/getFreeToPlay`, {  "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}


export const freshMessageEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/freshMessages`, { ...data, "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

export const freshMessageGetApi = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/getFreshMessages`, { "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

