export interface ImpressivePost {
  title: string
  discovery_post: {
    title?: string
    url: string
    target?: string
  }
}

export interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  thumbnail: string
  link: string
}
