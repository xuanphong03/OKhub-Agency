'use client'

import CustomBorderedButtonV2 from '@/components/bordered-button-v2'
import type {ILink} from '@/types/header.interface'
import Link from 'next/link'

interface ContactButtonProps {
  contact: ILink
}

const ContactButton = ({contact}: ContactButtonProps) => {
  return (
    <Link
      href={contact.url}
      className='xsm:hidden inline-flex h-[2.5rem] max-w-[24.1075rem] flex-shrink-0 cursor-pointer items-center justify-center no-underline'
    >
      <CustomBorderedButtonV2
        color='#1550E5'
        borderColor='#1550E5'
        borderLine='rgba(21, 80, 229, 0.10)'
      >
        {contact.title}
      </CustomBorderedButtonV2>
    </Link>
  )
}

export default ContactButton
