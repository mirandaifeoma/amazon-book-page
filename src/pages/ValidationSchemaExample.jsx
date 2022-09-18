import React, { useState } from 'react'
import { Form } from '../components/Form'
import { Login } from '../components/Login'
import { Dashboard } from '../components/Dashboard'

export const ValidationSchemaExample = () => {
  const [user, setUser] = useState('login')

  const handleClick = (props) => {
    console.log(props)
    setUser(props)
  }


  return (
    <div>
      {user === 'form' ? <Form handleClick={handleClick} /> : ''}
      {user === 'login' ? <Login handleClick={handleClick} /> : ''}
      {user === 'dashboard' ? <Dashboard handleClick={handleClick} /> : ''}
    </div>
  )
}
