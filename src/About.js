import React from 'react'
import './About.css';
import img13 from './images/facebook-f.svg';
import img14 from './images/twitter.svg';
import img15 from './images/instagram.svg';
import img16 from './images/youtube.svg';
import imglogo from './images/logoimg.png';
import imga1 from './images/about-img4.png';
import imga2 from './images/downword  array.png';
import imga3 from './images/about-img5.png';
import imga4 from './images/about-img6.png';
import imga7 from './images/about-img7.png';
import imga8 from './images/about-img8.png';
import imga9 from './images/about-img9.png';
import imga10 from './images/about-img10.png';
import imga11 from './images/about-img11png.png';
import {Link} from 'react-router-dom'
function About() {
  return (
    <div>
    <div className='b1'>
       <div className='ar1'>
       <img width="100%" height={450} src="https://mediacity.co.in/gentech/static/media/slider_bg_01.61d6f4ebd92024d28b8c.png" ></img>

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
        
        <font  color="white" size="6"><h1>About Company</h1></font>
        <div className='al1'><Link to='/'><font color="white">Home  </font></Link> &nbsp;&nbsp;  <font color="white">About us</font></div>
        

      </div>
       
        
        
      </div>  
      <div className='b2'>
        <img src={imga1}></img>
      </div>
     <div className='b3'>
     
         <center>
          
            <font size="8"><h4><font size="3" color="gray">SINCE FROM 2000</font><br></br>We combine design, development, business <br></br>process and data insights to accelerate <br></br>digital transformations</h4></font>
           </center> 
         
          <br></br>
          <div className='ac6'>
           <font color="gray">SUPORT EMAIL</font> <br></br>
          <b> <font color="black">9TechSea@gentech.com</font>
        </b>  </div>
        <center>
          <div className='vline'>
            
          </div>
        </center>
          <div className='ac7'>
            <font color="gray">PHONE NUMBER</font>
            <br></br>
          <b>  <font colr="black">+888 777 666 000</font></b>
          </div>
          <br></br>
          <center>
            <div className='cir'>
            <img src={imga2}  height={100}></img>
            
            </div>
          </center>
          <br></br>
          <div className='ac8'>
            <img src={imga3}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={imga4}></img>
            <div className='ac9'>
             <font color="white"><h2>Our Mission</h2></font>
            <b> <font color="thickgray">We are open to suggestion and very flexible <br></br>when it comes to digital photography</font>
            </b></div>
            <div className='ac10'>
              <font color="white"><h2>Our Vision</h2></font>
              <font color="thickgray">We are open to suggestion and very flexible<br></br> when it comes to digital photography</font>
            </div>
          </div>
     </div>
     <div className='b4'>
          <div className='ac11'>
          <div className='b14'>
          <img src={imga7} height={360} width={360}></img>

           </div>
           <div className='b24'>
             <div className='b214'>
             <img src={imga8}></img>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
           <b>  <font color="black">Inside of Gentech</font></b>
             <br></br>
             <font>Suggestion and very flexible when it comes to digital solutions</font>
             </div>
              </div>
              <div className='b34'>

              </div>
              <div className='b314'>
              <img src={imga9}></img>
              <br></br><br></br><br></br><br></br><br></br>
              <b>  <font color="black">Inside of Gentech</font></b>
             <br></br>
             <font>Suggestion and very flexible when it comes to digital solutions</font>
             
              </div>
              <div className='b44'><img src={imga10} width={355} height={360}></img></div>
           </div>
          <div className='ac12'>
          <img src={imga11} height={750}></img>
          </div>
        </div>
    <div className='bb1'>
    
    <div className='b5'>
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

export default About
