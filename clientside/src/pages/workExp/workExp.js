import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./workExp.css";
import { GrUserWorker } from "react-icons/gr";


const workExp = () => {
  return (
    <>
      <div className=" work" id="workExp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  #white",
              }}
              date="2011 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrUserWorker />}
            >
              <h3 className="vertical-timeline-element-title">
                Nothing
              </h3>
              <h4 className="vertical-timeline-element-subtitle">xyz</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element-work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  #white",
              }}
              date="2011 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrUserWorker />}
            >
              <h3 className="vertical-timeline-element-title">
                Nothing
              </h3>
              <h4 className="vertical-timeline-element-subtitle">xyz</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  #white",
              }}
              date="2011 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrUserWorker />}
            >
              <h3 className="vertical-timeline-element-title">
                Nothing
              </h3>
              <h4 className="vertical-timeline-element-subtitle">xyz</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default workExp;
