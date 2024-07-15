import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom';
import img13 from './images/facebook-f.svg';
import img14 from './images/twitter.svg';
import img15 from './images/instagram.svg';
import img16 from './images/youtube.svg';
import imglogo from './images/logoimg.png';
import img17 from './images/contact17.png';
import img18 from './images/contact18.png';
import img19 from './images/contact19.png';
import img20 from './images/contact20.png';
function Contact() {
  return (
    <div>
      <div className='cb1'>
       <div className='ar1'>
       <img width="100%" height={460} src="https://mediacity.co.in/gentech/static/media/slider_bg_01.61d6f4ebd92024d28b8c.png" ></img>

       </div>
       
       <div class="ar2">
            <font text_align="left"  size="4" color="white">info@9TechSea.com    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;+643 322 323 24</font>
            <font></font>

            <div class="rc2">
               <float color="white">Follows:
               &nbsp;&nbsp;&nbsp;&nbsp;
               <a  href="#" className='log'><img  height={20} src={img13}></img></a>  
                      &nbsp;&nbsp;&nbsp;&nbsp;
               <a href=""><img height={20} src={img14}></img></a>  &nbsp;&nbsp;&nbsp;&nbsp;
               <a href=""><img height={20} src={img15}></img></a>    &nbsp;&nbsp;&nbsp;&nbsp;  
               <a href=""><img height={20} src={img16}></img></a>   
               
               </float>
            </div>
        </div>
        <div className='ac1'>
          
          <div className='ac3'>
             <div className='ac2'>
               <img src={imglogo} height={200}></img>
               </div>
               <a href="<about1/>"><div class="ar3">
             <font color="black"><h4><Link to="/Contact">Contact</Link></h4></font>
              </div></a>
              <a href="#"><div class="ar3">
             <font color="black"><h4>Pages</h4></font>
              </div></a>
              <a href="#"><div class="ar3">
             <font color="black"><h4><Link to="/Services">Services</Link></h4></font>
              </div></a>
              <a href="#"><div class="ar3">
             <font color="black"><h4><Link to="/About">About</Link></h4></font>
              </div></a>
              <a href="#"><div class="ar3">
             <font color="black"><h4><Link to="/">Home</Link></h4></font>
              </div></a>
          </div>
          
        </div>
        <div className='lin1'>
          <hr color='gray'></hr>
        </div>
        <div className='ar4'>
        
        <font  color="white" size="6"><h1>Get In Touch</h1></font>
        <div className='al1'><Link to='/'><font color="white">Home  </font></Link> &nbsp;|&nbsp;  <font color="white">Contact</font></div>
        
        </div>
      </div>
      <div className='cb2'>
            <div className='cb21'>
                <img src={img17} width={541}></img>
            </div>
            <div className='cb22'>
                <font size="6" color="black"><b>Contact Us Now</b></font>
              <br></br><br></br>
              <font color="gray">Architecture design can be applied to a wide range of projects, from small residential homes to large commercial buildings.</font>
            <br></br>
            <br></br>
            <br></br>
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">Business Email</font><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="5">9TechSea@rosalina.com</font>
            <br></br>
            <div className='cb23'>
                <img src={img18}></img>
                
            </div>
         
            </div>
               <div className='crr1'><hr></hr></div>
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">Phone Number</font><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="5">+777 548 689 442</font>
            <br></br>
            <div className='cb23'>
                <img src={img19}></img>
            </div>
            </div>
            <div className='crr1'><hr></hr></div>
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">Office Address</font><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="5">1/23 gandi road banglore</font>
            <br></br>
            <div className='cb23'>
                <img src={img20}></img>
            </div>
            </div>
            </div>

      </div>

      <div className='cb3'>
             <br></br><br></br><br></br>
             <center>
                <font >CALL TO ACTION</font>
                <br></br><br></br>
                <font color="black" size="6"><b>Get An Amazing Quote For <br></br>Your Business</b></font>
             </center>
             <div className='cb31'>
                <div className='cb32'>
                <form>
                    <div className='cb3r1'>
                        Your Name
                        <br></br><br></br>
                        <input type='name' placeholder='Name' size={34} style={{height:50}}></input>
                    </div>
                    <div className='cb3r2'>
                        Your Email
                        <br></br><br></br>
                        <input type='email'placeholder='Email' size={34} style={{height:50}}></input>
                    </div>
                    <div className='cb3r3'>
                     Select Subject
                     <br></br><br></br>
                     <select style={{height:50, width:545}}>
                        <option>Select subjects</option>
                        <option>Business Consultacy</option>
                        <option>Business Design</option>
                     </select>
                     <br></br>
                     <br></br>
                     Message<br></br>
                     <br></br>
                     <input type='text' placeholder='Write comments' style={{width:540, height:120}}></input>
                     <br></br>
                     <br></br>

                    <button style={{height:50, width:150, background:"yellow"}}>SUBMIT NOW</button>
                    </div>
                   
                </form>

                </div>
                <div className='cb3rr1'>
                       <div className='mapouter'>
                       <div className='gmap_canvas'>
                       <iframe
                       title='"Google Map'
                       className='gmap_ifrmae'
                       width="100%"
                      height={710}
                  src="https://maps.google.com/maps?width=658&amp;height=573&amp;hl=en&amp;q=Bengaluru&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"

                       ></iframe>
               <a href="https://connectionsgame.org/">Connections NYT</a>
                       </div>
                     
                       </div>
                </div>

             </div>
             <div className='cb4'>
             <div className='ac16'>
     <div className='ac17'>
     <form>
     <br></br>
        <input type='name' name='name' placeholder='your name***' size={70} style={{height:40,background:"#ffffff14"}}></input>
  <hr></hr>      <br></br>
        <br></br>
        <input type='email' name='email' placeholder='Business email**' size={70} style={{height:40,background:"#ffffff14"}}></input>
        <hr></hr>      <br></br>
        <br></br>
        <input type='text' name='text' placeholder='Message**' size={70} style={{height:100,background:"#ffffff14"}}></input>
        <hr></hr>
        <br></br>
        <button type='submit' style={{background:"yellow",height:60,width:160}}><font size="3">SUBMIT NOW</font></button>
     </form>

     </div>
    </div>
           <div className='ac13'>
           <hr ></hr>
           <font size="5" color="white"><h1>Let's discuss your projects now</h1></font>
     <font color="white" size="4">Contact us to give life to awesome ideas or make <br></br>suggestions on improvements to be made.<br></br><br></br></font>  
    <div className='ac14'>
         <div className='acc2'>
        
          <img src={img13} height={40} width={40}></img>
          
         </div>
         <div className='acc2'>
        
          <img src={img14} height={40} width={40}></img>
          
         </div>
         <div className='acc2'>
        
          <img src={img15} height={40} width={40}></img>
          
          </div>
         <div className='acc2'>
        
          <img src={img16} height={40} width={40}></img>
          
         </div>
    </div>
    </div>
    </div>
   <div className='ac15'>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <font size="6" ><Link to="/About">About Us</Link></font><br></br><br></br>
   <font size="6" color="white"><Link to="/" >Our Services</Link></font><br></br><br></br>
   <font size="6" color="white"><Link to="">Projects</Link></font><br></br><br></br>
   <font size="6" color="white"><Link to="">Get In Touch</Link></font><br></br><br></br>
   <font size="6" color="white"><Link to="">Faq Page</Link></font>

   </div>
             </div>
      </div>
    
  )
}

export default Contact
