import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import postcss from 'postcss'
const Navbar = () => {
  
  return (
    <main className='w-full h-16 flex items-center justify-center'>
        <Link href={`/`}><div><Image src={logo} height={50}/></div></Link>
    </main>
  )
}

export default Navbar