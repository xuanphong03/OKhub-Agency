'use client'

import CustomBorderedButtonV2 from '@/components/bordered-button-v2'
import type {ImpressivePost} from '@/types/post.interface'

interface ImpressivePostHeaderProps {
  impressivePost: ImpressivePost
}

const ImpressivePostHeader = ({impressivePost}: ImpressivePostHeaderProps) => {
  return (
    <div className='xsm:mb-[1.5rem] mb-10 flex items-center justify-between'>
      <h2
        className='xsm:mb-title-h3 xsm:pl-[0.75rem] text-[2.875rem] leading-[4rem] font-normal text-[#0725b7]'
        dangerouslySetInnerHTML={{
          __html: impressivePost?.title,
        }}
      ></h2>
      {impressivePost?.discovery_post &&
        impressivePost?.discovery_post?.url && (
          <a
            href={impressivePost?.discovery_post?.url}
            className='vtc__link-detail xsm:hidden'
          >
            <CustomBorderedButtonV2
              color='#1550E5'
              borderColor='#1550E5'
              borderLine='rgb(134 132 132 / 10%)'
            >
              {impressivePost?.discovery_post?.title}
            </CustomBorderedButtonV2>
          </a>
        )}
    </div>
  )
}

export default ImpressivePostHeader
