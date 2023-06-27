import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import hero1 from "../public/images/hero1.jpeg"
import hero2 from "../public/images/hero2.jpeg"
import Article from "../public/images/article.jpg";

export default function hero() {
  const { data, isLoading, isError } = fetcher("api/trending");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  // SwiperCore.use([Autoplay])

  // const bg = {
  //     background: "url('/images/banner.png') no-repeat",
  //     backgroundPosition: "right"
  // }

  return (
    <>
    <section className="pt-16">
      <div className="container mx-auto md:px-0 ">
        <div className="flex flex-wrap content-center items-center relative">

        <div className="lg:w-7/12 w-full md:w-6/12 flex items-center mb-10 md:mb-0">
          <h1 className="mx-auto text-left text-[1.8rem] lg:text-[2.6rem] tracking-[0.17rem] leading-[1.96rem] lg:leading-[3rem] font-[600] text-">
            Hello! Welcome to <br /> Bamba Blog Post. <br /> See our{" "}
            <span
              className="text-[#8D75FD]
]"
            >
              stories
            </span>
            ,
            <br />{" "}
            <span
              className="text-[#8D75FD]
]"
            >posts</span>{" "} and <span
            className="text-[#8D75FD]
]"
          >ideas.</span>
          </h1>
        </div>

        <div className="hero-img flex w-full lg:w-5/12 md:w-6/12 ">
            <div className="img-1 md:mx-2 ml-2">
                <Image objectFit="cover" height={1800} width={900} src={hero1}/>
            </div>
            <div className="img-2 mr-2">
                <Image objectFit="cover" height={1800} width={900} src={hero2}/>
            </div>
        </div>
            <div className="background hidden md:inline absolute lg:w-[26rem] xl:w-[32.4rem] md:w-[23rem] md:mr-2 bg-[#E36060] h-[5rem] lg:h-[10rem] md:-bottom-4 lg:-bottom-8 right-0"></div>
        </div>

        {/* <Swiper
                slidesPerView={1}
                loop={true}
                autoplay= {{
                    delay: 3700
                }}
                >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                    ))
                }
            
            </Swiper> */}
      </div>
    </section>

    <section className=" md:h-[500px] mb-16 w-full relative z-10">
      <div className="flex md:flex-row flex-wrap">
        <div className="basis-[100%] md:basis-[50%] bg-[#0C2A45] text-white pt-12 pl-24 md:pl-12 lg:pl-24 pb-8 pr-16">
            <button  className="text-xs border-solid border-0 bg-[#3F69FF] py-2 px-3 rounded mb-10 md:mb-5"> FEATURED POST</button>
            <h2 className="font-bold text-4xl">Learning is fun,Earning is Pun. </h2>
            <p className="my-5 text-l text-gray-400">
          Welcome to BAMBA, where learning meets fun and Pun! BAMBA is an exciting and vibrant community  dedicated to gaming, guizzes
          and interactive educational sessions.
          Join Our community today and discover new worlds,expand your knowledge,and connect with like-minded individuals who share passion
          for both learning and fun.
            </p>
            <p className="text-sm text-[#FDC006]">20 Dec, 2022</p>

        </div>

        <div className="md:basis-[50%] basis-[100%]">
          <div className="overflow-hidden h-[450px]">
          <Image src={Article} objectFit="cover" width={900} height={1200} />
          </div>
        </div>
      </div>
    </section>
  </>  
  );
}

function Slide({ data }) {
  const { id, title, category, img, published, description, author } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <div href={`/posts/${id}`}>
          <a>
            <img
              src={img || "/"}
              width={600}
              height={600}
              alt={`${title}'s picture`}
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="title">
          <div href={`/posts/${id}`}>
            <h3 className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Unknown"}
            </h3>
          </div>
        </div>
        <p className="text-gray-500 py-3">{description || "description"}</p>
      </div>
    </div>
  );
}
