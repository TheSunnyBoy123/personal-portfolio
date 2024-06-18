import { useState, useEffect } from 'react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Designer", "Freelancer"];
    const [delta, setDelta] = useState(300-Math.random()*100);
    const [text, setText] = useState('');
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1);
            setDelta(300);
        }
    }

  return (
    <div>
      <section className ="banner" id = "home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm webdecoded `}<span className='wrao'>{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src = {headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Banner
