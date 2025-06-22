'use client'

import SectionField from '@/app/(main)/_components/process-and-field/components/section-field'
import {WorkflowItem} from '@/app/(main)/_components/process-and-field/components/workflow-item'
import {WorkflowLastItem} from '@/app/(main)/_components/process-and-field/components/workflow-last-item'
import {CustomBadge} from '@/components/custom-badge'
import {Commitment, Workflow} from '@/types/workflow.interface'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
import {useEffect, useRef} from 'react'

const ProcessAndField = ({
  workflow,
  commitment,
}: {
  workflow: Workflow
  commitment: Commitment
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
      const triggerProcedure = document.querySelector(
        '#layer-background .badge__label .badge__label-text',
      )

      gsap.set(triggerProcedure, {width: '0%'})
      gsap.to(triggerProcedure, {
        width: '100%',
        opacity: 1,
        scrollTrigger: {
          trigger: '#layer-background',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
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
                    className='badge__label-text xsm:h-[1.374rem] xsm:p-[0.07231rem_0.21694rem] xsm:text-[0.75rem] flex h-[3.04881rem] w-0 items-center justify-center overflow-hidden bg-[#1550e5] px-[0.48138rem] text-[1.625rem] leading-[134%] font-normal whitespace-nowrap text-white opacity-0 transition-all duration-[0.75s] ease-in-out max-sm:after:absolute max-sm:after:right-0 max-sm:after:bottom-0 max-sm:after:size-[0.61963rem] max-sm:after:translate-full max-sm:after:bg-[#1550E5] sm:relative'
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
            {/* <svg
              id=''
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1240 224'
              className='xsm:w-[19.875rem] xsm:h-[3.5625rem] xsm:ml-[1.81rem] top-1/2 left-1/2 h-[13.94525rem] w-[77.47363rem] transition-all duration-[0.7s] sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2'
            >
              <g clipPath='url(#clip0_906_7934)'>
                <path
                  d='M900.628 138.827V221.631H861.637V138.92C861.637 116.064 844.181 97.5177 822.647 97.5177C801.113 97.5177 783.657 116.049 783.657 138.92V221.631H744.667V0H783.657V67.105C795.12 60.0559 808.441 56.0235 822.647 56.0235C836.853 56.0235 850.174 60.0559 861.637 67.105C884.956 81.4187 900.628 108.184 900.628 138.827Z'
                  fill='#3F84FA'
                />
                <path
                  d='M1161.83 56.0235C1147.62 56.0235 1134.31 60.0713 1122.85 67.1358V0H1083.96V138.827C1083.96 169.456 1099.6 196.205 1122.85 210.519C1134.31 217.583 1147.62 221.631 1161.83 221.631C1204.82 221.631 1239.69 184.554 1239.69 138.827C1239.69 93.1005 1204.84 56.0235 1161.83 56.0235ZM1161.83 180.306C1140.29 180.306 1122.85 161.775 1122.85 138.904C1122.85 116.033 1140.29 97.5023 1161.83 97.5023C1183.36 97.5023 1200.8 116.033 1200.8 138.904C1200.8 161.775 1183.36 180.306 1161.83 180.306Z'
                  fill='#3F84FA'
                />
                <path
                  d='M1061.32 55.9277V149.105C1061.32 177.994 1045.45 202.943 1022.48 214.594C1013.6 219.104 1003.66 221.628 993.168 221.628C982.677 221.628 972.795 219.119 963.943 214.64C940.929 202.989 925.011 178.025 925.011 149.105V55.9277H963.943V149.151C963.943 166.343 977.047 180.287 993.212 180.287C1009.38 180.287 1022.48 166.343 1022.48 149.151V55.9277H1061.32Z'
                  fill='#3F84FA'
                />
                <path
                  d='M364.285 148.877C360.904 143.244 356.405 138.549 350.949 134.963C345.551 131.408 339.5 128.561 332.942 126.467C326.47 124.405 319.94 122.712 313.555 121.465C301.976 118.972 293.095 116.602 287.189 114.401C281.762 112.385 279.136 109.214 279.136 104.705C279.136 100.687 280.95 97.2091 284.693 94.0847C288.481 90.9141 294.532 89.3135 302.658 89.3135C309.811 89.3135 316.196 90.868 321.623 93.9462C327.036 97.009 331.316 101.242 334.349 106.505L335.031 107.69L368.217 91.0527L367.375 89.5905C361.252 78.8783 352.807 70.2901 342.272 64.0567C331.737 57.8388 318.416 54.6836 302.658 54.6836C293.342 54.6836 284.737 56.0226 277.104 58.6545C269.443 61.3018 262.811 64.9494 257.399 69.5206C251.957 74.1071 247.677 79.4632 244.673 85.4503C241.655 91.4682 240.116 97.8093 240.116 104.304C240.116 112.8 241.8 119.972 245.108 125.667C248.402 131.3 252.755 135.995 258.037 139.581C263.261 143.136 269.254 145.953 275.813 147.953C282.285 149.923 288.974 151.647 295.707 153.079C300.539 154.171 305.197 155.156 309.55 156.034C313.874 156.911 317.676 158.019 320.854 159.312C323.974 160.589 326.513 162.082 328.414 163.76C330.112 165.253 330.939 167.161 330.939 169.562C330.939 174.303 328.951 178.305 324.845 181.798C320.709 185.323 314.31 187.093 305.836 187.093C297.361 187.093 290.367 185.2 284.244 181.491C278.135 177.766 273.23 172.379 269.66 165.453L269.022 164.206L233.195 181.306L233.891 182.753C240.189 195.789 249.229 205.885 260.765 212.796C272.258 219.676 286.885 223.169 304.239 223.169C315.529 223.169 325.352 221.507 333.449 218.229C341.546 214.951 348.366 210.641 353.706 205.424C359.061 200.191 363.051 194.419 365.605 188.247C368.159 182.075 369.451 176.042 369.451 170.301C369.451 161.805 367.724 154.618 364.314 148.923L364.285 148.877Z'
                  fill='#3F84FA'
                />
                <path
                  d='M640.179 55.4062C596.908 55.4062 561.821 92.6218 561.821 138.518C561.821 184.414 596.908 221.63 640.179 221.63C683.45 221.63 718.537 184.414 718.537 138.518C718.537 92.6218 683.45 55.4062 640.179 55.4062ZM640.179 180.074C618.543 180.074 601 161.466 601 138.518C601 115.57 618.543 96.9621 640.179 96.9621C661.814 96.9621 679.358 115.57 679.358 138.518C679.358 161.466 661.814 180.074 640.179 180.074Z'
                  fill='#3F84FA'
                />
                <path
                  d='M539.45 113.892C529.553 80.0166 499.792 55.4062 464.589 55.4062C421.318 55.4062 386.231 92.6218 386.231 138.518C386.231 184.414 421.318 221.63 464.589 221.63C497.006 221.63 524.808 200.744 536.722 170.978L498.573 159.173C491.811 171.655 479.143 180.074 464.589 180.074C444.433 180.074 427.833 163.913 425.657 143.135H542.831C542.903 141.612 542.947 140.072 542.947 138.518C542.947 129.945 541.728 121.68 539.45 113.892ZM432.041 113.892C439.21 102.995 451.123 95.8693 464.589 95.8693C478.055 95.8693 489.983 102.995 497.151 113.892H432.041Z'
                  fill='#3F84FA'
                />
                <path
                  d='M58.8221 0C26.3906 0 0.097168 26.3263 0.097168 58.7983V185.475L33.7475 151.797C36.4465 149.095 39.842 147.54 43.3391 147.105C34.9664 135.046 30.0473 120.401 30.0473 104.608C30.0473 63.4039 63.4075 30.0021 104.56 30.0021C145.712 30.0021 179.072 63.4039 179.072 104.608C179.072 145.812 145.712 179.213 104.56 179.213C88.5691 179.213 73.7681 174.157 61.6371 165.571C61.1873 169.029 59.6347 172.385 56.9792 175.058L22.879 209.201H150.312C182.744 209.201 209.037 182.875 209.037 150.403V0H58.8221Z'
                  fill='#3F84FA'
                />
                <path
                  d='M104.572 54.8759C77.1323 54.8759 54.9019 77.1486 54.9019 104.608C54.9019 132.068 77.1468 154.34 104.572 154.34C131.997 154.34 154.242 132.068 154.242 104.608C154.242 94.714 151.34 85.5027 146.363 77.7443C142.822 82.8584 136.931 86.2146 130.256 86.2146C119.431 86.2146 110.667 77.4392 110.667 66.6006C110.667 62.5907 111.871 58.8568 113.931 55.7621C110.899 55.181 107.764 54.8613 104.558 54.8613L104.572 54.8759Z'
                  fill='#3F84FA'
                />
              </g>
              <defs>
                <clipPath id='clip0_906_7934'>
                  <rect
                    width='1239.58'
                    height='223.124'
                    fill='white'
                    transform='translate(0.097168)'
                  />
                </clipPath>
              </defs>
            </svg> */}
            <Image
              alt=''
              width={989.3337}
              height={216.7753}
              src='/workflow/okhub-text-blue.svg'
              className='xsm:w-[19.875rem] xsm:h-[3.5625rem] xsm:ml-[1.81rem] top-1/2 left-1/2 h-[13.94525rem] w-[77.47363rem] transition-all duration-[0.7s] sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2'
            />
          </div>

          <div className='xsm:flex-col xsm:relative xsm:border-t-none absolute bottom-0 z-10 flex w-full overflow-x-hidden border-t border-[#e6e8ea]'>
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

        <SectionField commitment={commitment} />
      </div>
      <div className='relative z-50 -mb-2 h-[15.6875rem] w-full border-none bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_100%)] sm:hidden'></div>
    </>
  )
}

export default ProcessAndField
