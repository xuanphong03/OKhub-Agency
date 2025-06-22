import {ILink} from '@/types/header.interface'
import {IMedia} from '@/types/media.interface'

export interface IListenToCustomer {
  title: string
  working_rule: {
    rule: string
  }[]
  representative_face: {
    thumbnail: IMedia
    first_rule: string
    second_rule: string
  }[]
  contact: ILink
}
