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
      </div>
    </section>
  )
}

export default ImpressivePost
