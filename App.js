import logo from './logo.svg';
import './App.css';
import './css/default.css'
import './css/layout.css'
import './css/media-queries.css'
import './css/magnific-popup.css'
import pfp from './images/PFP.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import React, { } from 'react';
import {VisitCount} from './components/VisitCount'



function App() {
  const githubLink= <a href="https://github.com/JLuckE94"><FontAwesomeIcon icon={faGithub}/></a>
  return ( <div className="App">


 <body>
 <header id="home">
      <nav id="nav-wrap">

         <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" class="nav">
            <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
            <li><a class="smoothscroll" href="#about">About</a></li>
	         <li><a class="smoothscroll" href="#resume">Resume</a></li>
         </ul>

   </nav> 


   <div class="row banner">
      <div class="banner-text">
         <h1 class="responsive-headline">Joseph Yeon</h1>
         <h3>I'm a <span>Developer</span> that is focused on AWS, but actively looking for new opportunities to learn and grow my 
             practical and enterprise skill set.</h3>
        
         <ul class="social">
            <li><a href="https://www.linkedin.com/in/joseph-yeon-216b23188/"><i class="fa fa-linkedin"></i></a></li>
            <li>{githubLink}</li>
         </ul>
         <VisitCount/>
      </div>
   </div>

   <p class="scrolldown">
      <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
   </p>

</header> 


<section id="about">

   <div class="row">

      <div class="three columns">

         <img class="profile-pic"  src={pfp}/>

      </div>

      <div class="nine columns main-col">

         <h2>About Me</h2>

         <p>What is up! The name is Joseph, but I prefer to be called Joe. I went to J Sargeant Community College
           and pursued an Associate degree in Music and Psychology.
           A few of my hobbies are PC gaming, playing my guitar, eating delicious
           foods and calisthenics. Ever since I was young I always wondered how this little machine called the N64 loaded up
           one of my favorite games "The Legend of Zelda: Orcarina of Time". It was fascinating. I was hooked and knew instantly that 
           I would forever be captivated by technology.
         </p>

         <div class="row">

            <div class="columns contact-details">
 
               <h2>Contact Details</h2>
               <p class="address">
                  <a href="mailto:JYeonO94@Gmail.com">JYeonO94@Gmail.com</a>
          </p>

            </div>
            
            <div class="columns download">
               <p>
                  <a href="/Joe-Y-Resume.pdf" download class="button"><i class="fa fa-download"></i>Download Resume</a>
               </p>
            </div>

         </div>

      </div> 

   </div>

</section> 



<section id="resume">

   
   <div class="row education">

      <div class="three columns header-col">
         <h1><span>Education</span></h1>
      </div>

      <div class="nine columns main-col">

         <div class="row item">

            <div class="twelve columns">

               <h3>AWS</h3>
               <p class="info">Certificates</p>

                <p>
                  AWS Certified Solutions Architect - Associate (SAA) October 2021
                </p>
                <p>
                  AWS Certified Cloud Practitioner (CCP)  August 2021
                </p>

            </div>

         </div> 

         <div class="row item">

            <div class="twelve columns">

               <h3></h3>
               <p class="info">College</p>

               <p>
                  J Sergeant Reynolds Community College			                         Richmond, VA May 2015
                  <br></br>
                  Pursued an Associate degree in Psychology and Bachelor of Music
               </p>

            </div>

         </div> 

      </div> 
   </div> 


   
   <div class="row work">

      <div class="three columns header-col">
         <h1><span>Work</span></h1>
      </div>

      <div class="nine columns main-col">

         <div class="row item">

            <div class="twelve columns">

               <h3>Amazon Warehouse</h3>
               <p class="info">Amazon Warehouse Associate <span>&bull;</span> <em class="date">March 2020 - July 2020</em></p>

               <p>
                  Received, processed, and assorted incoming stock and materials. 
                  Oversaw filling, packaging, and shipping of orders.                     
               </p>

            </div>

         </div> 

         <div class="row item">

            <div class="twelve columns">

               <h3>Community Food Mart</h3>
               <p class="info">Assistant Manager <span>&bull;</span> <em class="date">September 2012 - June 2018</em></p>

               <p>
                 Worked cashier and stocker for one year. Promoted to AGM after one year.
                 Duties include. supply and product purchasing, accounting merchandise & stock inventory, maintaining employee schedules and daily operational activities.
                 Acting as a liaison for local vendors.
               </p>

            </div>

         </div> 

      </div> 

   </div> 


   
   <div class="row skill">

      <div class="three columns header-col">
         <h1><span>Skills</span></h1>
      </div>

      <div class="nine columns main-col">

      <ul>
            <li>Development (HTML,CSS,JS,Node.js,Docker,npm,cli)</li>
            <li>Microsoft Office/Enterprise tools (Excel, Word, PowerPoint, SharePoint, and OneNote)</li>
            <li>Languages (English, and Conversational Korean) </li>
      </ul>
     <div class="bars">

        <ul class="skills">
          <li><span class="bar-expand photoshop"></span><em>HTML5</em></li>
               <li><span class="bar-expand illustrator"></span><em>CSS</em></li>
         <li><span class="bar-expand wordpress"></span><em>Javascript</em></li>
               <li><span class="bar-expand jquery"></span><em>Python</em></li>
       </ul>

     </div>

   </div> 

   </div> 

</section> 


<footer>

   <div class="row">

      <div class="twelve columns">

         <ul class="social-links">
            <li><a href="https://www.linkedin.com/in/joseph-yeon-216b23188/"><i class="fa fa-linkedin"></i></a></li>
            <li>{githubLink}</li>
         </ul>

      </div>

      <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>

   </div>
</footer> 



</body>
    </div>
  );
}

export default App;
