// import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/client";
import moment from "moment"

export default function author({ name, image, createdAt }) {


  if (!name && !image) return <></>;

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <>
    
    <div className="author flex py-3">
      <img
        src={urlFor(image).width(60).height(60).url() || ""}
        loading="lazy"
        width={50}
        height={50}
        className="rounded-full"
        alt={`${name}'s picture`}
      />
      <div className="flex flex-col justify-center px-4">
        
          <p className="text-[17px] text-black tracking-[0.12rem] hover:text-gray-600">
            {name || "No Name"}
          </p>
          <p className="text-[14px] text-slate-600 hover:text-gray-600">
            { moment(createdAt).format("dd mm y") || "no date"}
            
          </p>
      
        {/* <span className="text-sm text-gray-500">{designation || ""}</span> */}
     
      </div>
    </div>
    </>
  );
}
