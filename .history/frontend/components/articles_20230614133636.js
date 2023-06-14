import Link from "next/link";
import { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/client";
import dynamic from "next/dynamic";

const INITIAL_VISIBLE_POSTS = 10;

export default function Articles({ posts }) {
  const [visiblePosts, setVisiblePosts] = useState(INITIAL_VISIBLE_POSTS);
  const [isSSR, setIsSSR] = useState(true);

useEffect(() => {
	setIsSSR(false);
}, []);




    const handleShowMore = () => {
      setVisiblePosts(posts.length);
    }


  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <section className="container mx-auto md:px-20 py-10">
      <div className="w-[21rem] md:w-[30rem] mx-auto">
        <h1 className="font-bold text-4xl text-center">Our Blog</h1>
        <p className="pt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellendus quo modi quis quaerat obcaecati qui
        </p>
      </div>

    {!isSSR && 
    
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {posts.slice(0, visiblePosts).map((post) => (
        
          
            <Post postData={post} key={post._id} />
          
        ))}
      </div>
    }
  <div className="flex items-center justify-center">

      {visiblePosts < posts.length && (
        <button onClick={handleShowMore} className="mt-4 font-bold border-[2px] border-blue-600 rounded-lg px-3 py-2 text-blue-800">
          Show More
        </button>
      )}
  </div>
    </section>
  );
}

const Post = ({ postData })=>  {
  const { _id, title, publishedAt, slug = "", mainImage, author, body, comment } = postData;

  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source);
  };

  return (

    <div className="item border-[2px] border-[#D2D2D2] rounded-[15px] overflow-hidden mx-auto">
      <div className="images">
        <Link href={`/posts/${slug.current}`}>
          <a>
            <img
              src={urlFor(mainImage).width(393).height(219).url() || "/"}
              alt={`${title}'s picture`}
              className="rounded"
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col px-8 md:ml-0 py-4 text-[#1A1A1A]">
        <div className="title">
          <Link href={`/posts/${slug.current}`}>
            <a className="text-2xl font-bold hover:text-gray-600">{title || "Title"}</a>
          </Link>
        </div>
        <div className="mt-5 flex justify-between">
          <Link href={`/posts/${slug.current}`}>
            <a className="hover:text-[#fb1c48]">- {new Date(publishedAt).toDateString() || "Unknown"}</a>
          </Link>
          <p>
            <div className="flex items-center">
              
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
