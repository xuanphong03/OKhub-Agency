import DefinitionMarquee from '@/app/(main)/_components/definition/components/definition-marquee'
import DefinitionArticle from './components/definition-article'
import DefinitionBackground from './components/definition-background'
import DefinitionCompany from './components/definition-company'
import DefinitionCard from '@/app/(main)/_components/definition/components/definition-card'
import type {Definition} from '@/types/definition.interface'

const Definition = ({definition}: {definition: Definition}) => {
  const {
    definition_title,
    definition_content,
    definition_img_company,
    definition_partner,
    definition_tag,
  } = definition
  return (
    <>
      <DefinitionMarquee definition_partner={definition_partner} />

      <section className='xsm:h-auto relative mt-[1rem] h-[50.625rem] overflow-hidden'>
        <DefinitionBackground />

        <DefinitionArticle
          title={definition_title}
          content={definition_content}
        />

        <div className='xsm:flex-col-reverse xsm:py-[0.625rem] relative z-50 mx-auto flex w-[92.39375rem] max-w-full items-start justify-between'>
          <div className='xsm:px-[0.625rem] xsm:mt-[1.125rem] xsm:pb-[5.95rem] mt-[4.275rem] grid grid-cols-2 gap-[0.75rem]'>
            {definition_tag?.map((item, index) => (
              <DefinitionCard
                key={index}
                title={item?.title ?? ''}
                value={item?.value ?? ''}
                unit={item?.unit ?? ''}
                className='h-[11.151rem] w-[16.8125rem] shrink-0 max-sm:h-[7.144rem] max-sm:w-[10.79625rem]'
              />
            ))}
          </div>
          <DefinitionCompany
            imageUrl={definition_img_company?.url}
            imageAlt={definition_img_company?.alt}
            imageWidth={definition_img_company?.width}
            imageHeight={definition_img_company?.height}
          />
        </div>
      </section>
    </>
  )
}

export default Definition
