import { FC } from 'react' // Function Component

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <header className="bg-blue-200 text-white drop-shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold">
              Logo
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="flex flex-col md:flex-row h-screen">
          {/* Solid Background Area */}
          <div className="md:w-1/2 bg-green-700 text-white flex items-center justify-center absolute md:relative opacity-75 md:opacity-100">
            <div className="flex flex-col justify-center items-start h-screen md:h-min 2xl:w-3/5 md:w-3/4 ">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Our Website
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada scelerisque sagittis.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6">
                Get Started
              </button>
            </div>
          </div>

          {/* Image Background Area */}
          <div
            className="md:w-1/2 h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/avechenri-43pM9PNotug-unsplash.jpg')"
            }}
          ></div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default page
