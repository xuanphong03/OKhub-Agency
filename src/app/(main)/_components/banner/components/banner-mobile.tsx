import type {IBanner} from '@/types/banner.interface'
import Image from 'next/image'
import {useRef, useState} from 'react'
import type {Swiper as SwiperType} from 'swiper'
import {Autoplay, EffectFade, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {cn} from '@/lib/utils'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface BannerMobileProps {
  bannerSlides: IBanner[]
}

const BannerMobile = ({bannerSlides}: BannerMobileProps) => {
  const [showAfter, setShowAfter] = useState(false)
  const [showRightText, setShowRightText] = useState(false)
  const swiperRef = useRef<{swiper: SwiperType} | null>(null)

  const handleToggleImage = () => {
    setShowAfter(!showAfter)
    setShowRightText(!showRightText)

    // Stop autoplay when toggled
    if (swiperRef.current?.swiper) {
      if (!showAfter) {
        swiperRef.current.swiper.autoplay.stop()
      } else {
        swiperRef.current.swiper.autoplay.start()
      }
    }
  }

  return (
    <section
      className='w-full relative h-full hidden xsm:block'
      id='banner-mb'
    >
      <div className='ml-[1.11rem]'>
        <h2 className='flex items-center py-[0.41rem] mt-[1.1rem] mb-[0.61rem]'>
          <Image
            src='/banner/okhub-icon-v3.svg'
            alt=''
            height={20}
            width={22}
            className='w-[2.18944rem] h-auto'
          />
          <span className='text-[0.875rem] text-[#1550E5] font-medium ml-[0.26144rem]'>
            OKhub cho rằng
          </span>
        </h2>
      </div>
      <div className='mx-auto w-[21.16044rem] border-[1px] border-solid border-[#E6E6E6]' />
      {/* 
      <style
        jsx
        global
      >{`
        .banner-mb .swiper-pagination {
          bottom: 3.95rem !important;
          width: 18.77331rem !important;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 53.5% !important;
          transform: translateX(-50%);
          position: absolute;
        }
        .banner-mb .swiper-pagination-bullet {
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

        .banner-mb .swiper-pagination-bullet svg path {
          fill: #e4eaef;
          transition: fill 0.2s;
        }

        .banner-mb .swiper-pagination-bullet-active svg path {
          fill: #1550e5;
        }

        .banner-mb .pagination-svg-reverse {
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

        .change-button {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .change-button.changed {
          transform: translate(2.5rem, 0);
        }

        .change-des {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .change-des.changed {
          width: 9.23681rem;
        }

        .change-arrow {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .change-arrow.left {
          transform: scale(0);
          opacity: 0;
        }

        .change-arrow.right {
          transform: scale(1);
          opacity: 1;
        }

        .change-arrow.left.changed {
          transform: scale(1);
          opacity: 1;
        }

        .change-arrow.right.changed {
          transform: scale(0);
          opacity: 0;
        }
      `}</style> */}
      <Swiper
        ref={swiperRef}
        className='banner-mb w-full h-full banner-mb'
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{
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
        }}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        loop={true}
        speed={1000}
      >
        {bannerSlides?.map((item, index: number) => (
          <SwiperSlide key={index}>
            <p
              className={`text-[1.25rem] leading-[1.75rem] text-black w-[18.75rem] pl-[1rem] mt-[0.625rem] transition-opacity duration-700 ${
                showRightText ? 'opacity-0 absolute' : 'opacity-100'
              }`}
            >
              {item.home_banner_des_l}
            </p>
            <p
              className={`text-[1.25rem] leading-[1.25rem] text-black w-[18.75rem] pl-[1rem] mt-[0.625rem] transition-opacity duration-700 ${
                showRightText ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              {item.home_banner_des_r}
            </p>

            <div
              onClick={handleToggleImage}
              className='flex items-center ml-[1rem] mt-[0.625rem]'
            >
              <div
                className={`size-[2.541rem] backdrop-blur-[2px] border-[1px] border-[#e6e6e6] bg-[rgba(255,255,255,0.39)] flex items-center justify-center rounded-[1.275rem] cursor-pointer transition-all duration-700 ease-in-out transform change-arrow left ${
                  showAfter ? 'changed' : ''
                }`}
              >
                <svg
                  width='11'
                  height='17'
                  viewBox='0 0 11 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    opacity='0.4'
                    x='10.8206'
                    y='3.59906'
                    width='10.9072'
                    height='4.07425'
                    rx='2.03713'
                    transform='rotate(135 10.8206 3.59906)'
                    fill='#1550E5'
                  />
                  <rect
                    x='7.93976'
                    y='16.2819'
                    width='10.9072'
                    height='4.07425'
                    rx='2.03713'
                    transform='rotate(-135 7.93976 16.2819)'
                    fill='#1550E5'
                  />
                </svg>
              </div>
              <button
                className={cn(
                  `h-[2.5rem] rounded-[1.275rem] border-[1px] border-[#e6e6e6] backdrop-blur-[2px] text-[0.925rem] transition-all duration-700 ease-in-out transform change-button change-des`,
                  showAfter
                    ? 'bg-[rgba(255,255,255,0.39)] text-[#1550E5] w-[9.25rem] changed'
                    : 'bg-gradient-to-b from-[#001cb3] to-[#548beb] text-white font-bold w-[7rem]',
                )}
              >
                {showAfter ? 'Mọi người thấy' : 'NHƯNG !!'}
              </button>
              {/* <div
                className={`size-[2.541rem] backdrop-blur-[2px] bg-gradient-to-b from-[#001cb3] to-[#548beb] flex items-center justify-center rounded-[1.275rem] cursor-pointer transition-all duration-700 ease-in-out transform change-arrow right ${
                  showAfter ? '' : 'changed'
                }`}
              >
                <svg
                  width='11'
                  height='17'
                  viewBox='0 0 11 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='0.208923'
                    y='13.4009'
                    width='10.9072'
                    height='4.07425'
                    rx='2.03713'
                    transform='rotate(-45 0.208923 13.4009)'
                    fill='white'
                    fillOpacity='0.62'
                  />
                  <rect
                    x='3.08972'
                    y='0.718109'
                    width='10.9072'
                    height='4.07425'
                    rx='2.03713'
                    transform='rotate(45 3.08972 0.718109)'
                    fill='white'
                  />
                </svg>
              </div> */}
            </div>

            <Image
              src={item.img_before.url}
              alt={item.img_before.alt}
              width={1000}
              height={1000}
              className={`object-cover absolute bottom-[4.8rem] left-[0.875rem] transition-opacity duration-700 ${
                showAfter ? 'opacity-0' : 'opacity-100'
              }`}
            />

            <Image
              src={item.img_after.url}
              alt={item.img_after.alt}
              width={1000}
              height={1000}
              className={`object-cover absolute bottom-[4.8rem] left-[0.875rem] transition-opacity duration-700 ${
                showAfter ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={
          'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bannermbbg.webp'
        }
        alt=''
        width={1000}
        height={1000}
        className='object-cover absolute bottom-0 left-0'
      />
    </section>
  )
}

export default BannerMobile
