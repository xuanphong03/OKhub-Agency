import {IMedia} from '@/types/media.interface'

export interface IValueToCustomerItem {
  title?: string
  description?: string
  tag?: string
  thumbnail?: {
    url: string
    width: number
    height: number
  }
}

interface IValueItem {
  title: string
  value_content: string
  thumbnail: IMedia
}

export interface IValueToCustomer {
  title?: string
  value_1?: IValueToCustomerItem
  value_2?: IValueToCustomerItem
  value_3?: IValueToCustomerItem
  contact?: {
    title?: string
    url?: string
  }
  our_value: IValueItem[]
}
