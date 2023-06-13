import Head from 'next/head'
// import Image from 'next/image'
import Format from '../layout/format';
import {client} from "../lib/client"
import groq from 'groq'


// components
import Hero from '../components/hero';
import Articles from '../components/articles';
import MostPopular from '../components/mostPopular';


export default function Home({posts}) {
 
  return (
   <Format>
      <Hero></Hero>
      <Articles posts={posts}></Articles>
      {/* <MostPopular></MostPopular> */}
   </Format>
  )
}




export const getStaticProps = async ({ preview = false}) => {
  const posts = await client.fetch(`*[_type == "post" && publishedAt < now()]|order(publishedAt desc)`)
  return {
    props: {
      posts,
    },
  }
}