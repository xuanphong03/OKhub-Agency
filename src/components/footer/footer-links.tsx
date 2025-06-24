import {cn} from '@/lib/utils'
import type {Footer} from '@/types/footer.interface'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef} from 'react'

interface FooterLinksProps {
  footer: Footer
  hoveredIndex: number
  setHoveredIndex: (index: number) => void
}

const FooterLinks = ({
  footer,
  hoveredIndex,
  setHoveredIndex,
}: FooterLinksProps) => {
  const contentRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const arrowRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!contentRef.current || !descRef.current || !arrowRef.current) return

    gsap.to([contentRef.current, descRef.current, arrowRef.current], {
      opacity: 0,
      y: 20,
      duration: 0.2,
      onComplete: () => {
        gsap.to([contentRef.current, descRef.current, arrowRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
      },
    })
  }, [hoveredIndex])

  return (
    <div className='flex'>
      <nav className='xsm:mr-[0rem] xsm:pt-0 xsm:mt-[1.675rem] xsm:w-full mr-[4.125rem] pt-14'>
        <ul>
          {footer.footer_link.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.link?.url ?? '#'}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  'group xsm:border-t xsm:w-full xsm:block xsm:after:hidden xsm:pl-[0.75rem] xsm:py-[0.3175rem] relative pr-[0.325rem] text-2xl leading-[2.49319rem] font-normal no-underline transition-colors duration-300 after:absolute after:bottom-[-0.15rem] after:left-0 after:h-[0.1575rem] after:w-0 after:bg-[#1550e5] after:transition-all after:duration-400 after:content-[""] hover:text-[#1550e5] hover:after:w-full',
                  hoveredIndex === index
                    ? 'text-[#1550e5] after:w-full'
                    : 'text-[#333]',
                )}
              >
                {item.link.title}
                <Image
                  src={
                    'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-link-arrow.svg'
                  }
                  alt='arrow-gray'
                  width={240}
                  height={240}
                  className={cn(
                    'xsm:hidden absolute top-0 -right-2 inline-block h-[0.43794rem] w-[0.44263rem] -translate-x-[5px] transform opacity-0 transition-all duration-300 group-hover:translate-x-[5px] group-hover:opacity-100',
                    hoveredIndex === index && 'opacity-100',
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='xsm:hidden pt-14 pr-[3.065rem]'>
        <div className='flex items-center'>
          <p
            ref={contentRef}
            className="relative pr-[0.5625rem] text-sm leading-[1.42188rem] font-normal text-[#333] after:absolute after:top-1/2 after:right-0 after:h-[45%] after:w-[0.07rem] after:-translate-y-1/2 after:bg-[#ccc] after:content-['']"
          >
            {footer.footer_link[hoveredIndex].link.title}
          </p>

          <Image
            ref={arrowRef}
            src={
              'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/arrow-gray.svg'
            }
            alt='arrow-gray'
            width={144}
            height={62}
            className='h-[0.625rem] w-[1.625rem] pl-[0.5625rem]'
          />
        </div>
        <p
          ref={descRef}
          className='xsm:hidden mt-3 w-[13.711rem] text-sm leading-[1.42188rem] font-normal text-[#aaa]'
        >
          {footer.footer_link[hoveredIndex].link_desc}
        </p>
      </div>
    </div>
  )
}

export default FooterLinks
