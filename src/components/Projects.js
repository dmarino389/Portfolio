import { Col, Container } from "react-bootstrap";

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id = 'project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nostrum nulla. Rerum eos sunt exercitationem beatae excepturi sint voluptate. Unde aliquid animi laboriosam assumenda reiciendis, nobis expedita tempore mollitia consequatur.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}