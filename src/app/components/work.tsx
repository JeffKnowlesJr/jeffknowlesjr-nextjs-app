import React, { FC } from 'react'
import Image from 'next/image'

interface WorkProps {}

const Work: FC<WorkProps> = ({}) => {
  return (
    <>
      <section className="container mx-auto h-96 flex gap-10">
        <div className="w-1/2 bg-green-200">.</div>
        <div className="flex w-1/2 h-96 gap-7">
          <div className="w-1/2 bg-blue-200 relative flex flex-col justify-start ">
            <Image
              layout="fill"
              objectFit="contain"
              // width={100}
              // height={100}
              quality={100}
              src="/images/sigmund-4UGmm3WRUoQ-unsplash.jpg"
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-start"></div>
          </div>
          <div className="w-1/2 bg-red-200 relative flex flex-col justify-start ">
            {' '}
            <div className="">
              <Image
                layout="fill"
                objectFit="contain"
                // width={100}
                // height={100}
                quality={100}
                src="/images/sigmund-4UGmm3WRUoQ-unsplash.jpg"
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col justify-start"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
