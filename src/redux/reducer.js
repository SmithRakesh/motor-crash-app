import { GET_CRASH_DETAILS_FAILURE,GET_CRASH_DETAILS_SUCCESS,GET_CRASH_DETAILS_REQUEST,GET_SINGLECRASH_DETAILS_FAILURE,GET_SINGLECRASH_DETAILS_REQUEST,GET_SINGLECRASH_DETAILS_SUCCESS } from "./actionTypes";

const init = {
    data:[],
    isLoading:false,
    isError:false,
    singleData:[]
}

export const crashReducer = (state=init,{type,payload}) => {
    switch(type){
        case GET_CRASH_DETAILS_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
            
        case GET_CRASH_DETAILS_SUCCESS:{
            return{
                ...state,
                data:payload,
                isLoading:false,
                isError:false
            }
        }
          
        case GET_CRASH_DETAILS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        
            case GET_SINGLECRASH_DETAILS_REQUEST:{
                return{
                    ...state,
                    isLoading:true
                }
            }
                
            case GET_SINGLECRASH_DETAILS_SUCCESS:{
                return{
                    ...state,
                    singleData:payload,
                    isLoading:false,
                    isError:false
                }
            }
              
            case GET_SINGLECRASH_DETAILS_FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    isError:true
                }
        default:
            return state;
    }
}