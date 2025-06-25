'use client'

import type {IBanner} from '@/types/banner.interface'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import {Autoplay, EffectFade, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import './banner-pc.css'

interface BannerPCProps {
  bannerSlides: IBanner[]
}

const BannerPC = ({bannerSlides}: BannerPCProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const highlightedTextRefs = useRef<(HTMLDivElement | null)[]>([])

  // const splitTextByLength = (text: string, maxLen: number): string[] => {
  //   const words = text.split(' ')
  //   const lines: string[] = []
  //   let currentLine = ''

  //   words.forEach((word: string) => {
  //     if ((currentLine + word).length <= maxLen) {
  //       currentLine += (currentLine ? ' ' : '') + word
  //     } else {
  //       if (currentLine) lines.push(currentLine)
  //       currentLine = word
  //     }
  //   })
  //   if (currentLine) lines.push(currentLine)
  //   return lines
  // }

  const paginationConfig = {
    clickable: true,
    renderBullet: (index: number, className: string) => `
      <span class="${className} ${
        index % 2 === 1 ? 'pagination-svg-reverse' : ''
      }">
        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="9" viewBox="0 0 121 9" fill="none">
          <path d="M1.16561 4.73895C0.0303082 6.03128 0.947969 8.05893 2.66815 8.05893L118.203 8.05893C119.923 8.05893 120.84 6.03128 119.705 4.73895L116.332 0.898769C115.952 0.466526 115.404 0.21875 114.829 0.21875H6.04174C5.4664 0.21875 4.91892 0.466526 4.5392 0.898769L1.16561 4.73895Z" fill="#1550E5"/>
        </svg>
      </span>
    `,
  }

  /**
   * Thiết lập hiệu ứng highlight cho các dòng văn bản
   */
  function injectInnerHighlightSpan(
    container: HTMLElement | Document = document,
  ) {
    const highlightLines =
      container.querySelectorAll<HTMLElement>('.highlight-line')
    highlightLines.forEach((line) => {
      const highlightSpan = document.createElement('span')
      highlightSpan.className = 'inner-highlight-line'
      highlightSpan.setAttribute('data-text', line.textContent ?? '')
      line.appendChild(highlightSpan)
    })
  }

  /**
   * Tạo span tạm để đo độ rộng văn bản
   */
  function createMeasurementSpan(element: HTMLElement): HTMLSpanElement {
    const span = document.createElement('span')
    const style = window.getComputedStyle(element)
    Object.assign(span.style, {
      visibility: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      fontSize: style.fontSize,
      fontFamily: style.fontFamily,
      fontWeight: style.fontWeight,
    })
    document.body.appendChild(span)
    return span
  }

  /**
   * Tạo một span highlight-line
   */
  function createHighlightLineSpan(): HTMLSpanElement {
    const span = document.createElement('span')
    span.className = 'highlight-line'
    return span
  }

  useEffect(() => {
    const highlightTargets = highlightedTextRefs.current
    if (!highlightTargets.length) return

    highlightTargets.forEach((el) => {
      if (!el) return

      const fullText = el.textContent ?? ''
      el.textContent = ''

      const tempSpan = createMeasurementSpan(el)
      const words = fullText.split(' ')
      const maxWidth = el.offsetWidth

      let currentLineSpan = createHighlightLineSpan()
      el.appendChild(currentLineSpan)
      let lineBufferText = ''

      words.forEach((word, i) => {
        const testLine = lineBufferText + (lineBufferText ? ' ' : '') + word
        tempSpan.textContent = testLine

        if (tempSpan.offsetWidth > maxWidth && lineBufferText) {
          currentLineSpan.textContent = lineBufferText
          currentLineSpan = createHighlightLineSpan()
          el.appendChild(currentLineSpan)
          lineBufferText = word
        } else {
          lineBufferText = testLine
        }

        if (i === words.length - 1) {
          currentLineSpan.textContent = lineBufferText
        }
      })

      injectInnerHighlightSpan(el)
      document.body.removeChild(tempSpan)
    })
  }, [])

  return (
    <div
      className='xsm:hidden relative block w-[93.55306rem]'
      id='banner-pc'
    >
      <Swiper
        className='banner-pc hide-navigation h-full w-full'
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={paginationConfig}
        effect='fade'
        // autoplay={{delay: 5000, disableOnInteraction: false}}
        allowTouchMove={false}
        loop={true}
      >
        {bannerSlides?.map((item, index) => (
          <SwiperSlide
            className='flex items-center justify-center bg-[#f7f7f7] text-center'
            key={index}
          >
            <div className='relative h-full w-full'>
              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/BannerSlide1.webp'
                alt='Banner Slide 1'
                width={1000}
                height={1000}
                className='pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-[26.71769rem] w-full object-fill'
                draggable={false}
              />
              <Image
                src='/banner/okhub-text.svg'
                alt='Banner Slide 2'
                width={1000}
                height={1000}
                className='pointer-events-none absolute top-[12.39rem] left-1/2 z-0 h-auto w-[40.07163rem] -translate-x-1/2 opacity-60 blur-[7px]'
                draggable={false}
              />

              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
                alt='Banner Slide 3'
                width={1000}
                height={1000}
                className='pointer-events-none absolute -bottom-[19.2rem] left-1/2 z-[1] h-[56.25rem] w-[90rem] -translate-x-[50.5%] bg-cover bg-no-repeat opacity-100'
                draggable={false}
              />

              <Image
                src={item.img_before.url}
                alt='Banner Slide 3'
                width={1000}
                height={1000}
                className={`banner-image before absolute bottom-6 left-1/2 z-[1] h-[28.75rem] w-[39.125rem] -translate-x-1/2 ${
                  isHovered ? 'fade-out' : 'fade-in'
                }`}
                draggable={false}
              />

              <Image
                src={item.img_after.url}
                alt='Banner Slide 4'
                width={1000}
                height={1000}
                className={`banner-image after absolute bottom-6 left-1/2 z-[1] h-[28.75rem] w-[39.125rem] -translate-x-1/2 ${
                  isHovered ? 'fade-in' : 'fade-out'
                }`}
                draggable={false}
              />

              <div className='absolute bottom-[1.61rem] left-[1.78rem] z-10 flex h-[23.40956rem] w-[26.44894rem] overflow-hidden rounded-[1.45rem]'>
                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content1.webp'
                  className='absolute top-0 right-0 bottom-0 left-0 z-[1] h-full w-full object-fill'
                  alt='Dynamic Content 1'
                  width={1000}
                  height={1000}
                />

                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content11.webp'
                  className='absolute top-1/2 left-1/2 z-[1] h-[21.55419rem] w-[24.35263rem] -translate-x-1/2 -translate-y-1/2 object-fill'
                  alt='Dynamic Content 11'
                  width={1000}
                  height={1000}
                />
                <div className='group relative z-30 flex h-full w-full cursor-pointer flex-col justify-between pt-7 pb-7 pl-[1.71rem]'>
                  <Image
                    draggable={false}
                    src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-buble.webp'
                    className='absolute top-[4.92em] left-[1.94rem] z-31 h-[5.4375rem] w-[13.25rem] object-cover opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100'
                    alt='Box Buble'
                    width={1000}
                    height={1000}
                  />

                  <div className='inline-flex h-fit w-fit rounded-lg bg-[#1550e5] px-5 py-[0.55775rem] shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:-rotate-[3.85deg]'>
                    <Image
                      src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon1.webp'
                      className='mr-[0.35544rem] h-6 w-6'
                      alt='Box Icon 1'
                      width={1000}
                      height={1000}
                    />
                    <span className='text-[0.97606rem] font-medium text-[#f7f7f7]'>
                      Mọi người cho rằng:
                    </span>
                  </div>

                  <p className='relative z-[1] w-[21.875rem] pl-[0.58rem] text-start text-[1.125rem] leading-[134%] font-normal text-[#081d1a]'>
                    {item.home_banner_des_l}
                  </p>
                </div>
              </div>

              <div className='absolute right-[1.78rem] bottom-[1.61rem] z-10 flex h-[23.40956rem] w-[26.44894rem] overflow-hidden rounded-[1.45rem]'>
                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content1.webp'
                  className='absolute top-0 right-0 bottom-0 left-0 z-[1] h-full w-full scale-x-[-1] object-fill'
                  alt='Dynamic Content 1 Mirrored'
                  width={1000}
                  height={1000}
                />

                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content11.webp'
                  className='absolute top-1/2 left-1/2 z-[1] h-[21.55419rem] w-[24.35263rem] -translate-x-1/2 -translate-y-1/2 scale-x-[-1] object-fill'
                  alt='Dynamic Content 11 Mirrored'
                  width={1000}
                  height={1000}
                />

                <div
                  className='group hover-div content-box2 relative z-30 flex h-full w-full cursor-pointer flex-col items-end justify-between pt-7 pr-[1.71rem] pb-7'
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    draggable={false}
                    src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-bat.webp'
                    className='absolute top-[4.92em] right-[4.01rem] z-31 h-[2.625rem] w-[15.1875rem] opacity-100'
                    alt='Box Bat'
                    width={1000}
                    height={1000}
                  />

                  <Image
                    draggable={false}
                    src='/banner/okhub-icon-v2.svg'
                    className='absolute right-[2.18rem] bottom-[3.19em] z-0 h-[7.90594rem] w-auto'
                    alt='Box Search'
                    width={252.3357}
                    height={126.4948}
                  />

                  <div className='inline-flex h-fit w-fit rounded-lg bg-[#1550e5] px-5 py-[0.55775rem] shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:rotate-[3.58deg]'>
                    <Image
                      draggable={false}
                      src='/banner/okhub-icon-v1.svg'
                      className='mr-[0.34rem] h-auto w-[1.58025rem]'
                      alt=''
                      width={25.2836}
                      height={25.2836}
                    />
                    <span className='text-[0.97606rem] font-medium text-[#f7f7f7]'>
                      OKhub cho rằng:
                    </span>
                  </div>

                  <div
                    ref={(el) => {
                      highlightedTextRefs.current[index] = el
                    }}
                    className='banner-text relative z-[1] w-[21.875rem] pr-[0.58rem] text-start text-[1.125rem] leading-[134%] font-normal text-[#081d1a] transition-colors duration-300 ease-in-out'
                  >
                    {item.home_banner_des_r}
                    {/* {splitTextByLength(item.home_banner_des_r, 35).map(
                      (line, i) => (
                        <div
                          key={i}
                          className='text-line my-[0.15rem] w-fit whitespace-nowrap'
                          data-text={line}
                        >
                          {line}
                        </div>
                      ),
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerPC
