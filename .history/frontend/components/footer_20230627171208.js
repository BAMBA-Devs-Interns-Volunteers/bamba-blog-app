
import { ImFacebook,ImTwitter,ImLinkedin2,ImGooglePlus,ImArrowRight2 } from "react-icons/im";
import Link from 'next/link'

export default function footer() {
  return (
    <footer className="bg-white-600 border-2 border-black-100">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div className="w-full flex p-4 my-4 items-center justify-center">
          <img className="w-35 bg-white mt-[-3rem] mx-auto" src="./images/bamba-logo.png" alt="hi"/>
        </div>
   <div className="flex tracking-wider gap-x-8 items-center justify-center gap-y-8 mt-[-70px] md-width-[75%]">
        <Link target="" href=""><a><ImFacebook color="#000000" className="size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200" /></a></Link>
 <Link target="" href="https://twitter.com/BambaGlobal?s=20"><a><ImTwitter color="#000000" className=" size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200 "/></a></Link>
 <Link target="" href="https://www.linkedin.com/company/bamba-global/mycompany/"><a><ImLinkedin2 color="#000000" className="size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200" /></a></Link>
 <Link target="" href=""><a><ImGooglePlus color="#000000"className="size-{20} hover:-translate-y-1.5  duration-300 hover:text-white-200" /></a></Link>
               
        </div>
        <div className="flex flex-col  items-center justify-between w-full  mt-[-30px] gap-y-8">
          <ImArrowRight2 className="flex items-center w-5 h-5 absolute ml-[160px] mt-[15px] pointer-events-none"/>
          <input type="text" placeholder="Subscribe" className="p-3 flex w-[200px]  h-5px rounded-md font-medium text-black bg-transparent border-2 border-gray-200 " />
      </div>
       
      
      </div>
      <p className="text-black flex items-center m-auto justify-center text-sm">©2023 All Rights Reserved</p>
    </footer>
  )
}

