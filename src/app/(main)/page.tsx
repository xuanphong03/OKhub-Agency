import Banner from '@/app/(main)/_components/banner/banner'
import Definition from '@/app/(main)/_components/definition/definition'
import ImpressivePost from '@/app/(main)/_components/impressive-post/impressive-post'
import ListenToCustomer from '@/app/(main)/_components/listen-to-customer/listen-to-customer'
import ProcessAndField from '@/app/(main)/_components/process-and-field/process-and-field'
import ValueToCustomer from '@/app/(main)/_components/value-to-customer/value-to-customer'
import fetchData from '@/fetches/fetchData'

export default async function Page() {
  const [data, categoriesData, filteredPosts, projectsRes] = await Promise.all([
    fetchData({
      api: `/v2/pages/11?_fields=acf&acf_format=standard#`,
      option: {
        next: {revalidate: 10},
      },
    }),
    fetchData({
      api: `/v2/categories`,
      option: {
        next: {revalidate: 10},
      },
    }),
    fetchData({
      api: `/api/v1/posts`,
      option: {
        next: {revalidate: 10},
      },
    }),
    fetchData({
      api: `/api/v1/home-projects`,
      method: 'GET',
      option: {
        next: {revalidate: 10},
      },
    }),
  ])
  console.log(data)
  return (
    <>
      <Banner bannerSlides={data?.acf?.banner_slides} />
      <Definition definition={data?.acf?.definition} />
      <ValueToCustomer valueToCustomer={data?.acf?.value_to_customer} />
      <ProcessAndField
        workflow={data?.acf?.workflow}
        commitment={data?.acf?.commitment}
        projects={{...data?.acf?.home_projects, projects: projectsRes}}
      />
      <ImpressivePost
        dataFilteredPosts={filteredPosts}
        categoriesData={categoriesData}
        impressivePost={data?.acf?.impressive_post}
      />
      <ListenToCustomer listenToCustomer={data?.acf?.listen_to_customer} />
    </>
  )
}
