'use client'

import CustomBorderedButtonV1 from '@/components/bordered-button-v1'
import {IListenToCustomer} from '@/types/listen.interface'
import Image from 'next/image'
import {useRef} from 'react'
import {Autoplay, EffectFade} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Badges, animateBadges} from './components/badges'
import {Stars} from './components/stars'
import {WorkingRules} from './components/working-rules'

import 'swiper/css'
import 'swiper/css/effect-fade'

const ListenToCustomer = ({
  listenToCustomer,
}: {
  listenToCustomer: IListenToCustomer
}) => {
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([])

  if (!listenToCustomer) return null

  return (
    <section
      id='listen-to-customer'
      className='xsm:overflow-x-hidden xsm:h-[44rem] relative h-[37.5rem]'
    >
      <Image
        src='https://seohub.okhub-tech.com/wp-content/uploads/2025/05/Frame-2147258475.svg'
        alt='listen-to-customer-bg'
        fill
        className='xsm:hidden object-cover'
      />
      <Image
        src={
          'https://seohub.okhub-tech.com/wp-content/uploads/2025/06/Frame-2147258852.svg'
        }
        alt='listen-to-customer-bg'
        className='xsm:block hidden object-cover'
        width={1000}
        height={1000}
      />
      <h2
        className='xsm:mb-title-h3 xsm:[&_br]:block xsm:top-[1rem] xsm:left-[0.75rem] absolute top-[9.75rem] left-[3.075rem] text-[2.875rem] leading-[4rem] font-normal text-[#0725B7] [&_br]:hidden'
        dangerouslySetInnerHTML={{
          __html: listenToCustomer.title,
        }}
      ></h2>

      <div className='xsm:left-[0.75rem] xsm:top-[8rem] absolute top-[19.76rem] left-[3.08rem] z-[5] w-[47.25rem] md:block'>
        <WorkingRules rules={listenToCustomer.working_rule} />

        <div className='xsm:hidden absolute'>
          <a href={listenToCustomer?.contact?.url}>
            <CustomBorderedButtonV1
              color='#1550E5'
              borderColor='#1550E5'
              borderLine='rgb(134 132 132 / 10%)'
            >
              {listenToCustomer?.contact?.title}
            </CustomBorderedButtonV1>
          </a>
        </div>
      </div>

      <div className='xsm:w-[21.975rem] xsm:h-[23.125rem] xsm:bottom-[0rem] xsm:right-[0rem] absolute right-[6rem] bottom-0 z-[20] h-[39.375rem] w-[37.375rem] md:block'>
        <Stars />
        <Swiper
          direction='horizontal'
          loop={true}
          speed={500}
          allowTouchMove={false}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          effect='fade'
          fadeEffect={{
            crossFade: true,
          }}
          modules={[EffectFade, Autoplay]}
          onSlideChange={() => {
            animateBadges(badgeRefs.current)
          }}
        >
          {listenToCustomer?.representative_face?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.thumbnail.url}
                alt={item.thumbnail.alt}
                width={item.thumbnail.width}
                height={item.thumbnail.height}
                className='xsm:w-[21.975rem] xsm:h-[23.125rem] h-[39.375rem] w-[37.375rem] object-cover'
              />
              <Badges
                firstRule={item.first_rule}
                secondRule={item.second_rule}
                index={index}
                onRef={(el, index) => {
                  badgeRefs.current[index] = el
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ListenToCustomer
