import {IMedia} from '@/types/media.interface'
interface ILink {
  title: string
  url: string
  target: string
}
export interface IProject {
  id: number
  link: string
  title: string
  release: string
  image_pc: IMedia
  image_mb: IMedia
}
export interface IOurProjects {
  all_project: {
    all_project_image: IMedia
    icon: IMedia
    icon_mb: IMedia
    title_link: ILink
  }
  background_main_mb: IMedia
  background_main_pc: IMedia
  background_mb: IMedia
  background_pc: IMedia
  description: string
  project_btn: {
    project_btn_icon: IMedia
    project_btn_text: string
  }
  tag: string
  projects: IProject[]
}
