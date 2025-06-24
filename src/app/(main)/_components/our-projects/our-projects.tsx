'use client'
import ButtonAllProjects from '@/app/(main)/_components/our-projects/_components/button-all-projects'
import useIsMobile from '@/hooks/useIsMobile'
import {cn} from '@/lib/utils'
import {IOurProjects} from '@/types/projects.interface'
import {Link} from 'next-view-transitions'
import Image from 'next/image'
import React from 'react'

interface OurProjectsProps {
  projects: IOurProjects
}

export default function OurProjects({projects}: OurProjectsProps) {
  const isMobile = useIsMobile()
  const {all_project, projects: project_list} = projects
  return (
    <div className='relative z-1'>
      {!isMobile && (
        <Image
          alt=''
          width={1600}
          height={1900}
          className='h-auto w-full max-sm:hidden'
          src='/project/bg-project.webp'
          loading='eager'
        />
      )}
      {isMobile && (
        <Image
          alt=''
          width={345}
          height={1167.9142}
          className='absolute top-[2.5rem] left-0 h-auto w-full sm:hidden'
          src='/project/bg-project-mb.webp'
        />
      )}
      <div className='top-[10.2607rem] max-sm:mt-[2.5rem] sm:absolute sm:left-1/2 sm:-translate-x-1/2'>
        <div className='relative max-sm:ml-[0.78rem] max-sm:w-[21.82rem]'>
          <div className='relative mb-[1.93rem] inline-flex h-[3.04881rem] w-max items-center justify-center bg-[#1550E5] px-[0.48138rem] py-[0.16044rem] text-[1.625rem] leading-[134%] font-normal text-white before:absolute before:size-[1.37494rem] before:bg-[#1550E5] max-sm:h-[1.374rem] max-sm:px-[0.21694rem] max-sm:py-[0.07231rem] max-sm:text-[0.75rem] max-sm:leading-[134%] max-sm:before:right-0 max-sm:before:bottom-0 max-sm:before:size-[0.61963rem] max-sm:before:translate-full sm:absolute sm:top-[0.38rem] sm:left-[3.5rem] sm:before:top-0 sm:before:left-0 sm:before:-translate-full'>
            {projects.tag}
          </div>
          <p className='font-productsans indent-[12.5rem] text-[2.875rem] leading-[4rem] font-normal text-[#0725B7] max-sm:indent-[3.5rem] max-sm:text-[1.625rem] max-sm:leading-[120%] max-sm:text-[rgba(9,44,76,0.72)]'>
            {projects.description}
          </p>
        </div>
      </div>

      <div className='relative w-full max-sm:mt-[22.13rem] max-sm:px-[1rem] sm:absolute sm:top-[53.8125rem] sm:left-1/2 sm:-translate-x-1/2'>
        <div className='mx-auto max-w-[87.5rem]'>
          <div className='relative flex [grid-template-columns:repeat(5,min-content)] [grid-template-rows:repeat(5,min-content)] gap-[0.375rem] max-sm:flex-col max-sm:space-y-[0.5rem] sm:grid'>
            {project_list.map((project, index) => {
              const isProject2 = index + 1 === 2
              const isProject3 = index + 1 === 3
              const isProject4 = index + 1 === 4
              const isProject5 = index + 1 === 5
              const isProject6 = index + 1 === 6
              const isBigCard = index === 2 || index === 3

              return (
                <Link
                  href={project?.link ?? '#'}
                  key={index}
                  className={cn(
                    'group relative row-span-2 block h-[21.1963rem] overflow-hidden rounded-[1.125rem] sm:w-[21.5938rem]',
                    {
                      'col-span-2 row-span-3 sm:h-[34.625rem] sm:w-[43.5625rem]':
                        isBigCard,
                      'col-start-1 row-start-3': isProject3,
                      'col-start-3 row-start-1': isProject4,
                      'col-start-3 row-start-4': isProject5,
                      'col-start-4 row-span-4': isProject6,
                    },
                  )}
                >
                  <div
                    className={cn(
                      'absolute top-[0.6875rem] z-[2] flex w-full justify-between px-[1rem] text-[0.875rem] leading-[0.825rem] font-normal text-[#5e5e5e] uppercase transition-all duration-500 ease-in-out',
                      {
                        'min-lg:group-hover:opacity-0': isBigCard,
                        'text-white': isProject2 || isBigCard,
                      },
                    )}
                  >
                    <p>{project.title}</p>
                    <p>{project.release}</p>
                  </div>
                  <div
                    className={cn(
                      'h-full w-full overflow-hidden rounded-[1.125rem] transition-all duration-500 ease-in-out',
                      {
                        'min-lg:group-hover:h-[32rem]': isBigCard,
                      },
                    )}
                  >
                    {isMobile && project?.image_mb?.url && (
                      <Image
                        alt={project?.image_mb?.alt ?? ''}
                        src={project?.image_mb?.url ?? ''}
                        width={345.5}
                        height={339.14}
                        className={cn('h-full w-full object-cover', {
                          'transition-all duration-500 ease-in-out sm:h-[34.625rem] lg:group-hover:scale-105':
                            isBigCard,
                        })}
                      />
                    )}
                    {!isMobile && project?.image_pc?.url && (
                      <Image
                        alt={project?.image_pc?.alt}
                        src={project?.image_pc?.url}
                        width={isBigCard ? 697 : 345.5}
                        height={isBigCard ? 554 : 339.14}
                        className={cn('h-full w-full object-cover', {
                          'transition-all duration-500 ease-in-out sm:h-[34.625rem] lg:group-hover:scale-105':
                            isBigCard,
                        })}
                      />
                    )}
                  </div>
                  {(isProject3 || isProject4) && (
                    <div className='mt-[0.71331rem] flex w-full items-center justify-between px-[1.35rem]'>
                      <p className='font-productsans text-[1.28456rem] leading-[0.89244rem] font-bold text-[#5E5E5E] uppercase'>
                        {project.title}
                      </p>
                      <p className='flex w-[9.39744rem] shrink-0 items-center justify-between'>
                        <span className='text-[1.28456rem] leading-[0.89244rem] font-bold text-[#5E5E5E] uppercase'>
                          Chi tiết
                        </span>
                        <Image
                          alt=''
                          width={47.9359}
                          height={13.5926}
                          src='/project/arrow-left.svg'
                          className='h-auto w-[2.996rem]'
                        />
                      </p>
                    </div>
                  )}
                </Link>
              )
            })}

            {all_project && all_project?.title_link?.url && (
              <Link
                href={all_project?.title_link?.url ?? '#'}
                className={cn(
                  'relative col-start-4 row-span-4 block h-[21.1963rem] w-[21.5938rem] overflow-hidden rounded-[1.125rem]',
                )}
              >
                <div className='absolute top-[0.6875rem] z-[2] flex w-full justify-between px-[1rem] text-[0.875rem] leading-[0.825rem] font-normal text-[##5e5e5e] uppercase'>
                  <p>{all_project?.title_link?.title}</p>
                  <Image
                    alt=''
                    width={44.3146}
                    height={12.5658}
                    src='/project/arrow-left.svg'
                    className='h-auto w-[2.76969rem]'
                  />
                </div>
                <div>
                  {all_project?.all_project_image?.url && (
                    <Image
                      alt=''
                      width={400}
                      height={400}
                      src={all_project?.all_project_image?.url}
                      className='h-full w-full object-cover transition-all duration-500 ease-in-out'
                    />
                  )}
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className='pt-[1.75rem] pb-[7.84rem] sm:hidden'>
          {projects?.all_project?.title_link?.url && (
            <Link
              href={projects?.all_project?.title_link?.url}
              className='block w-full'
            >
              <ButtonAllProjects
                color='#1550E5'
                borderColor='#1550E5'
                borderLine='rgba(21, 80, 229, 0.10)'
              >
                Tất cả dự án
              </ButtonAllProjects>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
