import Link from "next/link"
// import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"
import { client } from "../lib/client"
import imageUrlBuilder  from '@sanity/image-url'
import {FaComment} from "react-icons/fa"


export default function articles({post}) {

    const {isLoading, isError } = fetcher('api/posts')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>




  return (
    <section className="container mx-auto md:px-20 py-10">
        <div className="w-[21rem] md:w-[30rem] mx-auto">


        <h1 className="font-bold text-4xl text-center">Our Blog</h1>
        <p className="pt-4 mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellendus quo modi quis quaerat obcaecati qui</p>
        </div>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                post.map((value, index) => (
                    <Post postData={value} key={index}></Post>
                ))
            }
        </div>
    </section>
  )
}



function Post( { postData } ){
    const {_id, title, _createdAt,publishedAt, slug="", mainImage, author, body } = postData;

    function urlFor (source) {
        return imageUrlBuilder(client).image(source)
      }


    return (
        <div className="item border-[2px] border-[#D2D2D2] rounded-[15px] overflow-hidden">
            <div className="images">
                <Link
        href={`/posts/${slug.current}`}  ><img src={urlFor(mainImage).width(393).height(219).url() || "/"} alt={`${title}'s picture`} className="rounded" width={500} height={350} /></Link>
            </div>
            <div className="info flex justify-center flex-col px-8 md:ml-0 py-4 text-[#1A1A1A]">
            <div className="title">
                    <Link
                href={`/posts/${slug.current}`} ><a className="text-2xl font-bold hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                    {/* <Link href={`/posts/${_id}`}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link> */}
                <div className="mt-5 flex justify-between "> 

                    <Link
                href={`/posts/${slug.current}`} ><a className=" hover:text-[#fb1c48]">- {new Date(publishedAt).toDateString() || "Unknown"}</a></Link>
                <p className="">
                   <div className="flex">
                   <FaComment/>
                   <small className="ml-1">5</small>
                   </div>
                </p>
                </div>
            </div>
        </div>
    )
}