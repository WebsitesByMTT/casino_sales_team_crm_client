import axios from "axios"
import { setData, setError } from "../reducer"
import { baseUrl } from "../../api/api"
import Cookies from "js-cookie"
import { getDateStamp, getTimeStamp } from "../../utils/getDateTime"



export const firstDepositeEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")


    const response = await axios.post(`${baseUrl}/api/agent/firstDepositeEntry`, { ...data, 'date': getDateStamp(), "userToken": useToken })

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
    const response = await axios.post(`${baseUrl}/api/agent/freeToPlay`, { ...data, 'time': getTimeStamp(), 'date': getDateStamp(), "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}
export const freeToPlayGetApi = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/getFreeToPlay`, { "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}


export const freshMessageEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/agent/freshMessages`, { ...data, 'time': getTimeStamp(), 'date': getDateStamp(), "userToken": useToken })
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

