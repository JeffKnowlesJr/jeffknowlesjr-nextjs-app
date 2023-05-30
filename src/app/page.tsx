import { FC } from 'react' // Function Component
import Header from './components/header'
import Banner from './components/banner'
import About from './components/about'
import Footer from './components/footer'
import Work from './components/work'

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <Header />
      <main className=" mx-auto">
        <Banner />
        <About />
        <Work />
      </main>
      <Footer />
    </>
  )
}

export default page
