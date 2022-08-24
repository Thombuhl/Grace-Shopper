import React, { useState } from 'react'
import { useSelector } from 'react-redux'

//createa thunks to edit user profile 

const AccountProfile = () => {
  const [uploadFile, setUploadFile] = useState()
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
      <input type="file" ref={ el => console.log('------',el)} 
        onChange={(ev)=> {
          const file = ev.target.files[0] 
          const reader = new FileReader()
          reader.addEventListener('load',()=>{
            setUploadFile(reader.result)
          })
          reader.readAsDataURL(file)
        }}
      />
      <img src={uploadFile} alt="upload" />
    </div>
  )
}

export default AccountProfile