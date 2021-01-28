import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    return(
        <footer className={`${props.className} bg-dark p-4`}>
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <p>Elaborado con <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> por <Link to="/" className="text-warning">Lcarazo</Link></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;