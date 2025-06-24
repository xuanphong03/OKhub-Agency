'use client'

import OurProjects from '@/app/(main)/_components/our-projects/our-projects'
import SectionField from '@/app/(main)/_components/process-and-field/components/section-field'
import {WorkflowItem} from '@/app/(main)/_components/process-and-field/components/workflow-item'
import {WorkflowLastItem} from '@/app/(main)/_components/process-and-field/components/workflow-last-item'
import {CustomBadge} from '@/components/custom-badge'
import {IOurProjects} from '@/types/projects.interface'
import {Commitment, Workflow} from '@/types/workflow.interface'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
import {useEffect, useRef} from 'react'

const ProcessAndField = ({
  workflow,
  commitment,
  projects,
}: {
  workflow: Workflow
  commitment: Commitment
  projects: IOurProjects
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth < 639) {
      const snappingElements =
        document.querySelectorAll<HTMLElement>('.item-snapping')
      snappingElements.forEach((el, index) => {
        el.style.zIndex = `${index + 1}`
      })
      const layerBackground = document.getElementById('layer-background')

      if (layerBackground) {
        ScrollTrigger.create({
          trigger: '#snapping-section',
          start: 'top top',
          end: '50% bottom',
          pin: layerBackground,
          pinSpacing: false,
          anticipatePin: 1,
        })
      }

      const sections = gsap.utils.toArray<HTMLElement>('.card')
      const lastSection = document.querySelector<HTMLElement>(
        '.item-snapping.last-item',
      )
      sections.forEach((section, i) => {
        const startpin = 68.25 * i
        const endpin = lastSection ? `top ${67.5 * sections.length}` : undefined
        ScrollTrigger.create({
          trigger: section,
          start: `top ${startpin}`,
          endTrigger: lastSection,
          end: endpin,
          pin: true,
          pinSpacing: false,
          // markers: true,
        })
      })
      // const triggerProcedure = document.querySelector(
      //   '#layer-background .badge__label .badge__label-text',
      // )

      // gsap.set(triggerProcedure, {width: '0%'})
      // gsap.to(triggerProcedure, {
      //   width: '100%',
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: '#layer-background',
      //     start: 'top 85%',
      //     toggleActions: 'play none none none',
      //   },
      // })
    } else {
      if (!containerRef.current || !workflow || !commitment) return

      const itemElements =
        containerRef.current.querySelectorAll<HTMLElement>('.item-snapping')
      const layerBackground = document.getElementById('layer-background')

      const lastSection = document.querySelector('.item-snapping.last-item')

      // Set z-index for items
      itemElements.forEach((el, index) => {
        el.style.zIndex = String(index + 1)
      })

      // Create timeline for desktop animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#snapping-section',
          start: 'top top',
          end: `+=${(itemElements.length - 3) * 100}%`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
        defaults: {ease: 'none'},
      })

      // Desktop animation
      itemElements.forEach((item, index) => {
        if (index === itemElements.length - 1) {
          timeline.to(
            item,
            {
              width: '100%',
            },
            '<',
          )
          timeline.to(
            item.querySelector('.last-item__btn svg'),
            {
              rotate: 720,
              ease: 'power2.inOut',
            },
            '<',
          )
        } else {
          timeline.to(item, {width: '7.61rem'})
          timeline.to(item.querySelector('.item-desc'), {opacity: 0}, '<')
        }
      })

      // Mobile animation
      if (window.innerWidth <= 639) {
        // Pin background layer
        ScrollTrigger.create({
          trigger: '#snapping-section',
          start: 'top top',
          end: '50% bottom',
          pin: layerBackground,
          pinSpacing: false,
          anticipatePin: 1,
          // 			markers: true,
        })

        const sections = gsap.utils.toArray<HTMLElement>('.card')
        sections.forEach((section, i) => {
          const startpin = 68.25 * i
          ScrollTrigger.create({
            trigger: section,
            start: `top ${startpin}`,
            endTrigger: lastSection,
            end: `top ${67.5 * sections.length}`,
            pin: true,
            pinSpacing: false,
          })
        })
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [workflow, commitment])

  if (!workflow || !commitment) return null

  return (
    <>
      <div id='warpper_section'>
        <section
          id='snapping-section'
          ref={containerRef}
          className='xsm:z-50 relative w-full bg-[linear-gradient(180deg,#548BEB_0%,#1767F0_21.3%)]'
        >
          <div
            id='layer-background'
            className='xsm:h-auto relative h-screen overflow-hidden'
          >
            <Image
              src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
              alt=''
              className='xsm:hidden absolute top-0 right-[-18.67rem] block h-[60.88781rem] w-[97.4205rem] object-contain'
              width={974.205}
              height={608.8781}
            />
            <Image
              src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/foot-r-img-bg-1.webp'
              alt=''
              className='xsm:hidden absolute right-[17.81rem] bottom-[22.6875rem] z-[1] block h-[36.25rem] w-[75rem] object-contain'
              width={750}
              height={362.5}
            />
            <div className='ovlay-mb'></div>
            <div className='xsm:static xsm:top-0 xsm:left-0 xsm:right-0 xsm:z-50 absolute top-[5.69rem] right-0 left-[3.12rem] z-10 sm:h-[8.32188rem]'>
              {workflow.tag && (
                <div className='badge__label xsm:relative xsm:top-0 xsm:z-50 absolute top-[-25%] m-[0.625rem] flex w-max flex-col'>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: workflow.tag,
                    }}
                    className='badge__label-text xsm:h-[1.374rem] xsm:p-[0.07231rem_0.21694rem] xsm:text-[0.75rem] flex h-[3.04881rem] items-center justify-center overflow-hidden bg-[#1550e5] px-[0.48138rem] text-[1.625rem] leading-[134%] font-normal whitespace-nowrap text-white transition-all duration-[0.75s] ease-in-out max-sm:after:absolute max-sm:after:right-0 max-sm:after:bottom-0 max-sm:after:size-[0.61963rem] max-sm:after:translate-full max-sm:after:bg-[#1550E5] sm:relative'
                  ></h2>
                </div>
              )}
              <div className='xsm:bottom-[100%] xsm:left-[-1.65rem] xsm:hidden absolute bottom-1/2 left-0 w-max'>
                <CustomBadge
                  classPosition='size-[1.3825rem] xsm:size-[0.625rem]'
                  className='xsm:px-1 xsm:py-0'
                  classText='text-white text-[1.625rem] font-normal leading-[134%] xsm:text-[0.75rem]'
                >
                  {workflow.tag}
                </CustomBadge>
              </div>
              <div
                className='xsm:p-[0.74019rem_0.80875rem_2.77063rem_0.80875rem] xsm:text-[1.625rem] xsm:mb-title-h3 xsm:left-[-1.65rem] [&_p]:before:content-[" "] xsm:[&_p]:before:w-[3.65rem] xsm:[&_p]:before:h-[0.125rem] left-0 w-full text-[2.875rem] leading-[1.39] text-white sm:absolute sm:h-[4.16094rem] [&_p]:before:inline-flex [&_p]:before:w-[16rem]'
                dangerouslySetInnerHTML={{
                  __html: workflow.title,
                }}
              ></div>
            </div>

            <Image
              alt=''
              width={989.3337}
              height={216.7753}
              src='/workflow/okhub-text-blue.svg'
              className='xsm:w-[19.875rem] xsm:h-[3.5625rem] xsm:ml-[1.81rem] top-1/2 left-1/2 h-[13.94525rem] w-[77.47363rem] transition-all duration-[0.7s] sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2'
            />
          </div>

          <div className='xsm:flex-col xsm:relative xsm:border-t-none absolute bottom-0 z-10 flex w-full overflow-x-hidden border-t-[0.833px] border-[#e6e8ea]'>
            {workflow?.workflow_list?.map((item, index) => (
              <WorkflowItem
                key={index}
                item={item}
                index={index}
              />
            ))}
            <WorkflowLastItem workflow={workflow} />
          </div>
        </section>
        <OurProjects projects={projects} />
        <SectionField commitment={commitment} />
      </div>
      <div className='relative z-50 -mb-2 h-[15.6875rem] w-full border-none bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_100%)] sm:hidden'></div>
    </>
  )
}

export default ProcessAndField
