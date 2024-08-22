import React from 'react'
import './Project.css'
import WeatherWeb from '../../assets/images/weather-application.png';
import tejasAss from '../../assets/images/tejas.png';
import TextUtil from '../../assets/images/text-utils.png';
import BMS from '../../assets/images/bankmanagementsystem1.png';
import Fade from 'react-reveal/Fade'

const Projects = () => {
  return (
    <>
      <div className='container project' id='project'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>TOP RECENT PORJECT</h2>
        <hr/>
        <p className='pb-3 text-right'>👉 Hi guys, I m Vivek Kumar, a MERN stack developer. I developed all these projects a few days ago, and it took me more than 3 months to complete them. I used various languages and technologies like JavaScript, HTML, CSS, Bootstrap, React, Node.js, MongoDB, Express, Java, etc., to build these projects. While working on these projects, I gained a lot of confidence and realized that I can become a proficient developer. Currently, I m learning Android development, and I will showcase a project related to that very soon.<br></br>
        Thank you for visiting my portfolio.
         </p>

         {/* card design */}
         <div className='row' id='ads'>
            <Fade right>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>responsive</span>
                        <img src="https://repository-images.githubusercontent.com/618076926/821b1ab6-7853-4e1c-857d-f91dc1362bd2" alt='project' />                        
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Html</span>
                        <span className='card-detail-badge'>css</span>
                        <span className='card-detail-badge'>Javascript</span>
                        <span className='card-detail-badge'>bootstrap</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Hotstar clone webisite </h5>
                        </div>
                        <a className='ad-btn' href='https://viveksharma62.github.io/hotstarClone_Project/hotstar.html?'>
                            View
                            </a>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full stack</span>
                        <img src="https://media.iqonic.design/iqonic-design/wp-content/uploads/2021/08/01_imail-small-preview-min.jpg"alt='project' />                        
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>React</span>
                        <span className='card-detail-badge'>MongoDb</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Gmail Clone </h5>
                        </div>
                        <a className='ad-btn' href='https://viveksharma62.github.io/Thankyou/'>
                            Link Unavailable 
                            </a>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='col-md-4 cardbox'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>front-end</span>
                        <img src={WeatherWeb}  alt='project' />                        
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Html</span>
                        <span className='card-detail-badge'>javaScript</span>
                        <span className='card-detail-badge'>Css</span>
                        <span className='card-detail-badge'>Bootstrap</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>weather application </h5>
                        </div>
                        <a className='ad-btn' href='https://viveksharma62.github.io/Thankyou/'>
                            View
                            </a>
                    </div>
                </div>
            </div>
        </Fade>
            <Fade right>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>front-end</span>
                        <img src={tejasAss} alt='project' />                        
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Html</span>
                        <span className='card-detail-badge'>javaScript</span>
                        <span className='card-detail-badge'>Css</span>
                        <span className='card-detail-badge'>Bootstrap</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Tejas assistance </h5>
                        </div>
                        <a className='ad-btn' href='https://tejas-assitance.vercel.app/'>
                            View
                            </a>
                    </div>
                </div>
            </div>
        </Fade>
            <Fade right>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>front-end</span>
                        <img src={TextUtil} alt='project' />                        
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Html</span>
                        <span className='card-detail-badge'>React</span>
                        <span className='card-detail-badge'>Css</span>
                        <span className='card-detail-badge'>Bootstrap</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>text-utils-project</h5>
                        </div>
                        <a className='ad-btn' href='https://text-utils-project-green.vercel.app/'>
                            View
                            </a>
                    </div>
                </div>
            </div>
        </Fade>
            <Fade right>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>full stack</span>
                        <img src={BMS} alt='project' />                        
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>java</span>
                        <span className='card-detail-badge'>Swing</span>
                        <span className='card-detail-badge'>Servlets</span>
                        <span className='card-detail-badge'>PHPMyadmin</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>banking management system </h5>
                        </div>
                        <a className='ad-btn' href='https://text-utils-project-green.vercel.app/'>
                        Link Unavailable
                            </a>
                    </div>
                </div>
            </div>
        </Fade>
        </div>
      </div>
    </>
  )
}




export default Projects
