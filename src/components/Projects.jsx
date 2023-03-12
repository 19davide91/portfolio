import ProjectCard from "./ProjectCard";
import pranklicious from "../assets/img/pranklicious.png";
import GiveGift from "../assets/img/Give.Gift.png";
import AcheronteRiver from "../assets/img/Acheronte.River.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
  const projects = [
    {
      id: "Pranklicious",
      title: "Pranklicious",
      tech: "React.js, CSS, Node.js, Express.js, MongoDB",
      img: pranklicious,
      demoUrl: "https://pranklicious.netlify.app/",
      about:
        "Pranklicious is an app app built together with my classmate in Hironhach that allows users to share Pranks that they pulled off, plan their pranks, collaborate with other people on more elaborate ones, and bond over their life as part-time jesters. Visitors of the page can browse the pranks and have a good laugh. If they decide to sign up on Pranklicious they can add their Pranks to be displayed publicly, add Steps and Goal to their Pranks and track their progress on them. They can also comment on other jesters pranks and receive feedback and support by other jesters.",
    },
    {
      id: "Give Gift",
      title: "Give Gift",
      tech: "HTML, CSS, Handlebars, Javascript, Express.js, MongoDB",
      img: GiveGift,
      demoUrl: "https://gift-app.cyclic.app/",
      about:
        "Give Gift is an app built together with my classmate in Hironhach that allows users to record their presents in a list and decide later when and who to gift it to as well as create list of friends and attribute the present to them. (Only desktop version implemented).",
    },
    {
      id: "Acheronte River",
      title: "Acheronte River",
      tech: "Javascript, HTML, CSS, Canvas.Js",
      img: AcheronteRiver,
      demoUrl: "https://19davide91.github.io/Game-Acheronte-River/",
      about:
        "Acheronte River is a game where the player has to avoid the demons and collect the souls by moving a small boat inside the Acheron river with keyboard arrows. The game ends when the boat collides with a demon, for each soul collected the player gains 10 points. (Only desktop version implemented).",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                For now these are the projects I've been working on ✌️
                <br />
                Feel free to have a look!
              </p>
              <Row style={{ margin: "auto" }}>
                {projects.map((project, id) => {
                  return <ProjectCard key={id} {...project} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
