"use client"
import type{ MenuItem as item} from '@/generated/prisma'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import {Image, ImageKitProvider } from '@imagekit/next'
import { useCartStore } from '../../store/store'

type Props = {
  item :item
}

const MenuItem = (props:Props) => {
  const addToCart = useCartStore((store) => store.addToCart);
  return (
    <Card className='overflow-hidden transition-all hover:shadow-lg'>
      <CardHeader className='p-0 pb-4'>
        <ImageKitProvider urlEndpoint='https://ik.imagekit.io/mukeshious'>
        <Image
        src={props.item.imageUrl!}
        width={400}
        height={400}
        alt='Menu Item Image'
        className='w-full h-48 object-cover'
        
        
        />

        </ImageKitProvider>

      </CardHeader>
      <CardContent>
        <h3 className='text-lg font-semibold'>{props.item.name}</h3>
        <p className='text-sm text-muted-foreground'>{props.item.description}</p>
        <p className='mt-2 font-bold'>${props.item.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <button onClick={()=> addToCart(props.item)} className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>
          Add to Cart
        </button>
      </CardFooter>

    </Card>
  )
}

export default MenuItem
