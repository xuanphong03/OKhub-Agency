'use client'
import PostCardPrimary from '@/app/(main)/_components/impressive-post/components/post-card-primary'
import PostCardSecondary from '@/app/(main)/_components/impressive-post/components/post-card-secondary'
import CustomBorderedButtonV2 from '@/components/bordered-button-v2'
import IconArrowLeft from '@/components/icon/IconArrowLeft'
import IconArrowRight from '@/components/icon/IconArrowRight'
import {Skeleton} from '@/components/ui/skeleton'
import useIsMobile from '@/hooks/useIsMobile'
import {ILink} from '@/types/link.interface'
import Link from 'next/link'
import React, {useEffect, useRef} from 'react'

type PostItem = {
  id: number
  title: string
  excerpt: string
  link: string
  thumbnail: string
  date: string
}

interface PostListProps {
  isLoading: boolean
  postList: PostItem[]
  linkMore: ILink
}

export default function PostList({
  isLoading,
  postList,
  linkMore,
}: PostListProps) {
  const isMobile = useIsMobile()

  const prevButtonRef = useRef<HTMLButtonElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)
  const postSecondaryContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const postContainer = postSecondaryContainerRef.current
    const prevBtn = prevButtonRef.current
    const nextBtn = nextButtonRef.current
    if (!isMobile || !postContainer || !prevBtn || !nextBtn) return
    const postList = postContainer.querySelectorAll(
      '.post-item',
    ) as NodeListOf<HTMLAnchorElement>
    if (!postList.length) return
    let currentIndex = 0

    const postWidth = postList[0].offsetWidth
    const gap =
      parseFloat(getComputedStyle(postList[1]).marginLeft || '16') || 16

    const updateButtonStates = () => {
      prevBtn.disabled = currentIndex === 0
      nextBtn.disabled = currentIndex >= postList.length - 1
    }

    const scrollToPost = (index: number) => {
      const scrollPosition = index * (postWidth + gap)
      postContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
    }

    const handlePrevClick = () => {
      if (currentIndex > 0) {
        currentIndex--
        scrollToPost(currentIndex)
        updateButtonStates()
      }
    }

    const handleNextClick = () => {
      if (currentIndex < postList.length - 1) {
        currentIndex++
        scrollToPost(currentIndex)
        updateButtonStates()
      }
    }

    prevBtn.addEventListener('click', handlePrevClick)
    nextBtn.addEventListener('click', handleNextClick)

    updateButtonStates()

    return () => {
      prevBtn.removeEventListener('click', handlePrevClick)
      nextBtn.removeEventListener('click', handleNextClick)
    }
  }, [isMobile])

  if (isLoading) {
    return (
      <div className='grid w-full grid-cols-2 gap-x-[0.8125rem] bg-white'>
        <div className='col-span-1 max-sm:col-span-full max-sm:mb-[0.6875rem] max-sm:px-[0.75rem]'>
          <Skeleton className='h-[29.4375rem] w-full rounded-[1.25rem] max-sm:h-[15.5rem]'></Skeleton>
        </div>
        <div className='hidden_scroll col-span-1 grid grid-cols-2 gap-x-[0.8125rem] gap-y-[0.6875rem] max-sm:col-span-full max-sm:flex max-sm:gap-0 max-sm:overflow-x-auto'>
          {[...Array(4)].map((_, index) => {
            return (
              <Skeleton
                key={index}
                className='h-[14.375rem] w-full rounded-[1.25rem] max-sm:h-[11.85rem] max-sm:w-[14.00188rem] max-sm:shrink-0 max-sm:not-first:ml-[1rem] max-sm:first:ml-[0.75rem] max-sm:last:mr-[0.75rem]'
              ></Skeleton>
            )
          })}
        </div>
      </div>
    )
  }
  if (!Array.isArray(postList) || !postList.length) {
    return (
      <p className='h-[15.5rem] text-[1rem] text-[#081D1A] max-sm:px-[0.75rem]'>
        Không tìm thấy bài viết phù hợp. Vui lòng thử lại
      </p>
    )
  }

  return (
    <>
      <div className='grid w-full grid-cols-2 gap-x-[0.8125rem] bg-white'>
        <div className='col-span-1 max-sm:col-span-full max-sm:mb-[0.6875rem] max-sm:px-[0.75rem]'>
          <Link
            href={postList[0]?.link}
            className='block'
          >
            <PostCardPrimary
              postTitle={postList[0]?.title ?? ''}
              postExcerpt={postList[0]?.excerpt ?? ''}
              postThumbnail={postList[0]?.thumbnail ?? '/fallbackImage.gif'}
              postDate={postList[0]?.date ?? ''}
              className='h-[29.4375rem] w-full max-sm:h-[15.5rem]'
            />
          </Link>
        </div>
        <div
          ref={postSecondaryContainerRef}
          className='hidden_scroll col-span-1 grid grid-cols-2 gap-x-[0.8125rem] gap-y-[0.6875rem] max-sm:col-span-full max-sm:flex max-sm:gap-0 max-sm:overflow-x-auto'
        >
          {postList.slice(1, 4).map((post) => {
            return (
              <Link
                key={post.id}
                href={post.link}
                className='post-item col-span-1 block max-sm:shrink-0 max-sm:not-first:ml-[1rem] max-sm:first:ml-[0.75rem] max-sm:last:mr-[0.75rem]'
              >
                <PostCardSecondary
                  className='h-[14.375rem] w-full max-sm:h-auto max-sm:w-[14.00188rem]'
                  postTitle={post.title ?? ''}
                  postThumbnail={post.thumbnail ?? '/fallbackImage.gif'}
                  postPublishDate={post.date ?? ''}
                />
              </Link>
            )
          })}
        </div>
      </div>
      <div className='mt-[1.5rem] flex items-center justify-between px-[0.75rem] sm:hidden'>
        <div className='flex items-center space-x-[0.44rem]'>
          <button
            ref={prevButtonRef}
            className='flex size-[2rem] shrink-0 items-center justify-center rounded-full bg-[rgba(194,194,194,0.20)]'
          >
            <IconArrowRight className='h-[1.11113rem] w-[1.11113rem] shrink-0' />
          </button>
          <button
            ref={nextButtonRef}
            className='flex size-[2rem] shrink-0 items-center justify-center rounded-full bg-[rgba(194,194,194,0.20)]'
          >
            <IconArrowLeft className='h-[1.11113rem] w-[1.11113rem] shrink-0' />
          </button>
        </div>
        {linkMore?.url && (
          <Link
            target={linkMore?.target ?? '_self'}
            href={linkMore?.url}
          >
            <CustomBorderedButtonV2
              color='#1550E5'
              borderColor='#1550E5'
              borderLine='rgba(21, 80, 229, 0.10)'
            >
              {linkMore?.title}
            </CustomBorderedButtonV2>
          </Link>
        )}
      </div>
    </>
  )
}
