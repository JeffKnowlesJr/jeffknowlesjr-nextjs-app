import { FC } from 'react'

interface TitleProps {}

const Header: FC<TitleProps> = ({}) => {
  return (
    <>
      <header className="text-black drop-shadow-lg p-8 pt-4">
        <div className="mx-auto pt-6">
          <nav className="flex items-end justify-between hover:text-gray-900">
            <ul className="flex-col justify-end leading-tight ">
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
            <a href="#" className="font-normal text-5xl text-right leading-1">
              Jeff Knowles ⏎
              <br />
              Jr
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
