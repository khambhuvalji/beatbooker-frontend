import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

function Home() {

    const [sidebarToggle,setSidebarToggle]=useState(false)
  
  return (
    <>
        <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
    </>
  )
}

export default Home