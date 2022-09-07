import React, { useEffect, useState } from 'react'
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormSelect } from '@coreui/react'

import { db } from 'src/firebase/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateData = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [age, setAge] = useState('')
  const [dob, setDob] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, 'userData', id)
      try {
        const docSnap = await getDoc(docRef)
        let data = docSnap.data()
        console.log(data)
        setUsername(data.username)
        setEmail(data.email)
        setAge(data.age)
        setGender(data.gender)
        setDob(data.dob)
        setRole(data.role)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])

  const taskDocRef = doc(db, 'userData', id)
  const updateHandler = async () => {
    try {
      await updateDoc(taskDocRef, {
        username: username,
        age: age,
        dob: dob,
        gender: gender,
        email: email,
        role: role,
      }).then((res) => {
        navigate('/quotes')
      })
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <CForm onSubmit={updateHandler} className="row g-3">
        <CCol xs={6}>
          <CFormInput
            required
            onChange={(e) => setUsername(e.target.value)}
            id="inputUsername"
            label="Username"
            placeholder="Enter Username"
            type="text"
            value={username}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="inputEmail4"
            label="Email"
            value={email}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            required
            onChange={(e) => setAge(e.target.value)}
            type="number"
            id="inputage"
            label="age"
            value={age}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            required
            onChange={(e) => setDob(e.target.value)}
            type="date"
            id="dob"
            label="Date of Birth"
            value={dob}
          />
        </CCol>
        <label>Select gender</label>
        <CFormCheck
          onChange={(e) => setGender(e.target.value)}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="Male"
          value={gender}
          required
        />
        <CFormCheck
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          label="Female"
          required
        />
        <CCol md={4}>
          <CFormSelect
            onChange={(e) => setRole(e.target.value)}
            required
            id="inputRole"
            label="Role"
            value={role}
          >
            <option>Choose your designation</option>
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
          <CButton type="submit">Update Data</CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default UpdateData
