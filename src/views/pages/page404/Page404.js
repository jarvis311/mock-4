import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'
import { Link } from 'react-router-dom'

const Page404 = (props) => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <Link to="/" replace className="text-medium-emphasis float-start">
                {props.message}
              </Link>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
