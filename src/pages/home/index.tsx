import React from 'react';
import './style.css';
import { Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import Footer from '../../components/footer';
import CvInformation from '../../components/cv-information';
import { cvData } from '../../components/cv-information/pay-load';

const linkedinUrl = 'https://www.linkedin.com/in/luis-manuel-carazo-d%C3%A1vila-80a6a0153/';
const mailAction = 'mailTo:carazodesign@gmail.com';

export const Home = () =>  {
    AOS.init();
    return(
        <section>
        <Container fluid>
            <Row>
            <Col lg={4} md={12} xs={12} className="home-side-col" data-aos={'fade-right'}>
                <div className="home-side-content">
                    <h1 className="text-secondary font-weight-bold">Diseñador UI/UX,<br/>Desarrollador Front-End,<br/>Soñador y<br/>Amante a la música</h1>
                </div>
                <Row>
                    <Col xs={12}>
                    <span className="p-3">Soy Luis Carazo profesional con mas de 11 años de experiencia en la industria del diseño. Mi propósito es brindar una solucion de fácil uso para el usuario final. Soy un soñador que ama generar un impacto positivo a traves del diseño. Te invito a conocer un poco mas de mi trabajo.</span>
                    </Col>
                </Row>
                <div className="my-4 social-icons">
                    <a href={linkedinUrl} target="_blank" className="btn btn-link mx-4"><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                    <a href="#" className="btn btn-link mx-2"><FontAwesomeIcon icon={faFacebookSquare} className="fa-2x"></FontAwesomeIcon></a>
                    <a href="#" className="btn btn-link mx-2"><FontAwesomeIcon icon={faInstagram} className="fa-2x"></FontAwesomeIcon></a>
                </div>
                <Row>
                    <Col xs={12}><a href={mailAction} className="btn btn-primary  btn-block btn-lg rounded-pill">Contáctame</a></Col>
                </Row>
            </Col>
            <Col lg={8} md={12} xs={12} className="m-0 p-0">
                   {cvData.map((project)=>(
                       <CvInformation
                       key={project.title}
                       image={project.image}
                       title={project.title}
                       numberPage={project.numberPage}
                       className={project.className}
                       description={project.description}
                       ></CvInformation>
                   ))}
                   <Footer className="footer-site"></Footer>
            </Col>
            </Row>
        </Container>
        </section>
    );
}
export default Home;