import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base

// Buttons
//Forms

const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const DeteleData = React.lazy(() => import('./views/forms/form-control/DeteleData'))

// Icons
const ShowData = React.lazy(() => import('./views/forms/form-control/ShowData'))
const UpdateData = React.lazy(() => import('./views/forms/form-control/UpdateData'))

//Coustom
const Profile = React.lazy(() => import('./CustomComponents/Profile'))
const isAuth = localStorage.getItem('token')
const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/readquotes', name: 'Dashboard', element: Dashboard },
  { path: '/myprofile', name: 'Profile', element: Profile },
  { path: '/quotes', name: 'ShowData', element: ShowData },
  { path: '/edit/:id', name: 'UpdateData', element: UpdateData },
  { path: '/delete/:id', name: 'Dashboard', element: DeteleData },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },

]

export default routes
