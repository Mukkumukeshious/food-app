import DeleteMenuButton from '@/components/DeleteMenuButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import UpdateMenuButton from '@/components/UpdateMenuButton'
import { prisma } from '@/lib/prisma'
import { Car } from 'lucide-react'
import React from 'react'

const page = async() => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return (
    <div className='container mx-auto px-4 my-4 lg:col-span-2'>
      <h1 className='font-bold text-2xl'>Menu</h1>
      <Card className='my-2'>
        <CardHeader>
          <CardTitle>
            Current Menu
          </CardTitle>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className='text-right'>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  menuItems.map((item) =>(
                    <TableRow key={item.id}>
                      <TableCell className='font-medium'>{item.name}</TableCell>
                      <TableCell className='font-medium'>{item.description}</TableCell>
                      <TableCell className='font-medium'>{item.category}</TableCell>
                      <TableCell className='font-medium'>{item.price}</TableCell>
                      <TableCell className='text-right'>
                        <div className='flex justify-end space-x-2'>
                          {/* update */}
                          <UpdateMenuButton item={item}/>
                          {/* delete */}
                          <DeleteMenuButton id={item.id} />

                        </div>
                      </TableCell>

                    </TableRow>
                  ))

                }
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default page
