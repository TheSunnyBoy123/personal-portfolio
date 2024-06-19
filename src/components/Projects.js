import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import ProjectCard from './ProjectCard.js'
import colorSharp2 from '../assets/img/color-sharp2.png'


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
                    <Tab.Container id = "projects-tabs" defaultActiveKey = "first">
                        <Nav variant = "pills" defaultActiveKey = "/home">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key = {index}
                                            {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane></Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}

export default Projects
