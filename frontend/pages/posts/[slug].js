import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

// import {PortableText} from '@portabletext/react'
import {client} from '../../lib/client'
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

    console.log(post);
    
    const {
      title = 'Missing title',
      name = 'Missing name',
      authorImage,
      _id,
      mainImage,
      body
    } = post

        // Blog Loader
    const { isLoading, isError } = fetcher('api/posts')
        
        if(isLoading) return <Spinner></Spinner>;
        if(isError) return <Error></Error>
    


    return (
      <Format>
    <section className='container mx-auto md:px-2 py-16 '>

    <h2 className="text-3xl text-center pr-6">Author</h2>
    <div className='flex justify-center'>

      {authorImage && (
        
            <Author name={name} image={authorImage} />
      )}

    </div>
    <div className="post py-10 mx-auto justify-center w-[90%]">

      <h1 className='font-bold text-4xl text-center pb-5'>{title}</h1>
      <div className="py-10">
       {mainImage && <img className="mx-auto" src={urlFor(mainImage).url() || "/"} loading="lazy" width={900} height={600}/>}
        </div>
        <BlockContent className="justify-center text-[1rem] md:text-[1.3rem]"
            blocks={body}
            serializers={serializers} 
            projectId="ek734hes"
            dataset="production"
            imageUrlBuilder={urlFor}
            imageOptions={{ w: 316, h: 240, fit: 'max' }} 
            
        />
        </div>
        <CommentForm postId={_id} post={post}/>
        <CommentSection comments={post.comments} />


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
  'comments': *[
    _type == "comment" && 
    post._ref == ^._id 
    ] {
_id, 
_ref,
name, 
email, 
comment, 
_createdAt
}
}`


export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const data = await client.fetch(query, { slug })

  
  return {
    props: {post: data},
   }
}
export default Post