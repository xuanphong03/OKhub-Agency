'use client'

import type {Credential, Footer, SocialList} from '@/types/footer.interface'
import gsap from 'gsap'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import FooterCopyright from './footer/footer-copyright'
import FooterCredential from './footer/footer-credential'
import FooterHotline from './footer/footer-hotline'
import FooterLinks from './footer/footer-links'
import FooterLogo from './footer/footer-logo'

const Footer = ({
  footer,
  social,
  credential,
}: {
  footer: Footer
  social: SocialList
  credential: Credential
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)
  const footerRef = useRef<HTMLElement>(null)
  const overflowRef = useRef<HTMLDivElement>(null)

  // Animation khi scroll đến footer
  useEffect(() => {
    if (!footerRef.current || !overflowRef.current) return

    const footer = footerRef.current
    const overlay = overflowRef.current

    gsap.set(footer, {marginTop: 0})
    gsap.set(overlay, {opacity: 0})

    // Delay khởi tạo để ScrollSmoother chắc chắn đã xong
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
          // markers: true,
        },
      })

      tl.to(footer, {marginTop: '-100px', duration: 1}).to(
        overlay,
        {opacity: 1, duration: 1},
        '<',
      )
    }, 150)

    // Cleanup
    return () => {
      clearTimeout(timeout)
    }
  }, [footer])

  return (
    <div className='relative z-50 bg-white max-sm:pb-[4rem]'>
      <div
        className='pointer-events-none absolute bottom-full left-0 z-100 h-[1000px] w-full bg-gradient-to-b from-transparent to-[rgba(102,102,102,0.1)] opacity-0 backdrop-blur-[4.45px] transition-opacity duration-300'
        ref={overflowRef}
      ></div>
      <footer
        ref={footerRef}
        className='xsm:h-[31.2rem] relative h-[24em] overflow-hidden border border-[#f1f1f1] will-change-transform'
      >
        <div className='absolute top-[-2.675rem] left-[-6.875rem] h-[27.8125rem] w-[57.5625rem] opacity-50'>
          <Image
            src={
              'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-bg-image-new.png'
            }
            alt={footer?.logo_footer.alt}
            width={57.5625}
            height={27.8125}
            className='xsm:hidden h-full w-full object-cover'
          />
        </div>

        <div className='xsm:w-full xsm:h-auto xsm:flex-col-reverse mx-auto flex h-[24.9375rem] w-[93.5625rem]'>
          <div className='xsm:flex-col-reverse xsm:w-full xsm:h-auto flex w-[57.45rem] justify-between border-r border-[#f1f1f1]'>
            <FooterLogo
              footer={footer}
              globalSocial={social}
            />
            <FooterLinks
              footer={footer}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </div>

          <div className='flex-1'>
            {credential && <FooterCredential credential={credential} />}
            <FooterHotline footer={footer} />
          </div>
        </div>
      </footer>

      <FooterCopyright />
    </div>
  )
}

export default Footer
