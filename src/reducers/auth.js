
import {Set_CurrentUser,google_Login, Set_Rate, Set_TopMechanics} from "../actions/Types"
import isEmpty from "lodash/isEmpty"
const initialState={
    isAuthenticated:false,
    user:{},
data:{},
flag:false,
users:{},
mechanics:[]
}
export default (state=initialState,action={})=>{
    switch(action.type){
        case Set_CurrentUser:return{
            isAuthenticated:!isEmpty(action.user), 
         
            user:action.user
        }  
        case google_Login:return{
            data:action.data,
            flag:true
        }  
        case Set_Rate:return{
            users:action.users,
            }  
            case Set_TopMechanics:return{
                mechanics:action.mechanics,
                }  
        default: return state
    }
}