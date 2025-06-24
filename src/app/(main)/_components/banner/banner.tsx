'use client'
import {IBanner} from '@/types/banner.interface'
import BannerMobile from './components/banner-mobile'
import BannerPC from './components/banner-pc'

const Banner = ({bannerSlides}: {bannerSlides: IBanner[]}) => {
  return (
    <section
      className='xsm:bg-white xsm:p-0 mx-auto flex h-[41.38rem] w-screen max-w-full justify-center bg-[#f7f7f7] pb-8 max-sm:h-auto'
      id='banner'
    >
      <BannerPC bannerSlides={bannerSlides} />
      <BannerMobile bannerSlides={bannerSlides} />
    </section>
  )
}

export default Banner
