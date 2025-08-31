import MenuList from '@/components/MenuList'
import React from 'react'

const page = () => {
  return (
    <div className='conatiner mx-auto py-8'>
        <div className='gap-4 mb-8'>
            <h1 className='text-3xl font-bold'>Our Menu</h1>

        </div>
        <MenuList/>
      
    </div>
  )
}

export default page
