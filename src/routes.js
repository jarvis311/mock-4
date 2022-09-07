import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base

// Buttons
//Forms

const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const DeteleData = React.lazy(() => import('./views/forms/form-control/DeteleData'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))
const ShowData = React.lazy(() => import('./views/forms/form-control/ShowData'))
const UpdateData = React.lazy(() => import('./views/forms/form-control/UpdateData'))

// Notifications
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

//Coustom
const Profile = React.lazy(() => import('./CustomComponents/Profile'))

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/readquotes', name: 'Dashboard', element: Dashboard },
  { path: '/myprofile', name: 'Profile', element: Profile },
  { path: '/quotes', name: 'ShowData', element: ShowData },
  { path: '/edit/:id', name: 'UpdateData', element: UpdateData },
  { path: '/delete/:id', name: 'Dashboard', element: DeteleData },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
