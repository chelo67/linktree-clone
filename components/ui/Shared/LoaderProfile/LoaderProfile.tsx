import { LoaderCircle } from 'lucide-react'
import React from 'react'

export function LoaderProfile() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-2'>
        <LoaderCircle className='animate-spin w-10 h-10' />
        <p>Loading LinkTree-clone...</p>
    </div>
  )
}
