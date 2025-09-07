import Link from "next/link"; 
import Image from "next/image";

const logo = "/images/logo.png";
const icons = {dropdown: "/icons/polygon.svg", 
               zoeken: "/icons/zoeken.svg", 
               winkelmand: "/icons/winkelmand.svg", 
               menu: "/icons/menu.svg"}

function Header() {
  return (
   
  <header className="bg-dark-green font-body  text-white lg:p-5 ">
  <nav className="flex justify-between p-4  md:items-center md:flex-row " >
    <div className="text-2xl font-bold flex items-center gap-2 ">
      
    <Link href="/" className="flex items-center gap-[7px] md:items-center">
      <Image src={logo} alt="Planto Logo" width={40} height={40} />
      <span className="self-center font-bold whitespace-nowrap text-[22px] md:text-[25px] opacity-75 ">Planto.</span>
    </Link>
   
</div>

<div className="md:flex flex-row items-center gap-[10px] opacity-75 text-[18px] md:gap-[96px] invisible md:visible">
     <Link href="/">
      Home
    </Link>

    <Link href="/" className="flex items-center gap-2">
     <span className=" self-center whitespace-nowrap  ">Plants Type</span>
      <img src={icons.dropdown} alt="dropdown"></img>
      
    </Link>

    <Link href="/">
      More
    </Link>
<Link href="/">
      Contact
    </Link>
    </div>


    <div className="flex items-center opacity-75 md:gap-[44px] md:flex-row ">
      <img src={icons.zoeken} alt="zoeken" className="inline mr-6 cursor-pointer w-[24px] h-[24px]" />
      <img src={icons.winkelmand} alt="winkelmand" className="inline mr-6 cursor-pointer w-[24px] h-[24px]"/>
      <img src={icons.menu} alt="menu" className="inline cursor-pointer w-[24px] h-[24px] "/>
    </div>
  </nav>
   </header>

  )
}

export default Header
