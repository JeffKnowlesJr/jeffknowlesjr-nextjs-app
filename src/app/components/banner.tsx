import React, { FC } from 'react'
import Image from 'next/image'

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen relative mx-auto drop-shadow max-h-96">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/sigmund-4UGmm3WRUoQ-unsplash.jpg"
          alt="Picture of the author"
        />
      </section>
    </>
  )
}

export default Banner
