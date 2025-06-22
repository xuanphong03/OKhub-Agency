'use client'
import {IBanner} from '@/types/banner.interface'
import BannerMobile from './components/banner-mobile'
import BannerPC from './components/banner-pc'

const Banner = ({bannerSlides}: {bannerSlides: IBanner[]}) => {
  return (
    <section
      className='flex justify-center bg-[#f7f7f7] h-[41.38rem] max-w-full w-screen mx-auto pb-8 xsm:bg-white xsm:p-0'
      id='banner'
    >
      <BannerPC bannerSlides={bannerSlides} />
      <BannerMobile bannerSlides={bannerSlides} />
    </section>
  )
}

export default Banner
