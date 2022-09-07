import React from 'react'
import Page404 from 'src/views/pages/page404/Page404'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      {localStorage.getItem('token') ? <AppSidebar /> : ''}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          {localStorage.getItem('token') ? <AppContent /> : <Page404 message="Login please" />}
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
