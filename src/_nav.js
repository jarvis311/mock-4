import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilNotes } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Perform operation',
  },
  {
    component: CNavGroup,
    name: 'User Data',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add User',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Show User List',
        to: '/quotes',
      },
    ],
  },
]

export default _nav
