import axios from "axios"
import { setData, setError } from "../reducer"
import { baseUrl } from "../../api/api"
import Cookies from "js-cookie"
import { getDateStamp } from "../../utils/getDateTime"


export const accountRecordEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/manager/accountRecords`, { ...data,  'date': getDateStamp(),"userToken": useToken })

    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

export const accountRecordsGetApi = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/manager/getAccountRecords`, { "userToken": useToken })

    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

export const balanceSheetEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/manager/balanceSheet`, { ...data, 'date': getDateStamp(), "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}
export const balanceSheetGetApi = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/manager/getBalanceSheet`, { "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}


export const coinSheetEntryApi = (data) => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/manager/coinSheet`, { ...data, 'date': getDateStamp(), "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

export const coinSheetGetAPi = () => async (dispatch, getState) => {

    const useToken = Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/api/manager/getCoinSheet`, { "userToken": useToken })
    console.log("setDaata", response.data)

    if (response.status == 200)
        return dispatch(setData(response.data))

    else return dispatch(setError(response.data))
}

