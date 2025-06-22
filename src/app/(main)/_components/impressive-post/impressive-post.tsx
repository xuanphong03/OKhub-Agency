'use client'

import fetchData from '@/fetches/fetchData'
import {Category} from '@/types/category.interface'
import type {ImpressivePost, Post} from '@/types/post.interface'
import {useEffect, useState} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CategoryTabs from './components/category-tabs'
import ImpressivePostHeader from './components/impressive-post-header'
import PostList from '@/app/(main)/_components/impressive-post/components/post-list'

const ImpressivePost = ({
  impressivePost,
  categoriesData,
  dataFilteredPosts,
}: {
  impressivePost: ImpressivePost
  categoriesData: Category[]
  dataFilteredPosts: Post[]
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [postList, setPostList] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setCategories(categoriesData)
    setPostList(dataFilteredPosts)
  }, [categoriesData, dataFilteredPosts])
  const fetchPostsByCategory = async (categorySlug: string) => {
    setIsLoading(true)
    try {
      const apiUrl =
        categorySlug === 'all'
          ? '/api/v1/posts'
          : `/api/v1/posts?category=${categorySlug}`

      const posts = await fetchData({
        api: apiUrl,
        method: 'GET',
      })
      setPostList(posts)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug)
    fetchPostsByCategory(slug)
  }
  return (
    <section
      id='impressive-post'
      className='relative z-[11] w-full bg-white py-[4.25rem]'
    >
      <div className='xsm:w-full mx-auto w-[93.375rem]'>
        <ImpressivePostHeader impressivePost={impressivePost} />
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        <PostList
          isLoading={isLoading}
          postList={postList}
          linkMore={impressivePost.discovery_post}
        />
        {/* <div className='xsm:px-[0.75rem] flex w-full justify-between'>
          <FeaturedPost
            post={postList[0]}
            isLoading={isLoading}
          />
          <div className='xsm:hidden grid w-[45.5625rem] flex-shrink-0 grid-cols-2 gap-[0.8125rem]'>
            <PostGrid
              posts={postList.slice(1, 5)}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className='xsm:block hidden'>
          <style
            jsx
            global
          >{`
            .blog-swiper .swiper-wrapper {
              padding: 0 0.75rem;
            }

            .swiper-button-next {
              right: -3.25rem;
              bottom: -2.675rem;
            }

            .swiper-button-prev {
              left: 0.75rem;
              bottom: -3.5rem;
            }

            .swiper-button-next,
            .swiper-button-prev {
              display: flex;
              width: 2rem;
              height: 2rem;
              padding: 0.44444rem 0.5rem 0.44444rem 0.38888rem;
              justify-content: center;
              align-items: center;
              border-radius: 1rem;
              background: rgba(194, 194, 194, 0.2);
              position: relative !important;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background: rgba(194, 194, 194, 0.2);
            }

            .swiper-button-next:hover::after,
            .swiper-button-prev:hover::after {
              color: white;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              display: none;
            }

            .swiper-button-disabled {
              opacity: 0.35;
              cursor: auto;
              pointer-events: none;
            }
          `}</style>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1.5}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{clickable: true}}
            className='xsm:mx-[0.75rem] blog-swiper mt-[0.7rem] w-full'
          >
            {postList.slice(1).map((post, index) => (
              <SwiperSlide key={index}>
                <PostGrid
                  posts={[post]}
                  isLoading={isLoading}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex items-center justify-between'>
            <div className=''>
              <div className='swiper-button-prev'>
                <svg
                  width='18'
                  height='19'
                  viewBox='0 0 18 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.61111 8.78841L11.6979 3.19813C11.8021 3.08239 11.9352 3.02452 12.0972 3.02452C12.2593 3.02452 12.3924 3.08239 12.4965 3.19813C12.6123 3.32545 12.6701 3.47591 12.6701 3.64952C12.6701 3.82313 12.6123 3.96781 12.4965 4.08355L7.82639 9.2398L12.4965 14.3961C12.6123 14.5118 12.6701 14.6565 12.6701 14.8301C12.6701 15.0037 12.6123 15.1542 12.4965 15.2815C12.3924 15.3972 12.2593 15.4551 12.0972 15.4551C11.9352 15.4551 11.8021 15.3972 11.6979 15.2815L6.61111 9.69119C6.49537 9.56387 6.4375 9.41341 6.4375 9.2398C6.4375 9.06619 6.49537 8.91573 6.61111 8.78841Z'
                    fill='#658191'
                  />
                </svg>
              </div>
              <div className='swiper-button-next'>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.9414 8.78841L7.87191 3.19813C7.75617 3.08239 7.62017 3.02452 7.46392 3.02452C7.30767 3.02452 7.17168 3.08239 7.05594 3.19813C6.94019 3.32545 6.88232 3.47591 6.88232 3.64952C6.88232 3.82313 6.94019 3.96781 7.05594 4.08355L11.7434 9.2398L7.05594 14.3961C6.94019 14.5118 6.88232 14.6565 6.88232 14.8301C6.88232 15.0037 6.94019 15.1542 7.05594 15.2815C7.17168 15.3972 7.30767 15.4551 7.46392 15.4551C7.62017 15.4551 7.75617 15.3972 7.87191 15.2815L12.9414 9.69119C13.0571 9.56387 13.115 9.41341 13.115 9.2398C13.115 9.06619 13.0571 8.91573 12.9414 8.78841Z'
                    fill='#658191'
                  />
                </svg>
              </div>
            </div>
            <div className='xsm:block absolute right-[0.75rem] bottom-[1.25rem] hidden'>
              <CustomBorderedButtonV2
                // borderColor='#1550E5'
                // color='#1550E5'
                // borderLine='#1550E5'
                color='#1550E5'
                borderColor='#1550E5'
                borderLine='rgba(21, 80, 229, 0.10)'
              >
                Khám phá Blog
              </CustomBorderedButtonV2>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ImpressivePost
