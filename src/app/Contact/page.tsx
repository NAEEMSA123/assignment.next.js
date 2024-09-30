
'use client';

import Link from "next/link"
export default function ContactUs(){
    return(
       <div className="contact">
           <p>Contact Us</p>
        <form  className="mainform ">
           
            <legend>Name:</legend>
            
            <input type="text" id="name" placeholder="Your Name" />
            <br />
            <br/>
            <br/>
            <legend>Email:</legend>
            <input type="text" id="email" placeholder="Enter your Email" />
            <br />
            <br/>
            <br/>
            <legend>Your Message:</legend>
            <textarea name="message" id="meassage" placeholder="Enter Message" rows={3}></textarea>
            <br />
            <br/>
            <br/>

            <button className="btn">Submit</button>
        </form>
       </div>
    )
}


