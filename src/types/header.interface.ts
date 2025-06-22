export interface ILink {
  title: string
  url: string
  target?: string
}

export interface Logo {
  url: string
  alt: string
}

export interface Header {
  logo?: Logo
  menu?: Array<{link: ILink}>
  contact?: ILink
  cta: {
    link_facebook: ILink
    link_zalo: ILink
    cta_quote: {
      title: string
      desc: string
      link: ILink
    }
  }
}
