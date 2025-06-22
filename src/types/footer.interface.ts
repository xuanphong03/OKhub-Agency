import {ILink} from '@/types/header.interface'
import {IMedia} from '@/types/media.interface'

export interface Footer {
  logo_footer: IMedia
  desc: string
  footer_link: {
    link: ILink
    link_desc: string
  }[]
  hotline: {
    title: string
    phone_number: string
    mail: string
    advise: string
    image_advise: IMedia
    qr_advise: IMedia
  }
  social: SocialList
  credential: Credential
}

export interface Social {
  social_icon: IMedia
  social_link: ILink
}

export interface SocialList {
  map(
    arg0: (item: Social, index: number) => import('react').ReactNode,
  ): import('react').ReactNode[]
  social_list: Social[]
}

export interface Credential {
  title: string
  desc: string
  link_download: ILink
  image: IMedia
}
