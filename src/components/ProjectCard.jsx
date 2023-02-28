import { Col } from "react-bootstrap";

export default function ProjectCard({ title, tech, img, demoUrl, about }) {
  return (
    <Col style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="project-card" style={{ display: "flex" }}>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <span>
          <b>{title}</b>
        </span>
        <div className="card-body">
          <p className="info">{about}</p>
          <p className="info">
            <b>Technologies: </b>
            {tech}
          </p>
        </div>
        <div className="connect">
          <a href={demoUrl}>To the web page!</a>
        </div>
      </div>
    </Col>
  );
}
