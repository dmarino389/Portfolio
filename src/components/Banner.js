import { useState, useEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"    
import headerImg from '../assets/img/header-img.svg'


export const Banner = () => {
  const [ loopNum, setLoopNum ] = useState(0);
  const [ isDeleting, setIsDeleting ] = useState(false);
  const toRotate = ['web developer', 'web designer', 'Creative', 'UI/UX Designer']
  const [ text, setText ] = useState('');
  const [ delta, setDelta ] = useState(50);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => clearInterval(ticker);
}, [text]);

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta(50); // Rapid deletion from the start
  } else {
    setDelta(150); // Typing speed (adjust as needed)
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setTimeout(() => setDelta(50), 2000); // Wait for a bit before starting deletion
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
  }
}


  
  return (
    <section className="banner" id = 'home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs = {12} md = {6} xl = {7}>
            <span className = 'tagline'>Welcome to my Portfolio</span>
            <h1>{'Hi! My name is Dimitrius and im a '}<span className="wrap">{text}</span></h1>
            <p>Being the son of first-generation Italian Americans, I learned the importance of hard work and respect from a young age. As a child, I've always had an interest in technology and the different ways in which it impacts the world. Through software development, I have been granted the opportunity to freely explore my passion and hold the ability to create amazing applications from inception to a finished product</p>
            <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs = {12} md = {6} xl = {5}>
            <img src = {headerImg} alt = "Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}