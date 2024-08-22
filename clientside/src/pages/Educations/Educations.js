import React from 'react'
import './Educations.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaComputer } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { LiaUniversitySolid } from "react-icons/lia";





const Educations = () => {
  return (
    <>
    <div className='education' id='education'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Educations details</h2>
      <hr/>
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - 2026"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<LiaUniversitySolid />}
    
  >
    <h3 className="vertical-timeline-element-title"><abbr title='Bachelor of Technology'>B.tech</abbr></h3>
    <h4 className="vertical-timeline-element-subtitle">marwadi university ,gurajat</h4>
    
  </VerticalTimelineElement>
  {/* adca */}

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - 2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaComputer />}
  >
    <h3 className="vertical-timeline-element-title"><abbr title='Advanced Diploma in Computer Application'>ADCA</abbr></h3>
    <h4 className="vertical-timeline-element-subtitle">Apex computer ,gopalganj</h4>
    
  </VerticalTimelineElement>

      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<BiSolidSchool />}
  >
    <h3 className="vertical-timeline-element-title">intermediate </h3>
    <h4 className="vertical-timeline-element-subtitle">Mukhiram high collage ,bihar</h4>
    
  </VerticalTimelineElement>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<BiSolidSchool />}
  >
    <h3 className="vertical-timeline-element-title"><p><sub>10</sub>th</p> </h3>
    <h4 className="vertical-timeline-element-subtitle">Mukhiram high collage ,bihar</h4>
    
  </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Educations
