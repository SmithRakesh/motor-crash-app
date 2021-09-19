import { GET_CRASH_DETAILS_FAILURE,GET_CRASH_DETAILS_SUCCESS,GET_CRASH_DETAILS_REQUEST,GET_SINGLECRASH_DETAILS_FAILURE,GET_SINGLECRASH_DETAILS_REQUEST,GET_SINGLECRASH_DETAILS_SUCCESS } from "./actionTypes";
import axios from "axios";

const getCrashDetailsRequest = () => ({
    type:GET_CRASH_DETAILS_REQUEST
});

const getCrashDetailsSuccess = (payload) => ({
    type:GET_CRASH_DETAILS_SUCCESS,
    payload
});

const getCrashDetailsFailure = () => ({
    type:GET_CRASH_DETAILS_FAILURE
});

const getCrashDetails = (payload) => (dispatch) => {
    dispatch(getCrashDetailsRequest())

    return axios(`https://data.cityofnewyork.us/resource/h9gi-nx95.json${payload}`)
    .then(res => dispatch(getCrashDetailsSuccess(res.data)))
    .catch(err => dispatch(getCrashDetailsFailure()))
}

const getSingleCrashDetailsRequest = () => ({
    type:GET_SINGLECRASH_DETAILS_REQUEST
});

const getSingleCrashDetailsSuccess = (payload) => ({
    type:GET_SINGLECRASH_DETAILS_SUCCESS,
    payload
});

const getSingleCrashDetailsFailure = () => ({
    type:GET_SINGLECRASH_DETAILS_FAILURE
});

const getSingleCrashDetails = (payload) => (dispatch) => {
    dispatch(getSingleCrashDetailsRequest())

    return axios(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?collision_id=${payload}`)
    .then(res => dispatch(getSingleCrashDetailsSuccess(res.data)))
    .catch(err => dispatch(getSingleCrashDetailsFailure()))
}
export {getCrashDetails,getSingleCrashDetails}
