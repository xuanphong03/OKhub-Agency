import {ILink} from '@/types/header.interface'
import {IMedia} from '@/types/media.interface'

export interface Workflow {
  title: string
  tag: string
  workflow_list: {
    icon: IMedia
    title: string
    description: string
  }[]
  contact: {
    contact_on_pc: ILink
    contact_on_mobile: ILink
  }
  subtitle: string
  description: string
}

export interface Commitment {
  title: string
  tag: string
  img: IMedia[]
}
