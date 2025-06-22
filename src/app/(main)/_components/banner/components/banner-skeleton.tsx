import {Skeleton} from '@/components/ui/skeleton'

const BannerSkeleton = () => {
  return (
    <section className='flex justify-center bg-[#f7f7f7] h-[41.38rem] max-w-full w-screen mx-auto pb-8'>
      <div className='w-[93.55306rem] relative block xsm:hidden'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='relative w-full h-full'>
            {/* Main image skeleton */}
            <Skeleton className='absolute left-0 right-0 bottom-0 w-full h-[26.71769rem] z-[1]' />

            {/* Secondary image skeleton */}
            <Skeleton className='absolute w-[47.79563rem] h-[8.60319rem] left-1/2 bottom-[20rem] -translate-x-1/2 z-0' />
          </div>
        </div>
      </div>

      {/* Mobile skeleton */}
      <div className='w-full relative h-full hidden xsm:block'>
        <Skeleton className='w-full h-[33rem]' />
      </div>
    </section>
  )
}

export default BannerSkeleton
