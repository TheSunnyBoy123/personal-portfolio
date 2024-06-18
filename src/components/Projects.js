import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'


const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            imgUrl: projImg1,
        },
        {
            title: "E-commerce Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            imgUrl: projImg2,
        },
        {
            title: "Portfolio Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            imgUrl: projImg3,
        }
    ];
  return (
    <section className='project' id = 'project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum </p>
                    <Nav variant = "pills" dafaultActiveKey = "/home">
                        <Nav.Item>
                            <Nav.Link href = "/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey = "link-1">Option 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects
