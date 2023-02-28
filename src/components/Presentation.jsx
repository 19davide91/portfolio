import { Container, Row, Col } from "react-bootstrap";
import { ArrowBarUp } from "react-bootstrap-icons";
import logo from "../assets/img/logo.png";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              {/* <span style={{ color: "#f2af3b" }}>Welcome to my Portfolio</span> */}
              <h1 style={{ color: "#f2af3b" }}>
                Greetings visitor! Davide here 👋
              </h1>
              <p>
                after a career change I am now a junior full-stack web developer
                looking to apply my skills and keep growing.{" "}
                <i style={{ color: "#f2af3b" }}>Resilient</i>,
                <i style={{ color: "#f2af3b" }}>determined</i> and{" "}
                <i style={{ color: "#f2af3b" }}>adaptable</i> are beautiful
                words that can describe me 👍 I would also include{" "}
                <i style={{ color: "#f2af3b" }}>gentle</i> and{" "}
                <i style={{ color: "#f2af3b" }}>empathetic</i> (after all here I
                also have to do a little publicity about myself 😎), this is
                also why I strongly believe that the biggest achievements come
                from <i style={{ color: "#f2af3b" }}>teamwork</i>,{" "}
                <i style={{ color: "#f2af3b" }}>respect</i> and{" "}
                <i style={{ color: "#f2af3b" }}>mutual support</i>.
              </p>
              <a href="https://drive.google.com/file/d/1tZ0qr0KdqGngjecqmq7y_o1m0SRgFTLd/view?usp=share_link">
                {" "}
                My CV <ArrowBarUp size={30} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={logo} alt="logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
