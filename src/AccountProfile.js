import React from 'react'
import { useSelector } from 'react-redux'

const AccountProfile = () => {
  const user = useSelector(state => state.auth)
  return (
    <div>
      <h1> AccountProfile </h1>
      <div>
        <div>
          <img src={`data:image/png;base64, ${user.profileImage}`} width='25%' /> 
          <h2>Name: {user.firstName}, {user.lastName}</h2>
          <h3>Username: {user.username}</h3>
          <h4>Email: {user.email}</h4>
        </div>
      </div>
    </div>
  )
}

export default AccountProfile