import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [validated, setValidated] = useState(false)
  const navigate = useNavigate()
  const isLogin = false
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
    }
    setValidated(true)
    if (isLogin) {
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyATMOBVAJ0ZZA7a7EBP2WbM2oTPRD0QZwk',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            displayName: username,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then(async (res) => {
        if (res.ok) {
          alert('registration is succesfull')
          setEmail('')
          setUsername('')
          setPassword('')
          setTimeout(() => {
            navigate('/')
          }, 800)
        } else {
          console.log('Error')
          const data = await res.json((res_1) => {})
          let errorMessage = 'Authantication failed'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
          }
        }
      })
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm
                  onSubmit={onSubmitHandler}
                  noValidate
                  validated={validated}
                  className="row g-3 needs-validation"
                >
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      feedbackInvalid="Please enter the username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      required
                      feedbackInvalid="Please enter the email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password}
                      required
                      feedbackInvalid="Please enter the password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
