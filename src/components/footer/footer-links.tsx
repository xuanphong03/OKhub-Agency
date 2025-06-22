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
      <nav className='pt-14 mr-[4.125rem] xsm:mr-[0rem] xsm:pt-0  xsm:mt-[1.675rem] xsm:w-full'>
        <ul>
          {footer.footer_link.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link.url}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  'text-2xl font-normal group leading-[2.49319rem] no-underline relative pr-[0.325rem] transition-colors duration-300 hover:text-[#1550e5] after:content-[""] after:absolute after:bottom-[-0.15rem] after:left-0 after:w-0 after:h-[0.1575rem] after:bg-[#1550e5] after:transition-all after:duration-400 hover:after:w-full xsm:border-t xsm:w-full xsm:block xsm:after:hidden xsm:pl-[0.75rem] xsm:py-[0.3175rem]',
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
                    'inline-block w-[0.44263rem] h-[0.43794rem] absolute top-0 -right-2 opacity-0 transform -translate-x-[5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[5px] xsm:hidden',
                    hoveredIndex === index && 'opacity-100',
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='pt-14 pr-[3.065rem] xsm:hidden'>
        <div className='flex items-center'>
          <p
            ref={contentRef}
            className="relative text-[#333] text-sm font-normal leading-[1.42188rem] pr-[0.5625rem] after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-[45%] after:bg-[#ccc] after:w-[0.07rem]"
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
            className='pl-[0.5625rem] w-[1.625rem] h-[0.625rem]'
          />
        </div>
        <p
          ref={descRef}
          className='mt-3 w-[13.711rem] text-[#aaa] text-sm font-normal leading-[1.42188rem] xsm:hidden'
        >
          {footer.footer_link[hoveredIndex].link_desc}
        </p>
      </div>
    </div>
  )
}

export default FooterLinks
