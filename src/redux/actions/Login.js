import { TYPES } from "../constants/types"



export const login=({displayName,email,photoURL})=>dispatch=>{
    dispatch({
        type:TYPES.LOGIN,payload:{displayName,email,photoURL}
    })
}