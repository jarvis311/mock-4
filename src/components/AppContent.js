import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
  const isAuth = localStorage.getItem('token')
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          {isAuth ? (
            <Route path="/dashboard" element={<Navigate to="/dashboard" />} />
          ) : (
            <Route path="/login" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
