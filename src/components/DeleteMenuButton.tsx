"use client"
import React, { useActionState } from 'react'
import { Button } from './ui/button'
import { Ghost, Trash2 } from 'lucide-react'
import { DeleteMneuAction } from '../../actions/delete-menu'
import { success } from 'zod'

type DeleteProps = {
  id: string;
}

const DeleteMenuButton = ({id}:DeleteProps) => {
    const [formState, action, isPading] = useActionState(DeleteMneuAction.bind(null, id), {success:false})
  return (
    <div>
      <form action={action}>
        <Button type='submit' variant={'ghost'} size={'icon'} className='text-destructive' disabled={isPading}>
            <Trash2 className='h-4 w-4' />
        </Button>
      </form>
    </div>
  )
}

export default DeleteMenuButton
