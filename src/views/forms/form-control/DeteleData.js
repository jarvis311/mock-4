import { CSpinner } from '@coreui/react'
import { deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from 'src/firebase/firebase'

const DeteleData = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const deleteRecord = async () => {
      await deleteDoc(doc(db, 'userData', id))
    }
    deleteRecord()
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
