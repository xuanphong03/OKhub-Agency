import {Workflow} from '@/types/workflow.interface'
import Image from 'next/image'

type WorkflowItemType = Workflow['workflow_list'][0]

interface WorkflowItemProps {
  item: WorkflowItemType
  index: number
}
const colorbg = [
  'linear-gradient(180deg, #0059f1 2.88%, #548beb 428.82%)',
  'linear-gradient(180deg, #0059f1 -26.97%, #548beb 177.73%), #091423',
  'linear-gradient(144deg, #0059f1 5.6%, #548beb 81.07%),#091423',
  'linear-gradient(180deg, #0059f1 -102.03%, #548beb 100%),#091423',
  'linear-gradient(180deg, #0059f1 -298.03%, #548beb 100%),#091423',
  'linear-gradient(180deg, #0059f1 -298.03%, #548beb 100%),#091423',
]
export const WorkflowItem = ({item, index}: WorkflowItemProps) => {
  const numberText = String(index + 1).padStart(2, '0')

  return (
    <div
      style={{background: colorbg[index]}}
      className='card xsm:border-l-none border-t-[0.833px] border-t-solid border-t-[rgba(239,239,239,0.3)] xsm:p-[2.125rem_0.9375rem] item-snapping flex-shrink-0 flex flex-col justify-between overflow-hidden p-5 pl-[1.875rem] w-[34.25rem] h-[22.6875rem] sm:border-l sm:border-[#e6e8ea] bg-gradient-to-b from-[#548beb] to-[#0059f1] xsm:w-full xsm:h-[18.1875rem]'
    >
      <div className='item-snapping__warpper'>
        <p className='w-[34.25rem] opacity-70 text-white text-base font-normal mb-2 uppercase xsm:w-full xsm:text-[#E6E8EA]'>
          {numberText}. {item.title}
        </p>
        <Image
          src={item.icon.url}
          alt={item.title}
          width={3.125}
          height={3.00944}
          className='w-[3.125rem] h-[3.00944rem] object-contain'
        />
      </div>
      <div
        className='item-desc w-[25rem] text-white text-[1.25rem] leading-[1.5rem] font-normal xsm:mb-body-16 xsm:w-full'
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      ></div>
    </div>
  )
}
