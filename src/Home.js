import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom'
import img1 from './images/download 1.png';
import img2 from './images/download (2).png';
import img3 from './images/download (3).png';
import img4 from './images/download 4.png';
import img5 from './images/download (5).png';
import img001 from './images/download (001).png';
import img6 from './images/download (6).png';
import img7 from './images/download (7).png';
import img8 from './images/download (8).png';
import img9 from './images/download (9).png';
import img10 from './images/download (10).png';
import img11 from './images/download (11).png';
import img12 from './images/download (12).png';
import img13 from './images/facebook-f.svg';
import img14 from './images/twitter.svg';
import img15 from './images/instagram.svg';
import img16 from './images/youtube.svg';
import imglogo from './images/logoimg.png';
import { useNavigate } from 'react-router-dom';
function Home() {
   const navigate=useNavigate();
  return (
    <div>
   
      <div className='rrr2'>
      <div>
     
         <img width="100%" height={970} src="https://mediacity.co.in/gentech/static/media/slider_bg_01.61d6f4ebd92024d28b8c.png" ></img>
         <div class="rc1">
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
         </div>
      
         <div>
         
         <center>
           
        <div class="c1">
    
         <div class="c11">
              <div class="r1">
              
              <img height={200} src={imglogo}></img>
              
                 
            </div>
             
            <a href="<about1/>"><div class="r2">
             <font color="black"><h4><Link to="/Contact">Contact</Link></h4></font>
              </div></a>
              <a href="#"><div class="r2">
             <font color="black"><h4>Pages</h4></font>
              </div></a>
              <a href="#"><div class="r2">
             <font color="black"><h4><Link to="/Services">Service</Link></h4></font>
              </div></a>
              <a href="#"><div class="r2">
             <font color="black"><h4><Link to="/About">About</Link></h4></font>
              </div></a>
              <a href="#"><div class="r2">
             <font color="black"><h4><Link to="/">Home</Link></h4></font>
              </div></a>
              
          </div>
            </div> </center>
            
         </div>
         <div class="r3">
         
           <font color="white" size="10px"> <h2 style={{ fontSize:80}}>
                       Confidently plan, design and build for tomorrow
            </h2>
            <br></br>
            </font>
            
            <div class="r4">
               <img width="500px" height="500px"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92hbvxRLgs0YbCq4r54ae885Bt_WhqV0QLw&usqp=CAU"> 
                 
               </img>
             </div>

          </div>
          <div class="rr3">
         <font color="white"><h2 > Get your digital transformation done right by empowering your people, designing efficient processes and choosing the right technology.
        </h2> </font>
        <br></br>
        <button onClick={()=>navigate("Contact")} style={{height:60, width:180, background:"yellow"}}>OUR SERVICES</button>
      </div>
      </div>
   <div className='rrr1'>
      <div class="r5"><center>
         <font size="8"><h4><br></br>We combine design, development, business process and data insights to accelerate digital transformations</h4></font>
        </center> 
       
        <hr></hr>
        </div>
       
      <div class="r6">
         <div class="c2">
        <center>  <font color="gray" size="8"><h1>99%</h1></font>
              <font size="5"> <h2 class="r7">Success Rate</h2></font>
              <div class="r7">We rapidly prototype and launch custom apps with<br></br>no-code tools that move your business forward.</div>
        </center>        </div>
            
         <div class="c2">
            <center>  <font color="gray" size="8"><h1>100%</h1></font>
               <font size="5"> <h2 class="r7">Process Automation</h2></font>
               <div class="r7">We rapidly prototype and launch custom apps with<br></br>no-code tools that move your business forward.</div>
        </center>  

         </div>
         <div class="c2">
            <center>  <font color="gray" size="8"><h1>45%</h1></font>
               <font size="5"> <h2 class="r7">Cost Savings</h2></font>
               <div class="r7">We rapidly prototype and launch custom apps with<br></br>no-code tools that move your business forward.</div>
        </center>  </div>
      </div>
     </div>
     
   <div class="r8">
      <div class="r9">
       
        <center> <font color="yellow"><h3>Services</h3></font>
         <font size="5" color="white"><h1>Incredible Solutions</h1></font>
      </center>
      </div>
      <div className='r11'>
         <div className='c3'>
            <center>
            <a className='rotate-link'>  <img className='rotate-icon' color='yellow' src={img1} alt="image"></img></a>
            <br></br><br></br><font color="white" size="5">Backup & Recovery</font>
                  <br></br>
                  <font color="gray">
                     <p >Edit your work and preview the changes on the screen live with page builder.</p>
               </font>
               <br></br>
               <br></br>
               <a href="#">READ MORE</a>
            </center>

         </div>
         <div class="c3">
            <center>
            <a className='rotate-link'>  <img className='rotate-icon' color='yellow' src={img2} alt="image"></img></a>

               <br></br><br></br><font color="white" size="5">AL & Automation</font>
                  <br></br>
                  <font color="gray">
                     <p >Edit your work and preview the changes on the screen live with page builder.</p>
               </font>
               <br></br>
               <br></br>
               <a href="#">READ MORE</a>
            </center>

          </div>
          <div className='c3'>
            <center>
            <a className='rotate-link'>  <img className='rotate-icon' color='yellow' src={img3} alt="image"></img></a>
            <br></br><br></br><font color="white" size="5">Product Design</font>
                  <br></br>
                  <font color="gray">
                     <p >Edit your work and preview the changes on the screen live with page builder.</p>
               </font>
               <br></br>
               <br></br>
               <a href="#">READ MORE</a>
            </center>

         </div>
         <div className='c3'>
            <center>
            <a className='rotate-link'>  <img className='rotate-icon' color='yellow' src={img4} alt="image"></img></a>
            <br></br><br></br><font color="white" size="5">VoIP Solutions</font>
                  <br></br>
                  <font color="gray">
                     <p >Edit your work and preview the changes on the screen live with page builder.</p>
               </font>
               <br></br>
               <br></br>
               <a href="#">READ MORE</a>
            </center>

         </div>
      </div>
      <center>
      <br></br>
      <br></br>
      <a href="#"><div class="ss4"><font color="white">  <br></br>
      <br></br><button onClick={navigate("Contact")} style={{height:60, width:180, background:"yellow"}}>MORE SERVICES</button></font></div></a>
      </center>
   </div>

   <div class="r12">
     
      <img class="r13" src={img5}></img>
     
     
     <div class="r14">
     <br></br>
     <font size="4" class="t1"><h1><br></br><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have a new Project?<br></br>Reach me at <font color="gray">9TechSea@company.com</font></h1>
                                  
      </font>
      <h3 className='r15'>
         <font color="green"><center>
         We are open to suggestion and very flexible when it comes to digital photography and branding design. Have a talk with us.
         <br></br><br></br>
         <button onClick={navigate("Contact")} style={{height:60, width:180, background:"yellow"}}>HIRE US NOW</button>
         
         <button onClick={navigate("Contact")} style={{height:60, width:180, background:"yellow"}}>LEARN MORE</button>
         </center>

         </font>
      </h3>
                                 
     </div>
     <div class="r16">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/male-developer-8184995-6547028.png?f=webp"></img>
     </div>
     <div class="r17">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ui-designer-8184998-6547031.png?f=webp"></img>
                </div>
   </div>
   <div >
    <div class="r18">
     <br></br>
     <br></br>
     <br></br>
     <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ROI INTREGRATIONS
            <div class="r19">
               
               <font size="5" ><h1>We deliver solution with the goal of trusting relationships</h1></font>
             </div> 
             <div class="r20">
                  <img className="w2" src={img001}></img>
             </div>    

    </div>
    <div class="c4">
      <center>
         <br></br>
         <br></br>
         <br></br>
        <img height="100px" color="black"  src={img6} ></img>

        
        <br></br>
        <font size="5">ROI Website</font>
      </center>

   </div>
   <div class="c5">
      <center>
         <br></br>
         <br></br>
         <br></br>
        <img height="100px" src={img7}></img>
        
        <br></br>
        <font size="5">Android-Gen</font>
      </center>

   </div>
   <div class="c6">
      <center>
         <br></br>
         <br></br>
         <br></br>
        <img height="100px" src={img8}></img>
        
        <br></br>
        <font size="5">IOS Software</font>
      </center>

   </div>
   <div class="c7">
      <center>
         <br></br>
         <br></br>
         <br></br>
        <img height="100px" src={img9}></img>
        
        <br></br>
        <font size="5">Geforce RTX</font>
      </center>

   </div>
   <div class="c8">
      <center>
         <br></br>
         <br></br>
         <br></br>
        <img height="100px" src={img10}></img>
        
        <br></br>
        <font size="5">Python Code</font>
      </center>

   </div>
   <div class="c9">
      <center>
         <br></br>
         <br></br>
         <br></br>
        <img height="100px" src={img11}></img>
        
        <br></br>
        <font size="5">High Ping</font>
      </center>

   </div>
   <div class="c12">
      <center>
         <br></br>
         <br></br>
         <br></br>
        <img height="100px" src={img12}></img>
        
        <br></br>
        <font size="5">Fifine 2.0</font>
      </center>

   </div>
   <div class="r22">
   
 </div>
 </div>
 <br></br><br></br>
 <div class="r23">
 
    <br></br>
     <br></br><br></br><br></br><br></br><br></br>
   <div class="c14">
     <font size="5" color="white"><h1>Let's discuss your projects now</h1></font>
     <font color="white" size="4">Contact us to give life to awesome ideas or make <br></br>suggestions on improvements to be made.<br></br><br></br></font>  
     <div class="r24">
      <div className='s2'>
         <a href='#' className='s1'> <img height={60} width={70} src={img13}></img></a>
         </div>
         
         <div className='s2'>
         <a href='#' className='s1'><img height={60} width={70} src={img14}></img></a>
         </div>
         <div className='s2'>
         <a href='#' className='s1'> <img height={60} width={70} src={img15}></img></a>
         </div>
         <div className='s2'>
         <a href='#' className='s1'> <img height={60} width={70} src={img16}></img></a>
         </div>
     </div>
     <div class="r26">
      <a href="#"  > <font size="4" color="white"><h1>About Us</h1></font></a>

       <a href="#"  > <font size="4" color="white"><h1>Our Services</h1></font></a>
       <a href="#"  > <font size="4" color="white"><h1>Projects</h1></font></a>
       <a href="#" > <font size="4" color="white"><h1>Get In Touch</h1></font></a>
       <a href="#"  > <font size="4" color="white"><h1>Faq Page</h1></font></a>

 
    </div>
    </div>
     <div className='r27'>
     <div className='r28'>
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


   
   </div>
   </div>
  )
}

export default Home
