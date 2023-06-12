
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

// import {PortableText} from '@portabletext/react'
import {client} from "../../lib/client"
import Author from '../../components/_child/author'
import Format from '../../layout/format'
import { useRouter } from 'next/router'
// import Image from 'next/image'
import fetcher from '../../lib/fetcher'
import Spinner from '../../components/_child/spinner'
import Error from '../../components/_child/error'
import BlockContent from '@sanity/block-content-to-react'
import CommentSection from "../../components/commentSection"
import CommentForm from '../../components/commentForm'


const serializers = {
  types: {
    blockContent: (props) => {
      return props.children
    }
  }
}



function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}



const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
        alt={value.alt || ' '}
        loading="lazy"
        src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
        )
      },
    },
  }
  
  
  
  const Post = ({post}) => {
    
    
    const {
      title = 'Missing title',
      name = 'Missing name',
      authorImage,
      _id,
      publishedAt,
      mainImage,
      body
    } = post

        // Blog Loader
    const { isLoading, isError } = fetcher('api/posts')
        
        if(isLoading) return <Spinner></Spinner>;
        if(isError) return <Error></Error>
    


    return (
      <Format>
    <section className='items-left mx-auto md:px-2 py-12 w-[87%] lg:w-[60%]'>

    <div className="">
      <h1 className='font-bold text-4xl pb-5'>{title}</h1>

    {/* <h2 className="text-3xl text-center pr-6">Author</h2> */}
      {authorImage && (
        
            <Author name={name} image={authorImage} createdAt={publishedAt} />
      )}

    </div>
    <div className="post py-10 
mx-auto justify-center">

      <div className="pb-11 w-full">
       {mainImage && <img className="mx-auto w-full" src={urlFor(mainImage).url() || "/"} loading="lazy" width={680} height={453.3}/>}
        </div>
        <BlockContent className=" text-[1.1rem] lg:text-[19px]"
            blocks={body}
            serializers={serializers} 
            projectId={process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_STUDIO_DATA_SET}
            imageUrlBuilder={urlFor}
            imageOptions={{ w: 316, h: 240, fit: 'max' }} 
            
        />
        <CommentForm postId={_id} post={post} comments={post.comments} title={title} />
        <CommentSection comments={post.comments} />
        </div>


    </section>
    </Format>
  )
}

const query = `*[_type == "post" && slug.current == $slug][0]
{
  title,
  "name": author->name,
  mainImage,
  "authorImage": author->image,
  body,
  _id,
  publishedAt,
  'comments': *[
    _type == "comment" && 
    post._ref == ^._id 
    ] {
_id, 
_ref,
name, 
email,
_createdAt,
comment, 
}
}`


export async function getServerSideProps(context) {
  const { slug = "" } = context.params
  const data = await client.fetch(query, { slug })

  
  return {
    props: {post: data},
   }
}
export default Post