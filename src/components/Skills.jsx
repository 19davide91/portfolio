import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills 💻 and Hobbies 🌄</h2>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5 style={{ color: "#f96861" }}>
                    Frontend
                    <br />
                    Development
                  </h5>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="item">
                  <h5 style={{ color: "#f96861" }}>
                    Backend
                    <br />
                    Development
                  </h5>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Axios</li>
                    <li>Postman</li>
                  </ul>
                </div>
                <div className="item">
                  <h5 style={{ color: "#f96861" }}>
                    Soft
                    <br />
                    Skills
                  </h5>
                  <ul>
                    <li>Teamwork</li>
                    <li>Adaptability</li>
                    <li>Patience</li>
                    <li>Attention to detail</li>
                    <li>Reliability</li>
                  </ul>
                </div>
                <div className="item">
                  <h5 style={{ color: "#f96861" }}>Hobbies</h5>
                  <ul>
                    <li>Tecnology</li>
                    <li>Food</li>
                    <li>Hiking</li>
                    <li>Nature</li>
                    <li>Movies</li>
                    <li>Science</li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
