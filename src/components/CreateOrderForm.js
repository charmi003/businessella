import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addOrder, resetCreateFormData, updateCreateFormData } from '../redux';
import crypto from 'crypto'
import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';
import StyledSubmitButton from './StyledSubmitButton'
import StyledSelect from './StyledSelect';

//This component renders the form for creating a new order
const CreateOrderForm = () => {

    const formData=useSelector((state)=>state.orders.createFormData);
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        e.preventDefault();

        const fieldName=e.target.getAttribute('name');
        const value=e.target.value;

        const newFormData={...formData}
        newFormData[fieldName]=value;
        dispatch(updateCreateFormData(newFormData));
    }


    const submitHandler=(e)=>{
        e.preventDefault();

        const newOrder={
            ...formData,
            id:crypto.randomBytes(12).toString("hex")   //generating a random order id using crypto
        }
        dispatch(addOrder(newOrder))
        dispatch(resetCreateFormData())
        document.querySelector('.create-form select').value='';
    }    

    return (
    <form onSubmit={(e)=>submitHandler(e)} className='create-form'>
        <div>
            <StyledLabel>Customer Name</StyledLabel>
            <StyledInput 
                type="text"
                name='customer_name'
                required
                value={formData.customer_name}
                onChange={handleChange} />
        </div>

        <div>
            <StyledLabel>Customer Email</StyledLabel>
            <StyledInput
                type="email"
                name='customer_email'
                required
                value={formData.customer_email}
                onChange={handleChange} />
        </div>

        <div>
            <StyledLabel>Product</StyledLabel>
            <StyledSelect
                name='product'
                onChange={handleChange}
                className='w-1/2'
                required>
                <option> </option>
                <option value='Product 1'>Product 1</option>
                <option value='Product 2'>Product 2</option>
                <option value='Product 3'>Product 3</option>
            </StyledSelect>
        </div>

        <div>
            <StyledLabel>Quantity</StyledLabel>
            <StyledInput
                type="number"
                name='quantity'
                required
                min='1'
                value={formData.quantity}
                onChange={handleChange}/>
        </div>

        <div className='ml-4'>
            <StyledSubmitButton
                type='submit'
                className='submit-button mt-6 transform scale-100 hover:scale-105'>
                CREATE NEW ORDER
            </StyledSubmitButton>
        </div>

    </form>

    )
}

export default CreateOrderForm
