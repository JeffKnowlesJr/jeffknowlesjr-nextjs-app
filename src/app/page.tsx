import { FC } from 'react' // Function Component
import Banner from './components/banner'
import About from './components/about'
import Work from './components/work'

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <Banner />
      <About />
      <Work />
    </>
  )
}

export default page
