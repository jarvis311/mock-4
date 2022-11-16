import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormSelect,
} from '@coreui/react'

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from 'src/Store/userDataSlice'
import axios from 'axios'
import { ActionCodeOperation } from 'firebase/auth'

const UpdateData = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [age, setAge] = useState('')
  const [dob, setDob] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [validated, setValidated] = useState(false)
  const [checkbox, setCheckbox] = useState(true)
  const [role, setRole] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/get-single-user/${id}`)
      .then((result) => {
        return result.data
      })
      .then((item) => {
        setUsername(item.username)
        setAge(item.age)
        setDob(item.dob)
        setGender(item.gender)
        setEmail(item.email)
        setRole(item.role)
        setCheckbox(item.checked)
      })
  }, [id])

  const UserUpdatedData = {
    username,
    email,
    age,
    dob,
    gender,
    role,
    checkbox,
  }

  const updateHandler = async (e) => {
    e.preventDefault()
    if (
      username !== '' &&
      email !== '' &&
      age !== '' &&
      dob !== '' &&
      gender !== '' &&
      role !== '' &&
      checkbox !== false
    ) {
      try {
        dispatch(updateUserData({ userId: id, UserUpdatedData: UserUpdatedData }))
      } catch (error) {
        console.log(error)
      }
    }
    }
  return (
    <>
      <CForm
        onSubmit={updateHandler}
        noValidate
        validated={validated}
        className="row g-3 needs-validation"
      >
        <CCol xs={6}>
          <CFormInput
            required
            onChange={(e) => setUsername(e.target.value)}
            id="inputUsername"
            label="Username"
            placeholder="Enter Username"
            type="text"
            value={username}
            feedbackInvalid="Please enter the username"
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="inputEmail4"
            label="Email"
            feedbackInvalid="Please enter the email"
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
            feedbackInvalid="Please enter the age"
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
            feedbackInvalid="Please enter the date of birth"
          />
        </CCol>
        <label>Select gender</label>
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          label="Male"
          checked={gender === 'Male'}
          value="Male"
          required
          onChange={(e) => setGender(e.target.value)}
        />
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          label="Female"
          checked={gender === 'Female'}
          value="Female"
          feedbackInvalid="Please enter the date of gender"
          required
          onChange={(e) => setGender(e.target.value)}
        />
        <CCol md={4}>
          <CFormSelect
            onChange={(e) => setRole(e.target.value)}
            required
            id="inputRole"
            label="Role"
            value={role}
            feedbackInvalid="Please enter the date of role"
          >
            <option value="">Choose your designation</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="Cloud-service">Cloud-service</option>
          </CFormSelect>
        </CCol>
        <CCol xs={12}>
          <CFormCheck
            required
            type="checkbox"
            id="gridCheck"
            label="Check me out"
            checked={checkbox}
            onChange={(e) => setCheckbox(!checkbox)}
            feedbackInvalid="You must agree before submitting"
          />
          <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton type="submit">Update Data</CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default UpdateData
