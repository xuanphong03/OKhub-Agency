import Image from 'next/image'

interface WorkingRule {
  rule: string
}

interface WorkingRulesProps {
  rules: WorkingRule[]
}

export const WorkingRules = ({rules}: WorkingRulesProps) => {
  return (
    <ul className='grid grid-cols-2 gap-y-[0.88rem] md:gap-x-[2.75rem] mb-[2.375rem] list-none xsm:grid-cols-1 xsm:gap-y-[0.44rem]'>
      {rules?.map((item, index) => (
        <li
          className='flex items-center'
          key={index}
        >
          <Image
            alt=''
            src='/images/arrowV2.svg'
            className='w-[0.67456rem] h-[0.991rem] object-cover mr-[0.69rem]'
            width={10.79296}
            height={15.856}
          />
          <span className='flex-1 text-white text-[1.125rem] font-normal leading-[139%] xsm:mb-body-14'>
            {item.rule}
          </span>
        </li>
      ))}
    </ul>
  )
}
