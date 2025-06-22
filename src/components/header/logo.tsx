'use client'

import Link from 'next/link'
import ImageFallback from '@/components/image/ImageFallback'
import type {Logo} from '@/types/header.interface'

interface LogoProps {
  logo: Logo
}

const Logo = ({logo}: LogoProps) => {
  return (
    <Link
      href='/'
      className='flex-shrink-0 no-underline inline-flex w-[9.375rem] cursor-pointer mr-[4rem] xsm:w-[6.98025rem]'
    >
      <ImageFallback
        src={logo.url}
        alt={logo.alt}
        width={300}
        height={25.5}
      />
    </Link>
  )
}

export default Logo
