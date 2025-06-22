import {IMedia} from '@/types/media.interface'

export interface Definition {
  definition_partner: IMedia[]
  definition_sub_tag: string
  definition_title: string
  definition_img_company: IMedia
  definition_content: string
  definition_tag: {
    title: string
    value: string
    unit: string
  }[]
}
