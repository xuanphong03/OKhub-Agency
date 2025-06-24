import Footer from '@/components/footer'
import Header from '@/components/header'
import MobileNavActions from '@/components/mobile-nav-actions'
import {Toaster} from '@/components/ui/sonner'
import fetchData from '@/fetches/fetchData'
import GsapProvider from '@/provider/GsapProvider'
import {ViewTransitions} from 'next-view-transitions'
import NextTopLoader from 'nextjs-toploader'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await fetchData({
    api: '/custom/v1/options',
    method: 'GET',
  })
  return (
    <ViewTransitions>
      <Header header={data?.header} />

      <GsapProvider>
        {children}
        <Footer
          footer={data?.footer}
          social={data?.social}
          credential={data?.credential}
        />
      </GsapProvider>
      <MobileNavActions
        contactLink={data?.contact}
        socialList={data?.social}
        credential={data?.credential}
        menu={data?.header?.menu}
        ctaActions={data?.header?.cta}
      />
      <Toaster richColors />
      <NextTopLoader
        color='linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)'
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing='ease'
        speed={200}
        shadow='0 0 10px #2299DD,0 0 5px #2299DD'
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
    <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
    </ViewTransitions>
  )
}
