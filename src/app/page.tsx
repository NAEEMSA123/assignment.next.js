import Navbar from "@/components/Navbar";
import ContactUs from "./Contact/page";
import Portfolio from "./Portfolio/page";
import About from "./About/page";
import Anchor from "./anchor/page"; 
import Link from "next/link";
export default function Home() {
 return(
  <div>
  <Navbar />
  <Portfolio/>
  <ContactUs/> 
  <Anchor/>
  <About/>
  </div>

  );
}
