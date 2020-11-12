import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/18-man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Xinru Chen</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>To be working as an integral part of a reputed organization that encourages creativity and provides a progressive atmosphere that can help me to achieve professional and personal growth along with the organization. 
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>2/5B Cleveland Road, Parnell, Auckland</p>
            <h5>Phone</h5>
            <p>+64 0211986732</p>
            <h5>Email</h5>
            <p>xinruakatony@gmail.com</p>
            {/* <h5>Web</h5>
            <p>mywebsite.com</p> */}
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2018}
              schoolName="The University of Otago"
              schoolDescription="
              Courses taken:
              Software Engineering(OOP, IOS development)
              Advanced Web Development(HTML, CSS, JavaScript, PHP)
              Network Management(DNS, TCP/IP, Seven-layer OSI Model)
              Effective Programming(Java, Python)
              Programming and Problem Solving(JavaScript)
              Introduction to GIS for Developers
              Data Communications and Network
              Algorithms and Data Structures(C)
              Operating System(Linux)
              "
               />

               {/* <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} /> */}

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="JavaScript Web Developer(Ecommerce)"
              jobDescription="Created a Content Management System (CMS) which serves as an interface for clients
              Building Brand new Woocommerce website and integrating it with Tradevine using RESTful API provided by both
              Monitor and improve quality of web components
              Redesigned sections of the website to ensure a more attractive and user friendly experience
              Designed and developed RESTful style web services to manipulate dynamic datasets using AJAX calls
              Provide Level 2 End-User Technical Support of eCommerce applications
              Demonstrated the ability to work diligently under pressure to meet deadlines
              Provide web support via email, phone, and other electronic communications.
              Creating automated test scripts in Python for our Ecommerce website
              Creating spreadsheets with VBA for sale report
              "
              />

              <Experience
                startYear={2019}
                endYear={"Now"}
                jobName="IT Field Engineer"
                jobDescription="Achieved exemplary client satisfaction, consistently going above and beyond expectation on solving end-user issues
                Liaise between ServiceNow application users and I.T in the analysis, design, testing for application development to ensure optional operational performance that meets business needs
                Ensured proper installation of cables, operating systems, and software. Identified major hardware and software problems and defective products to vendors or technicians for service
                Recorded technical issues and requests. Diagnosed and resolved problems. Escalated issues as appropriate
                Provided the first point of contact support to end users with professionalism, timeliness, and accuracy
                Format and image computers for company use. Add computer to the DNS utilizing Active Directory as needed
                Provided PC hardware and software support to end-user
                Provided after-hours assistance
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={95}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={85}
                      />
                      <Skills
                      skill=".Net"
                      progress={85}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
