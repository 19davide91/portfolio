import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/davide-lopresti-530668b3/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/19davide91">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
