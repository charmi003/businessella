import JSON_DATA from '../../DummyData.json'
import { ADD_ORDER, DELETE_ORDER, RESET_CREATE_FORM_DATA, RESET_EDIT_FORM_DATA, SET_EDITABLE_ID, UPDATE_CREATE_FORM_DATA, UPDATE_EDIT_FORM_DATA, UPDATE_ORDER } from './ordersTypes'

const initialState={
    ordersList:JSON_DATA,
    createFormData:{
        customer_name:'',
        customer_email:'',
        product:'',
        quantity:''
    },
    editFormData:{
        id:null,
        customer_name:null,
        customer_email:null,
        product:null,
        quantity:null
    },
    editableId:null    //editableId stores the order id of the order that has currently been choosen for editing
} 


const ordersReducer=(currState=initialState,action)=>{
    switch(action.type){
        case ADD_ORDER:
            return{
                ...currState,
                ordersList:[action.payload,...currState.ordersList]
            }
        case UPDATE_CREATE_FORM_DATA:
            return{
                ...currState,
                createFormData:action.payload
            }
        case RESET_CREATE_FORM_DATA:
            return{
                ...currState,
                createFormData:initialState.createFormData
            }
        case DELETE_ORDER:
            return{
                ...currState,
                ordersList:currState.ordersList.filter((order)=>order.id!==action.payload)
            }
        case UPDATE_EDIT_FORM_DATA:
        return{
            ...currState,
            editFormData:action.payload
        }
        case SET_EDITABLE_ID:
            return{
                ...currState,
                editableId:action.payload,
            }
        case UPDATE_ORDER:
            let idx=currState.ordersList.findIndex((order)=>order.id===action.payload.id)
            currState.ordersList.splice(idx,1,action.payload.order)
            return{
                ...currState,
                ordersList:[...currState.ordersList]
            }
        case RESET_EDIT_FORM_DATA:
            return{
                ...currState,
                editFormData:initialState.editFormData
            }
        default:
            return currState
    }
}

export default ordersReducer