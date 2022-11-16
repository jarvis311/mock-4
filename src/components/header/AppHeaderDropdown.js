import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavLink,
} from '@coreui/react'
import { cilUser, cilAccountLogout } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userDataAction } from 'src/Store/userDataSlice'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(userDataAction.userLogOut())
    navigate('/')
  }
  const username = localStorage.getItem('username')
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <span className="mx-2">{username ? username.toUpperCase() : ''}</span>
        <CAvatar
          src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"
          size="md"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2"></CDropdownHeader>
        <CNavLink to="/myprofile" component={NavLink}>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CNavLink>
        <CDropdownItem onClick={handleLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
