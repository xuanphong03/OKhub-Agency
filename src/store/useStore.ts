import fetchData from '@/fetches/fetchData'
import {IBanner} from '@/types/banner.interface'
import {Definition} from '@/types/definition.interface'
import {IListenToCustomer} from '@/types/listen.interface'
import {ImpressivePost} from '@/types/post.interface'
import {IValueToCustomer} from '@/types/value.interface'
import {Commitment, Workflow} from '@/types/workflow.interface'
import {create} from 'zustand'

interface StoreState {
  data: {
    banner_slides: IBanner[]
    definition: Definition
    workflow: Workflow
    commitment: Commitment
    value_to_customer: IValueToCustomer
    impressive_post: ImpressivePost
    listen_to_customer: IListenToCustomer
  }
  loading: boolean
  error: string | null
  fetchData: () => Promise<void>
}

export const useStore = create<StoreState>((set) => ({
  data: {
    banner_slides: [],
    definition: {} as Definition,
    workflow: {} as Workflow,
    commitment: {} as Commitment,
    value_to_customer: {} as IValueToCustomer,
    impressive_post: {} as ImpressivePost,
    listen_to_customer: {} as IListenToCustomer,
  },
  loading: false,
  error: null,
  fetchData: async () => {
    try {
      set({loading: true, error: null})

      const {acf} = await fetchData({
        api: '/v2/pages/11?_fields=acf&acf_format=standard#',
        method: 'GET',
      })
      set({data: acf, loading: false})
    } catch (error) {
      set({error: error as string, loading: false})
    }
  },
}))
