
import {ImTwitter,ImLinkedin2,ImArrowRight2, ImInstagram, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function footer() {
  return (
    <footer className="bg-white-600 border-2 border-black-100 mt-20">
      <div className=" mx-auto py-14 px-4 grid items-center justify-center lg:justify-center lg:grid-cols-3 gap-2 text-gray-300 ">
        <div className="">
          <img className="w-35 bg-white mx-auto" src="../images/bamba-logo.png" alt="bamba-logo"/>
        </div>
   <div className="flex tracking-wider gap-x-8 justify-center">
        <Link target="" href="https://youtube.com/@bambatv6791"><a><ImYoutube color="#000000" className="size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200" /></a></Link>
 <Link target="" href="https://twitter.com/BambaGlobal?t=BlxYLcU39pi-OJ-NsTYzzQ&s=09"><a><ImTwitter color="#000000" className=" size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200 "/></a></Link>
 {/* <Link target="" href=""><a><ImLinkedin2 color="#000000" className="size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200" /></a></Link> */}
 <Link target="" href="https://instagram.com/bambaglobalofficial?igshid=YmMyMTA2M2Y="><a><ImInstagram color="#000000"className="size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200" /></a></Link>
               
        </div>
        <div className="flex items-center justify-between overflow-hidden px-2 w-56 h-12 bg-transparent border-2 rounded-[12px] border-gray-200 ">
          <input type="text" placeholder="Subscribe" className="p-3 border-none outline-none w-full font-medium text-black" />
          <button>
          <ImArrowRight2 className="w-12 font-[2rem] text-black"/>
          </button>
      </div>
       
      
      </div>
      <p className="text-black flex items-center m-auto justify-center py-10 text-sm">Copyright ©2023-2024 All rights reserved | Bamba Global Community</p>
    </footer>
  )
}

