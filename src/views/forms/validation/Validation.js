import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
const Validation = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [phone, setPhone] = useState('')
  const [backPermission, setBackPermission] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3004/userData/${id}`)

      setName(response.data.name)
      setEmail(response.data.email)
      setDob(response.data.dob)
      setPhone(response.data.phone)
    }
    getData()
  }, [id])

  const handleEditSubmit = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:3004/userData/${id}`, {
        name,
        email,
        dob,
        phone,
      })
      .then((res) => {
        setTimeout(() => {
          navigate('/base/tables')
        }, 1000)
      })
  }

  const focusForm = () => {
    setBackPermission(true)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>EDIT YOUR BIODATA</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onFocus={focusForm} onSubmit={handleEditSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Edit your full name</CFormLabel>
                <CFormInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Edit your Email address</CFormLabel>
                <CFormInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="dob">Edit your date of birth</CFormLabel>
                <CFormInput
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  id="dob"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="phone">Edit your mobile number</CFormLabel>
                <CFormInput
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  id="phone"
                />
              </div>
              <CButton type="submit">Edit Your Data</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
