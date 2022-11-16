import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUserData } from 'src/Store/userDataSlice'

const FormControl = () => {
  const [age, setAge] = useState('')
  const [dob, setDob] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [checked, setChecked] = useState(false)
  const [validated, setValidated] = useState(false)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userData = {
    username,
    email,
    age,
    dob,
    gender,
    role,
    checked,
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
    }
    setValidated(true)
    if (
      username !== '' &&
      age !== '' &&
      email !== '' &&
      dob !== '' &&
      gender !== '' &&
      role !== '' &&
      checked !== true
    ) {
      try {
        
        dispatch(addUserData(userData))
        setUsername('')
        setAge('')
        setDob('')
        setGender('')
        setEmail('')
        setRole('')
        setChecked('')

        navigate('/quotes')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <CForm
      onSubmit={handleSubmit}
      noValidate
      validated={validated}
      className="row g-3 needs-validation"
    >
      <CCol xs={6}>
        <CFormInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="inputUsername"
          label="Username"
          type="text"
          feedbackInvalid="Please enter the username"
          required
        />
      </CCol>
      <CCol md={6}>
        <CFormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="inputEmail4"
          label="Email"
          feedbackInvalid="Please enter the email"
          aria-describedby="exampleFormControlInputHelpInline"
          required
        />
      </CCol>
      <CCol md={6}>
        <CFormInput
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          id="inputage"
          label="Age"
          feedbackInvalid="Please enter the age"
          required
        />
      </CCol>
      <CCol md={6}>
        <CFormInput
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          type="date"
          id="dob"
          label="Date of Birth"
          feedbackInvalid="Please choose the date of birth"
          required
        />
      </CCol>
      <label>Select gender</label>
      <CFormCheck
        value="Male"
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        name="radio-stacked"
        id="validationFormCheck2"
        label="Male"
        required
      />
      <CFormCheck
        value="Female"
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        name="radio-stacked"
        id="validationFormCheck2"
        label="Female"
        feedbackInvalid="Please Select gender"
        required
      />

      <CCol md={4}>
        <CFormSelect
          value={role}
          onChange={(e) => setRole(e.target.value)}
          feedbackInvalid="Please provide a valid role"
          id="inputRole"
          label="Role"
          required
        >
          <option value="">Choose Your Role</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
          <option value="Full-Stack">Full-Stack</option>
          <option value="Cloud-service">Cloud-service</option>
        </CFormSelect>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          value={!checked}
          onChange={(e) => setChecked(e.target.value)}
          label="Agree to terms and conditions"
          feedbackInvalid="You must agree before submitting"
          required
          onClick={() => setChecked(!checked)}
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton type="submit">Save Data</CButton>
      </CCol>
    </CForm>
  )
}

export default FormControl
