import { TYPES } from "../constants/types";



export const modalReducer=(state={modal:false},action)=>{
    switch(action.type){
        case TYPES.MODAL:
            return{
                ...state,
              modal:action.payload
            }


          default:
              return state;  
    }
}