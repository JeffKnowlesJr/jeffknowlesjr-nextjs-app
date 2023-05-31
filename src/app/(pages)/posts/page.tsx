import { FC } from 'react' // Function Component
import Banner from '../../components/banner'
import getPostMetadata from '../../components/post/getPostMetadata'
import PostPreview from '../../components/post/PostPreview'

interface pageProps {}

const page: FC<pageProps> = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </>
  )
}

export default page
