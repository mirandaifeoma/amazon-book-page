import React, { useState, useEffect } from 'react'

export const Form = ({ handleClick }) => {
  const intialValues = {
    surname: '',
    firstName: '',
    secondName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    password: '',
    confirmpassword: '',
  }

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validatedItems, setValidatedItems] = useState([]);
  const [open, setOpen] = useState(false); 

  const submit = () => {
    console.log(formValues)
  }

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmitting(true)
    console.log(validatedItems.length)
    if(validatedItems.length == 6 ){
      handleClick('dashboard')
    }else{
      return ''
    }
  }

  //form validation handler
  const validate = (values) => {
    let errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.surname) {
      errors.surname = 'Input Surname'
    } else if (values.surname) {
      setValidatedItems(validatedItems.push(1))
      errors.surname = 'correct'
    }

    if (!values.firstName) {
      errors.firstName = 'Input Firstname'
    } else if (values.firstName) {
      setValidatedItems(validatedItems.push(2))
      errors.firstName = ''
    }

    if (!values.secondName) {
      errors.secondName = 'Input Secondname'
    } else if (values.secondName) {
      setValidatedItems(validatedItems.push(3))
      errors.secondName = ''
    }

    if (!values.email) {
      errors.email = 'Input Email'
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email format'
    }

    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'fill in the date of birth'
    } else if (values.dateOfBirth) {
      setValidatedItems(validatedItems.push(4))
      errors.dateOfBirth = ''
    }

    if (!values.phone) {
      errors.phone = 'Phone number is compulsory'
    } else if (values.phone) {
      setValidatedItems(validatedItems.push(5))
      errors.phone = ''
    }

    if (!values.password) {
      errors.password = 'Input password'
    } else if (values.password.length < 8) {
      errors.password = 'Password must be up to eight characters!'
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = 'Confirm password'
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = 'Password did not match!'
    } else {
      setValidatedItems(validatedItems.push(6))
    }

    return errors
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit()
    }
  }, [formErrors])

  return (
    <div className='container'>
      <h1 className='create'>Create Account</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className='success-msg'>Form submitted successfully</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className='form-row'>
          <label htmlFor='text'>Surname</label>
          <input
            type='text'
            name='surname'
            id='surname'
            value={formValues.surname}
            onChange={handleChange}
          />
          {formErrors.surname && <span>{formErrors.surname}</span>}
        </div>
        <div className='form-row'>
          <label htmlFor='text'>firstName</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={formValues.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && <span>{formErrors.firstName}</span>}
        </div>
        <div className='form-row'>
          <label htmlFor='text'>secondName</label>
          <input
            type='text'
            name='secondName'
            id='secondName'
            value={formValues.secondName}
            onChange={handleChange}
          />
          {formErrors.secondName && <span>{formErrors.secondName}</span>}
        </div>
        <div className='form-row'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div className='form-row'>
          <label htmlFor='date'>dateOfBirth</label>
          <input
            type='date'
            name='dateOfBirth'
            id='dateOfBirth'
            value={formValues.dateOfBirth}
            onChange={handleChange}
          />
          {formErrors.dateOfBirth && <span>{formErrors.dateOfBirth}</span>}
        </div>
        <div className='form-row'>
          <label htmlFor='number'>phone</label>
          <input
            type='number'
            name='phone'
            id='phone'
            value={formValues.phone}
            onChange={handleChange}
          />
          {formErrors.phone && <span>{formErrors.phone}</span>}
        </div>

        <div className='form-row'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className='form-row'>
          <label htmlFor='password'>confirm Password</label>
          <input
            type='password'
            name='confirmpassword'
            id='confirmpassword'
            value={formValues.confirmpassword}
            onChange={handleChange}
          />
          {formErrors.confirmpassword && (
            <span>{formErrors.confirmpassword}</span>
          )}
        </div>

        <button 
        type='submit' 
          onClick={() => setOpen((prev) => !prev) }
          className={open ? 'formButton ' : 'close'}>
          Submit
        </button>
      </form>
    </div>
  )
}
