import { TYPES } from "../constants/types";



export const userReducer=(state={user:null},action)=>{
    switch(action.type){
        case TYPES.LOGIN:
            return{
                ...state,
              user:action.payload
            }
         case TYPES.LOGOUT: 
         return{
            ...state,
          user:null
        }

          default:
              return state;  
    }
}