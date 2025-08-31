import type{ MenuItem as item} from '@/generated/prisma'
import { prisma } from '@/lib/prisma'
import React from 'react'
import MenuItem from './Menu-Item'

const MenuList = async() => {
    const menuItems = await prisma.menuItem.findMany({
        orderBy : {
            createdAt:"desc"
        }
    })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            menuItems.map((item:item) =>(
                <MenuItem key={item.id} item={item}/>
                
            ))
        }
      
    </div>
  )
}

export default MenuList
