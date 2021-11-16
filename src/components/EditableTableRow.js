import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { resetEditFormData, setEditableID, updateOrder } from '../redux';
import { useFormik } from 'formik'


//This component renders the editable row in case the user chooses to edit the row data
//Used formik for validaton since we can't have form inside tbody ...so the default validation feature is not available
const EditableTableRow = ({rowData}) => {

    const formData=useSelector((state)=>state.orders.editFormData);
    const editableId=useSelector((state)=> state.orders.editableId);
    const dispatch=useDispatch();

    const initialValues=formData;

    const onSubmit=values=>{
        const newOrder={
            ...values,
            id:editableId
        }
        dispatch(updateOrder({id:editableId,order:newOrder}));
        dispatch(setEditableID(null));
        dispatch(resetEditFormData())
    }
    

    const validate=values=>{
        let errors={}

        if(!values.customer_name)
            errors.customer_name='Please fill out this field'

        if(!values.customer_email)
            errors.customer_email='Please fill out this field'
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.customer_email))
            errors.customer_email='Please enter a valid Email Id'

        if(!values.quantity)
            errors.quantity='Please fill out this field'

        return errors
    }


    //init part
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
            <tr>
                <td>
                    <input
                        type='text'
                        name='id'
                        defaultValue={rowData.id}
                        disabled
                        className='w-full text-center'/>
                </td>

                <td>
                    <input
                        type="text"
                        name='customer_name'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.customer_name}
                        className='border-2 w-full text-center'/>

                    {formik.errors.customer_name ? 
                    <div className='text-red-400'>{formik.errors.customer_name}</div> 
                    : null
                    }

                </td>

                <td>
                    <input
                        type="email"
                        name='customer_email'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.customer_email}
                        className='border-2 w-full text-center'/>

                    {formik.errors.customer_email ?
                    <div className='text-red-400'>{formik.errors.customer_email}</div> 
                    : null
                    }

                </td>

                <td>
                    <select
                        name='product'
                        onChange={formik.handleChange}
                        value={formik.values.product}
                        className='w-full text-center'>
                        <option value='Product 1'>Product 1</option>
                        <option value='Product 2'>Product 2</option>
                        <option value='Product 3'>Product 3</option>
                    </select>
                </td>

                <td>
                    <input
                        className='text-center' 
                        type="number"
                        name='quantity'
                        required
                        min='1'
                        value={formik.values.quantity}
                        onChange={formik.handleChange}/>

                    {formik.errors.quantity? 
                    <div className='text-red-400'>{formik.errors.quantity}</div>
                    : null
                    }

                </td>

                <td>
                    <button
                        className='border-2 px-1 border-gray-400 m-2 text-gray-600 transform hover:scale-110'
                        onClick={formik.handleSubmit}>
                        Update
                    </button>

                    <button
                        className='border-2 px-1 border-gray-400 m-2 text-gray-600 transform hover:scale-110'
                        onClick={(e)=>{
                            dispatch(setEditableID(null))
                            dispatch(resetEditFormData())
                        }}>
                        Cancel
                    </button>
                </td>

            </tr>
    )
}

export default EditableTableRow
