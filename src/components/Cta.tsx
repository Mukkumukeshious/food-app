import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-orange-300g text-primary-foreground">
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
                Ready for our ultimate dishes and services...
            </h2>
            <p className='text-muted-foreground text-xl'>Book Your Table or Order your favourite dihes</p>
            <Button asChild className='mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80'>
                <Link href={"/order"}>Order Now </Link>
            </Button>

        </div>
      
    </section>
  )
}

export default Cta
