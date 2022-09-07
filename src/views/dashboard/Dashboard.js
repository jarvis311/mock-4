import React from 'react'

const Dashboard = () => {
  const username = localStorage.getItem('username')
  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
    </div>
  )
}

export default Dashboard
