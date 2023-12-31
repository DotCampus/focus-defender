import React from 'react'
import SideBar from '~components/SideBar'
import DashBoardPage from '~tabs/dashboard'

function OptionsPage() {
  return (
    <div className='flex flex-row w-full'>
      <SideBar />
      <DashBoardPage />
    </div>
  )
}

export default OptionsPage