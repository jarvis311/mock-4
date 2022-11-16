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
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiSortAlt2 } from 'react-icons/bi'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUserData } from 'src/Store/userDataSlice'

const ShowData = () => {  
  const dispatch = useDispatch()
  
  const userListData = useSelector(state => state.users.userList) 
  useEffect(() => {
    dispatch(fetchAllUserData())
  }, [])

  // pagination
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 6
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(userListData.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(userListData.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, userListData])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userListData.length
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
    setItemOffset(newOffset)
  }

  return (
    <>
      {userListData.length === 0 && (
        <div className="spinner">
          <CSpinner />
          <p>Please wait...</p>
        </div>
      )}
      <CTable bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">
              Name{' '}
              <span className="mx-4 float-end">
                <BiSortAlt2 onClick={() => shorting('username')} />
              </span>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Email{' '}
              <span className="mx-4 float-end">
                <BiSortAlt2 onClick={() => shorting('email')} />
              </span>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Date Of birth <BiSortAlt2 onClick={() => shorting('dob')} />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Age{' '}
              <span className="mx-4 float-end">
                <BiSortAlt2 onClick={() => shorting('age')} />
              </span>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Gender{' '}
              <span className="mx-4 float-end">
                <BiSortAlt2 onClick={() => shorting('gender')} />
              </span>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Role{' '}
              <span className="mx-4 float-end">
                <BiSortAlt2 onClick={() => shorting('role')} />
              </span>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">Operation</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentItems.map((item) => (
            <CTableRow key={item._id}>
              <CTableHeaderCell scope="row">{item.username}</CTableHeaderCell>
              <CTableDataCell>{item.email}</CTableDataCell>
              <CTableDataCell>{item.dob}</CTableDataCell>
              <CTableDataCell>{item.age}</CTableDataCell>
              <CTableDataCell>{item.gender}</CTableDataCell>
              <CTableDataCell>{item.role}</CTableDataCell>
              <CTableDataCell>
                <Link to={`/edit/${item._id}`}>
                  <CButton color="primary">EDIT</CButton>
                </Link>
                <Link to={`/delete/${item._id}`}>
                  <CButton color="danger mx-2">DELETE</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <ReactPaginate
        className=""
        breakLabel="..."
        nextLabel="  >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="  <"
        renderOnZeroPageCount={null}
        pageLinkClassName="page-num"
        containerClassName="pagination"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  )
}

export default ShowData
