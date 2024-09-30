import ContactUs from "@/app/Contact/page";


import Link from "next/link";


function Navbar(){
    return(
        
       <div className="parent">
        <div className="pt-4 pl-4 text-4xl text-red-400">
        <h1 >Portfolio</h1>
        </div>
            <ul className="child">
            
                <li><Link href={"./Home"}>Home</Link></li>
                <li><Link href={"./About"}>About</Link></li>
                <li><Link href={"./Portfolio"}>Portfolio</Link></li>
                <li><Link href={"./Contact"}>Contact</Link></li>
        </ul>
       </div> 
      
    );
}

export default Navbar;