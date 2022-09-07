import {
  CButton,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { db } from 'src/firebase/firebase'

const ShowData = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const q = query(collection(db, 'userData'), orderBy('time', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      )
    })
  }, [])

  return (
    <>
      {data.length === 0 && (
        <div className="spinner">
          <CSpinner />
          <p>Please wait...</p>
        </div>
      )}
      <CTable bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date Of birth</CTableHeaderCell>
            <CTableHeaderCell scope="col">Age</CTableHeaderCell>
            <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
            <CTableHeaderCell scope="col">Operation</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((item) => (
            <CTableRow key={item.id}>
              <CTableHeaderCell scope="row">{item.data.username}</CTableHeaderCell>
              <CTableDataCell>{item.data.email}</CTableDataCell>
              <CTableDataCell>{item.data.dob}</CTableDataCell>
              <CTableDataCell>{item.data.age}</CTableDataCell>
              <CTableDataCell>{item.data.gender}</CTableDataCell>
              <CTableDataCell>{item.data.role}</CTableDataCell>
              <CTableDataCell>
                <Link to={`/edit/${item.id}`}>
                  <CButton color="primary">EDIT</CButton>
                </Link>
                <Link to={`/delete/${item.id}`}>
                  <CButton color="danger mx-2">DELETE</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}

export default ShowData
