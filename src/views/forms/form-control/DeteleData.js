import { CSpinner } from '@coreui/react'
import { deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from 'src/firebase/firebase'
import { deleteUserData } from 'src/Store/userDataSlice'

const DeteleData = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(deleteUserData(id))
    setTimeout(() => {
      navigate('/quotes')
    }, 1000)
  }, [id, navigate])
  return (
    <div className="spinner">
      <CSpinner />
      <p>Please wait...</p>
    </div>
  )
}

export default DeteleData
