import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { db } from 'src/firebase/firebase'
import '../views/forms/form-control/style.css'
const Profile = () => {
  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')

  const docRef = doc(db, 'profileData', '6obeatlgekdj4iY9CXmt')
  getDoc(docRef).then((doc) => {
    console.log(doc.data(), doc.id)
  })

  return (
    <CCard className="profile" style={{ width: '18rem' }}>
      <CCardImage
        style={{ borderRadius: '50%' }}
        orientation="top"
        src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"
      />
      <hr />
      <CCardBody>
        <CCardTitle>{username}</CCardTitle>
        <CCardText>{email}</CCardText>
        <button disabled type="btn btn-primary" className="btn btn-primary">
          Edit Your Profile
        </button>
      </CCardBody>
    </CCard>
  )
}

export default Profile
