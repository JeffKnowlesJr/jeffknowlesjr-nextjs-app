import React, { FC } from 'react'

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-96 my-8 justify-between container mx-auto items-center">
        {/* Text Area */}
        <div className="w-1/6  ml-auto text-right">
          {' '}
          <ul className="flex-col justify-end leading-tight">
            <li>
              <a href="#" className=" ">
                Development
              </a>
            </li>
            <li>
              <a href="#" className=" ">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className=" ">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex items-center justify-center absolute md:relative opacity-75 md:opacity-100 ">
          <div className="flex flex-col justify-center items-end  md:h-min 2xl:w-3/5 md:w-3/4 ">
            <h1 className="text-4xl font-bold  mb-4 mr-auto font-light">
              About Me
            </h1>
            <p className="text-lg text-left w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              sapiente aspernatur eveniet dolorum, repudiandae maxime. Sunt
              suscipit explicabo.
            </p>
          </div>
        </div>

        {/* Image Background Area */}
        <div
          className="lg:w-1/3 w-2/5 bg-cover bg-center h-96 relative"
          style={{
            backgroundImage: "url('/images/avechenri-43pM9PNotug-unsplash.jpg')"
          }}
        ></div>
      </section>
    </>
  )
}

export default About
