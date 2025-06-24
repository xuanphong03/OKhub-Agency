import {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, EffectFade, Pagination} from 'swiper/modules'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import type {IBanner} from '@/types/banner.interface'
import type {Swiper as SwiperClass} from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import './banner-mobile.css'

// Interface props truyền vào component
interface BannerMobileProps {
  bannerSlides: IBanner[]
}
// Icon mũi tên trái
function IconArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='11'
      height='17'
      viewBox='0 0 11 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
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
  )
}
// Icon mũi tên phải
function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='11'
      height='17'
      viewBox='0 0 11 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
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
  )
}

const BannerMobile = ({bannerSlides}: BannerMobileProps) => {
  // Index hiện tại của slide đang hiển thị
  const [activeIndex, setActiveIndex] = useState(0)
  // Trạng thái toggle nội dung của từng slide
  const [slideToggles, setSlideToggles] = useState<Record<number, boolean>>({})
  // Ref tới container tổng
  const bannerContainerRef = useRef<HTMLDivElement>(null)
  // Ref tới từng element nội dung và button trong từng slide
  const contentRefs = useRef<
    Record<
      number,
      {
        defaultEl: HTMLParagraphElement | null
        activeEl: HTMLParagraphElement | null
        buttonEl: HTMLButtonElement | null
      }
    >
  >({})
  // Hàm xử lý khi người dùng bấm nút chuyển đổi nội dung
  const handleToggleContent = (index: number) => {
    const current = contentRefs.current[index]
    if (!current?.defaultEl || !current?.activeEl || !current?.buttonEl) return

    const defaultHeight = current.defaultEl.getBoundingClientRect().height
    const activeHeight = current.activeEl.getBoundingClientRect().height
    const diff = Math.abs(defaultHeight - activeHeight)

    const willBeActive = !slideToggles[index]

    // Di chuyển nút theo độ cao khác biệt giữa 2 nội dung
    current.buttonEl.style.transform = willBeActive
      ? `translateY(${diff}px)`
      : `translateY(0px)`

    setSlideToggles((prev) => ({
      ...prev,
      [index]: willBeActive,
    }))
  }
  // Helper để ẩn/hiện element bằng class Tailwind
  const toggleVisibility = (visible: boolean) => {
    return visible ? 'visible opacity-100' : 'invisible opacity-0'
  }
  // Hàm xử lý khi đổi slide
  const handleSlideChange = (swiper: SwiperClass) => {
    const newIndex = swiper.realIndex
    // 🔒 Tránh setState nếu không thay đổi thực sự
    if (newIndex === activeIndex) return
    const oldIndex = activeIndex
    setActiveIndex(newIndex)
    // Xóa trạng thái toggle của slide cũ
    setSlideToggles((prev) => {
      const updated = {...prev}
      delete updated[oldIndex]
      return updated
    })
    // Reset vị trí nút toggle của slide cũ
    const oldRef = contentRefs.current[oldIndex]
    if (oldRef?.buttonEl) {
      oldRef.buttonEl.style.transform = 'translateY(0px)'
    }
  }

  return (
    <div className='relative h-full w-full self-stretch bg-[#F7F7F7] sm:hidden'>
      <Image
        alt=''
        width={375}
        height={678}
        src='/banner/bg-grid-mb.webp'
        className='absolute bottom-[7.5625rem] left-0 z-0 h-auto w-full'
      />
      <div className='absolute bottom-0 left-0 h-[2.5rem] w-full bg-white'></div>

      <div className='relative z-[1] mt-[1.5rem] px-[1rem]'>
        <p className='flex items-center space-x-[0.26144rem] py-[0.41025rem]'>
          <Image
            alt=''
            width={35.0315}
            height={17.5611}
            src='/banner/okhub-icon-v3.svg'
            className='h-auto w-[2.18944rem] shrink-0'
          />
          <span className='text-[0.875rem] font-medium text-[#1550E5]'>
            OKhub cho rằng
          </span>
        </p>
        <div className='my-[0.625rem] h-[1px] w-full bg-[#e6e6e6]'></div>
      </div>

      <div
        ref={bannerContainerRef}
        className='relative z-[1] h-[32.5rem] w-full'
      >
        {Array.isArray(bannerSlides) && (
          <Swiper
            effect='fade'
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
            loop={true}
            speed={1000}
            fadeEffect={{
              crossFade: true,
            }}
            pagination={{
              el: '.banner-pagination',
              clickable: true,
              renderBullet: (index: number, className: string) => `
              <span class="${className}">
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="5" viewBox="0 0 67 5" fill="none">
                <path d="M0.476712 2.90567C-0.164921 3.70243 0.402239 4.88736 1.42524 4.88736L65.7598 4.88736C66.7828 4.88736 67.3499 3.70243 66.7083 2.90567L64.8252 0.567286C64.594 0.280211 64.2453 0.113281 63.8767 0.113281H3.30833C2.93974 0.113281 2.59098 0.280211 2.3598 0.567286L0.476712 2.90567Z" />
                </svg>
              </span>`,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className='relative h-[31.65rem] w-full'
          >
            {bannerSlides.map((banner, index) => {
              const isContentActive = slideToggles[index] || false
              return (
                <SwiperSlide
                  key={index}
                  className='banner-slide relative h-full w-full'
                >
                  <div className='relative z-5 h-full w-full px-[1rem]'>
                    <div className='relative h-full w-full'>
                      <p
                        ref={(el) => {
                          if (!contentRefs.current[index])
                            contentRefs.current[index] = {
                              defaultEl: null,
                              activeEl: null,
                              buttonEl: null,
                            }
                          contentRefs.current[index].defaultEl = el
                        }}
                        className={cn(
                          'content--default relative max-w-[18.75rem] text-[1.25rem] leading-[140%] text-black transition-all duration-800 ease-in-out',
                          toggleVisibility(!isContentActive),
                        )}
                      >
                        {banner?.home_banner_des_l ?? ''}
                      </p>
                      <p
                        ref={(el) => {
                          if (!contentRefs.current[index])
                            contentRefs.current[index] = {
                              defaultEl: null,
                              activeEl: null,
                              buttonEl: null,
                            }
                          contentRefs.current[index].activeEl = el
                        }}
                        className={cn(
                          'content--active absolute top-0 left-0 max-w-[18.75rem] text-[1.25rem] leading-[140%] text-black transition-all duration-800 ease-in-out',
                          toggleVisibility(isContentActive),
                        )}
                      >
                        {banner?.home_banner_des_r ?? ''}
                      </p>
                      <button
                        ref={(el) => {
                          if (!contentRefs.current[index])
                            contentRefs.current[index] = {
                              defaultEl: null,
                              activeEl: null,
                              buttonEl: null,
                            }
                          contentRefs.current[index].buttonEl = el
                        }}
                        onClick={() => handleToggleContent(index)}
                        className={cn(
                          'btn-toggle mt-[0.625rem] inline-flex items-center transition-all duration-800 ease-in-out',
                          isContentActive
                            ? 'translate-x-[0rem]'
                            : 'translate-x-[-2.54188rem]',
                        )}
                      >
                        <span
                          className={cn(
                            'inline-flex h-[2.54188rem] w-[2.54188rem] shrink-0 items-center justify-center rounded-full border border-solid border-[#e6e6e6] bg-[rgba(255,255,255,0.39)] backdrop-blur-[2px] transition-all duration-800 ease-in-out',
                            !isContentActive ? 'scale-0' : 'scale-100',
                            toggleVisibility(isContentActive),
                          )}
                        >
                          <IconArrowLeft className='h-[0.97275rem] w-[0.66213rem]' />
                        </span>
                        <span
                          className={cn(
                            'relative inline-flex h-[2.55238rem] items-center justify-center overflow-hidden rounded-[1.27619rem] border border-solid border-[#e6e6e6] bg-[rgba(255,255,255,0.39)] pr-[1.76rem] pl-[1.67rem] text-[0.90956rem] leading-[134%] backdrop-blur-[2px] transition-all duration-800 ease-in-out after:absolute after:top-0 after:left-0 after:z-0 after:h-full after:w-full after:bg-[linear-gradient(180deg,#001cb3_0%,#548beb_88.7%)] after:transition-all after:duration-800 after:ease-in-out',
                            isContentActive
                              ? 'text-[#1550E5] after:opacity-0'
                              : 'text-white after:opacity-100',
                          )}
                        >
                          <span className='relative z-[1]'>
                            {isContentActive ? 'NHƯNG !!' : 'Mọi người thấy'}
                          </span>
                        </span>
                        <span
                          className={cn(
                            'inline-flex h-[2.54188rem] w-[2.54188rem] shrink-0 items-center justify-center rounded-full border border-solid border-[#e6e6e6] bg-[linear-gradient(180deg,#001cb3_0%,#548beb_88.7%)] backdrop-blur-[2px] transition-all duration-800 ease-in-out',
                            isContentActive ? 'scale-0' : 'scale-100',
                            toggleVisibility(!isContentActive),
                          )}
                        >
                          <IconArrowRight className='h-[0.97275rem] w-[0.66213rem]' />
                        </span>
                      </button>
                    </div>
                  </div>
                  <Image
                    alt=''
                    width={375}
                    height={275.5591}
                    src={banner?.img_after?.url}
                    className={cn(
                      'absolute bottom-0 left-0 z-[1] h-auto w-full transition-all duration-800 ease-in-out',
                      toggleVisibility(!isContentActive),
                    )}
                  />
                  <Image
                    alt=''
                    width={375}
                    height={275.5591}
                    src={banner?.img_before?.url}
                    className={cn(
                      'absolute bottom-0 left-0 z-[2] h-auto w-full transition-all duration-800 ease-in-out',
                      toggleVisibility(isContentActive),
                    )}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}
        <Image
          alt=''
          width={375}
          height={238.0028}
          src='/banner/bg-banner-mb.svg'
          className='absolute bottom-0 left-0 h-auto w-full'
        />
        <div className='absolute bottom-0 left-1/2 w-[16.9375rem] -translate-x-1/2 pb-[0.25rem]'>
          <div className='banner-pagination flex w-full items-center justify-between'></div>
        </div>
      </div>
    </div>
  )
}

export default BannerMobile
