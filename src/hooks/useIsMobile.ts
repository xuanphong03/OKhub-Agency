'use client'
import {useEffect, useState} from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 639)
    }

    const debounce = (func: () => void, delay: number) => {
      let timeout: ReturnType<typeof setTimeout>
      return () => {
        clearTimeout(timeout)
        timeout = setTimeout(func, delay)
      }
    }

    const debouncedCheckMobile = debounce(checkMobile, 150)

    checkMobile()
    window.addEventListener('resize', debouncedCheckMobile)

    return () => {
      window.removeEventListener('resize', debouncedCheckMobile)
    }
  }, [])

  return isMobile
}

export default useIsMobile
