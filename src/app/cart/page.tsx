"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useCartStore } from '../../../store/store'
import CartItem from '@/components/CartItem'
type Props = {

}

const page = (props: Props) => {
    const cartItems = useCartStore((store) => store.cart);
  return (
    <div className='conatiner mx-auto py-8'>
        <div className='gap-4 mb-8'>
            <Button asChild variant={'ghost'}>
                <Link href={'/menu'} className='flex items-center gap-1'>
                <ArrowLeft className='w-4 h-4'/>
                Back to Menu</Link>
            </Button>

        </div>
        <h1 className='text-3xl font-bold'>Your Cart

        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            <div className='lg:col-span-2 space-y-6'>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((item) => <CartItem key={item.id} item={item}/>)) :
                        (
                            <div className='text-center py-12'>
                            <p className='text-lg text-muted-foreground'>Your cart is empty</p>
                            <Button asChild className='mt-4'>
                                <Link href={'/menu'}>Browse Mneu</Link>
                            </Button>
                            </div>
                        )
                    

                }

            </div>

        </div>
      
    </div>
  )
}

export default page
