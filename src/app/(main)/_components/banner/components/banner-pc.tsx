'use client'

import type {IBanner} from '@/types/banner.interface'
import Image from 'next/image'
import {useRef, useState} from 'react'
import {Autoplay, EffectFade, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface BannerPCProps {
  bannerSlides: IBanner[]
}

const BannerPC = ({bannerSlides}: BannerPCProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  const splitTextByLength = (text: string, maxLen: number): string[] => {
    const words = text.split(' ')
    const lines: string[] = []
    let currentLine = ''

    words.forEach((word: string) => {
      if ((currentLine + word).length <= maxLen) {
        currentLine += (currentLine ? ' ' : '') + word
      } else {
        if (currentLine) lines.push(currentLine)
        currentLine = word
      }
    })
    if (currentLine) lines.push(currentLine)
    return lines
  }

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

  return (
    <div
      className='w-[93.55306rem] relative block xsm:hidden'
      id='banner-pc'
    >
      <style
        jsx
        global
      >{`
        .banner-pc .swiper-pagination {
          bottom: 0 !important;
          width: 30.34381rem !important;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 50% !important;
          transform: translateX(-50%);
          position: absolute;
        }
        .banner-pc .swiper-pagination-bullet {
          flex: 1;
          height: 0.56rem;
          background: none;
          padding: 0;
          margin: 0 !important;
          opacity: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .banner-pc .swiper-pagination-bullet svg path {
          fill: #e4eaef;
          transition: fill 0.2s;
        }

        .banner-pc .swiper-pagination-bullet-active svg path {
          fill: #1550e5;
        }

        .banner-pc .pagination-svg-reverse {
          transform: scaleY(-1);
        }

        .banner-image {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .banner-image.fade-out {
          opacity: 0;
        }

        .banner-image.fade-in {
          opacity: 1;
          transform: scale(1);
        }

        .banner-text {
          position: relative;
          transition: color 0.3s ease;
        }

        .banner-text .text-line {
          position: relative;
          z-index: 50;
          color: #081d1a;
          transition: color 0.5s ease;
        }

        .banner-text .text-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #1550e5;
          z-index: -1;
          transition: width 0.5s ease;
        }

        .banner-text .text-line::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          color: #ffffff;
          overflow: hidden;
          white-space: nowrap;
          transition: width 0.5s ease;
        }

        .hover-div:hover .text-line::before {
          width: 100%;
        }

        .hover-div:hover .text-line::after {
          width: 100%;
        }
      `}</style>
      <Swiper
        className='banner-pc hide-navigation w-full h-full'
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={paginationConfig}
        effect='fade'
        autoplay={{delay: 5000, disableOnInteraction: false}}
        allowTouchMove={false}
        loop={true}
      >
        {bannerSlides?.map((item, index) => (
          <SwiperSlide
            className='text-center bg-[#f7f7f7] flex justify-center items-center'
            key={index}
          >
            <div className='relative w-full h-full'>
              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/BannerSlide1.webp'
                alt='Banner Slide 1'
                width={1000}
                height={1000}
                className='absolute left-0 right-0 bottom-0 w-full h-[26.71769rem] object-fill z-[1] pointer-events-none'
                draggable={false}
              />
              <Image
                src='/banner/okhub-text.svg'
                alt='Banner Slide 2'
                width={1000}
                height={1000}
                className='absolute w-[40.07163rem] h-auto left-1/2 top-[12.39rem] -translate-x-1/2 z-0 pointer-events-none opacity-60 blur-[7px]'
                draggable={false}
              />

              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
                alt='Banner Slide 3'
                width={1000}
                height={1000}
                className='absolute w-[90rem] h-[56.25rem] left-1/2 -bottom-[19.2rem] -translate-x-[50.5%] pointer-events-none opacity-100 bg-no-repeat bg-cover z-[1]'
                draggable={false}
              />

              <Image
                src={item.img_before.url}
                alt='Banner Slide 3'
                width={1000}
                height={1000}
                className={`banner-image before absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] ${
                  isHovered ? 'fade-out' : 'fade-in'
                }`}
                draggable={false}
              />

              <Image
                src={item.img_after.url}
                alt='Banner Slide 4'
                width={1000}
                height={1000}
                className={`banner-image after absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] ${
                  isHovered ? 'fade-in' : 'fade-out'
                }`}
                draggable={false}
              />

              <div className='rounded-[1.45rem] overflow-hidden absolute bottom-[1.61rem] w-[26.44894rem] h-[23.40956rem] z-10 flex left-[1.78rem]'>
                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content1.webp'
                  className='absolute top-0 left-0 right-0 bottom-0 w-full h-full object-fill z-[1]'
                  alt='Dynamic Content 1'
                  width={1000}
                  height={1000}
                />

                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content11.webp'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1]'
                  alt='Dynamic Content 11'
                  width={1000}
                  height={1000}
                />
                <div className='w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pl-[1.71rem] cursor-pointer group'>
                  <Image
                    draggable={false}
                    src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-buble.webp'
                    className='absolute top-[4.92em] w-[13.25rem] h-[5.4375rem] z-31 opacity-0 transition-all duration-300 ease-in-out object-cover left-[1.94rem] group-hover:opacity-100'
                    alt='Box Buble'
                    width={1000}
                    height={1000}
                  />

                  <div className='h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:-rotate-[3.85deg]'>
                    <Image
                      src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon1.webp'
                      className='w-6 h-6 mr-[0.35544rem]'
                      alt='Box Icon 1'
                      width={1000}
                      height={1000}
                    />
                    <span className='text-[#f7f7f7] text-[0.97606rem] font-medium'>
                      Mọi người cho rằng:
                    </span>
                  </div>

                  <p className='text-start w-[21.875rem] text-[#081d1a] text-[1.39438rem] font-normal leading-[134%] relative z-[1] pl-[0.58rem]'>
                    {item.home_banner_des_l}
                  </p>
                </div>
              </div>

              <div className='rounded-[1.45rem] overflow-hidden absolute bottom-[1.61rem] w-[26.44894rem] h-[23.40956rem] z-10 flex right-[1.78rem]'>
                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content1.webp'
                  className='absolute top-0 left-0 right-0 bottom-0 w-full h-full object-fill z-[1] scale-x-[-1]'
                  alt='Dynamic Content 1 Mirrored'
                  width={1000}
                  height={1000}
                />

                <Image
                  draggable={false}
                  src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content11.webp'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1] scale-x-[-1]'
                  alt='Dynamic Content 11 Mirrored'
                  width={1000}
                  height={1000}
                />

                <div
                  className='w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pr-[1.71rem] cursor-pointer items-end group hover-div'
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    draggable={false}
                    src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-bat.webp'
                    className='absolute top-[4.92em] right-[4.01rem] w-[15.1875rem] h-[2.625rem] z-31 opacity-100'
                    alt='Box Bat'
                    width={1000}
                    height={1000}
                  />

                  <Image
                    draggable={false}
                    src='/banner/okhub-icon-v2.svg'
                    className='absolute bottom-[3.19em] right-[2.18rem] h-[7.90594rem] w-auto z-0'
                    alt='Box Search'
                    width={252.3357}
                    height={126.4948}
                  />

                  <div className='h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:rotate-[3.58deg]'>
                    <Image
                      draggable={false}
                      src='/banner/okhub-icon-v1.svg'
                      className='w-[1.58025rem] h-auto mr-[0.34rem]'
                      alt=''
                      width={25.2836}
                      height={25.2836}
                    />
                    <span className='text-[#f7f7f7] text-[0.97606rem] font-medium'>
                      OKhub cho rằng:
                    </span>
                  </div>

                  <div
                    ref={(el) => {
                      textRefs.current[index] = el
                    }}
                    className='banner-text relative text-start w-[21.875rem] text-[#081d1a] text-[1.39438rem] font-normal leading-[134%] pr-[0.58rem] transition-colors duration-300 ease-in-out z-[1]'
                  >
                    {splitTextByLength(item.home_banner_des_r, 35).map(
                      (line, i) => (
                        <div
                          key={i}
                          className='w-fit my-[0.15rem] text-line whitespace-nowrap'
                          data-text={line}
                        >
                          {line}
                        </div>
                      ),
                    )}
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
