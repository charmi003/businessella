import { ADD_ORDER, DELETE_ORDER, RESET_CREATE_FORM_DATA, RESET_EDIT_FORM_DATA, SET_EDITABLE_ID, UPDATE_CREATE_FORM_DATA, UPDATE_EDIT_FORM_DATA, UPDATE_ORDER } from "./ordersTypes"


//action creator for adding an order to the list
export const addOrder=(order)=>{
    return{
        type:ADD_ORDER,
        payload:order
    }
}


//action creator for updating the create form data
export const updateCreateFormData=(newFormData)=>{
    return{
        type:UPDATE_CREATE_FORM_DATA,
        payload:newFormData
    }
}


//action creator for resetting the create form data back to the default initial
export const resetCreateFormData=()=>{
    return{
        type:RESET_CREATE_FORM_DATA
    }
}



//action creator for deleting an order
export const deleteOrder=(orderId)=>{
    return{
        type:DELETE_ORDER,
        payload:orderId
    }
}


//action creator for updating the edit form data
export const updateEditFormData=(newFormData)=>{
    return{
        type:UPDATE_EDIT_FORM_DATA,
        payload:newFormData
    }
}


//action creator for setting the value of editable id
export const setEditableID=(id)=>{
    return{
        type:SET_EDITABLE_ID,
        payload:id
    }
}



//action creator for updating an order
export const updateOrder=(payload)=>{
    return{
        type:UPDATE_ORDER,
        payload:payload
    }
}



//action creator for restting the edit form data to the default initial
export const resetEditFormData=()=>{
    return{
        type:RESET_EDIT_FORM_DATA
    }
}