import type {Credential} from '@/types/footer.interface'
import Image from 'next/image'
import Link from 'next/link'

interface FooterCredentialProps {
  credential: Credential
}

const FooterCredential = ({credential}: FooterCredentialProps) => {
  if (!credential) return null

  return (
    <div className='flex items-end border-b border-[#f1f1f1] relative xsm:justify-between xsm:border xsm:border-[#eee] xsm:rounded-[0.625rem] xsm:m-[0.625rem] xsm:overflow-hidden xsm:p-[1.125rem_1.5rem_0.0625rem_1.25rem]'>
      <Image
        src={
          'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-bg-1.png'
        }
        alt={credential.image?.alt || 'Footer background'}
        width={1000}
        height={1000}
        className='absolute right-[-8rem] bottom-0 z-1 w-[36.8125rem] h-[10.1875rem] xsm:w-full'
      />
      <Image
        src={credential?.image?.url || ''}
        alt={credential?.image?.alt || 'Credential image'}
        width={143}
        height={143}
        className='hidden '
      />

      <div className='p-16 pr-[3.25rem] pb-[1.8575rem] pl-[2.06rem] xsm:p-0 xsm:pr-0 xsm:pb-0 xsm:pl-0'>
        <h4 className='text-[#333] text-2xl font-normal leading-8 xsm:mb-body-16 xsm:w-[10.25rem] xsm:mb-[0.3125rem]'>
          {credential?.title || ''}
        </h4>
        {credential?.desc && (
          <p
            className='text-[#666] text-sm font-normal leading-[1.125rem] w-[11.53772rem] mt-[0.575rem] mb-[1.5125rem] xsm:hidden'
            dangerouslySetInnerHTML={{
              __html: credential.desc,
            }}
          />
        )}

        {credential?.link_download?.url && (
          <Link
            target='_blank'
            href={credential.link_download.url}
            // rel='noopener noreferrer'
            className='relative z-10 cursor-pointer border-none inline-flex max-w-[47.22188rem] bg-[#293844] pr-[0.4375rem] h-[2.925rem] group xsm:h-[2rem]
            xsm:w-[5rem] xsm:mb-[0.725rem]'
          >
            <div className='m-0 w-fit pt-[1.15rem] px-4 pb-[0.73rem] text-white overflow-hidden flex flex-col xsm:pt-[0.625rem] '>
              <span className='text top transition-all duration-300 group-hover:-translate-y-[250%] xsm:text-[0.675rem] group-hover:animate-[flashColor_0.4s_ease-out_forwards] xsm:w-[2.875rem]'>
                {credential.link_download.title}
              </span>
              <span className='text bottom translate-y-full transition-all duration-300 group-hover:-translate-y-full'>
                {credential.link_download.title}
              </span>
            </div>
            <Image
              src={
                'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/arrow-download.svg'
              }
              alt='Download arrow'
              width={241}
              height={241}
              className='mt-4 w-4 h-4 transform translate-x-0 transition-all duration-600 opacity-0 relative z-10 -ml-4 group-hover:translate-x-[1.575rem] group-hover:opacity-100'
            />
            <div className='bg-white mt-[0.4375rem] w-[0.4rem] h-[0.4rem] transform rotate-0 transition-all duration-600 group-hover:w-[2.1875rem] group-hover:h-[2.125rem] group-hover:rotate-[-180deg]'></div>
          </Link>
        )}
      </div>

      {credential?.image?.url && (
        <div className='w-[15.45706rem] h-[8.69456rem] relative z-10 overflow-hidden xsm:w-[7rem] xsm:h-[3.93rem]'>
          <Image
            src={credential.image.url}
            alt={credential.image.alt || 'Credential image'}
            width={1000}
            height={1000}
            className='transform translate-y-4 shadow-[0px_4px_24.8px_0px_rgba(0,0,0,0.27)] transition-transform duration-500 hover:translate-y-0 xsm:w-[7rem] xsm:h-[3.93rem] xsm:translate-y-0'
          />
        </div>
      )}
    </div>
  )
}

export default FooterCredential
