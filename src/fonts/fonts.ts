import localFont from 'next/font/local'

export const productSans = localFont({
  src: [
    {
      path: './Product-Sans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Product-Sans-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './Product-Sans-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Product-Sans-Bold-Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-product-sans',
})
