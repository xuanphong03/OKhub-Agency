const FooterCopyright = () => {
  return (
    <div className='flex justify-between items-center w-[93.5625rem] mx-auto h-[3.1125rem] text-[#999] text-sm font-normal leading-6 xsm:w-full  xsm:py-[0.725rem] xsm:flex-col xsm:bg-[#F5F7F9] xsm:h-[4rem]'>
      <div className='flex items-center xsm:opacity-30'>
        <p className="relative pr-4 after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-[45%] after:bg-[#ccc] after:w-[0.05rem] xsm:pr-[0.375rem] xsm:text-[0.75rem]">
          ©2025 Công ty Cổ phần OKHUB
        </p>
        <p className='ml-4 xsm:ml-[0.375rem] xsm:text-[0.75rem]'>
          Giấy phép 17051691
        </p>
      </div>
      <p className='xsm:text-[0.75rem] xsm:opacity-30'>Designed by OKHub</p>
    </div>
  )
}

export default FooterCopyright
