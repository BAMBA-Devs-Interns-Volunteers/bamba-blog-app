import { ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newslatter from "./_child/newslatter";

export default function footer() {

  const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                    <Link target="_blank" href={"https://instagram.com/bambaglobalofficial?igshid=YmMyMTA2M2Y="}><a><ImInstagram color="#802ccc" /></a></Link>
                    <Link target={"_blank"} href={"https://twitter.com/BambaGlobal?t=BlxYLcU39pi-OJ-NsTYzzQ&s=09"}><a><ImTwitter color="#802ccc" /></a></Link>                    
                    <Link target="_blank" href={"https://youtube.com/@bambatv6791"}><a><ImYoutube color="#802ccc" /></a></Link>
              </div>

              <p className="py-5 text-gray-400">Copyright ©2023-2024 All rights reserved | Bamba Global Community</p>
              <p className="text-gray-400 text-center">Terms & Condition</p>
          </div>
      </div>

    </footer>
  )
}
