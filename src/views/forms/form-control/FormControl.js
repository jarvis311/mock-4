import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormSelect } from '@coreui/react'
import { db } from 'src/firebase/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const FormControl = () => {
  const [age, setAge] = useState('')
  const [dob, setDob] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()
  const tablename = collection(db, 'userData')
  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(tablename, {
      username,
      email,
      age,
      dob,
      gender,
      role,
      time: Date().toLocaleString(),
    }).then(() => {
      console.log('Data is Added')
      setTimeout(() => {
        navigate('/quotes')
      }, 500)
    })
  }

  return (
    <CForm onSubmit={handleSubmit} className="row g-3">
      <CCol xs={6}>
        <CFormInput
          required
          onChange={(e) => setUsername(e.target.value)}
          id="inputUsername"
          label="Username"
          placeholder="Enter Username"
          type="text"
        />
      </CCol>
      <CCol md={6}>
        <CFormInput
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          id="inputEmail4"
          label="Email"
        />
      </CCol>
      <CCol md={6}>
        <CFormInput
          required
          onChange={(e) => setAge(e.target.value)}
          type="number"
          id="inputage"
          label="Age"
        />
      </CCol>
      <CCol md={6}>
        <CFormInput
          required
          onChange={(e) => setDob(e.target.value)}
          type="date"
          id="dob"
          label="Date of Birth"
        />
      </CCol>
      <label>Select gender</label>
      <CFormCheck
        value="Male"
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        label="Male"
        required
      />
      <CFormCheck
        value="Female"
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        label="Female"
        required
      />
      <CCol md={4}>
        <CFormSelect onChange={(e) => setRole(e.target.value)} required id="inputRole" label="Role">
          <option>Choose Your Role</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
          <option value="Full-Stack">Full-Stack</option>
          <option value="Cloud-service">Cloud-service</option>
        </CFormSelect>
      </CCol>
      <CCol xs={12}>
        <CFormCheck required type="checkbox" id="gridCheck" label="Check me out" />
      </CCol>
      <CCol xs={12}>
        <CButton type="submit">Save Data</CButton>
      </CCol>
    </CForm>
  )
}

export default FormControl
