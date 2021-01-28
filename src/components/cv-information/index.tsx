import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';


export interface InformationProps{
    image?: string;
    numberPage?: number;
    title?: string;
    className?: string;
    description?: string;
    technology?: [];
}

export const CvInformation = (props: InformationProps) => {
   console.log(props.description);

      return (
        <section className={`${props.className} side-scroll`}>
            <Container>
                <Row>
                    <div className="p-4 number-of-page">
                        <span>Proyecto No.: {props.numberPage}</span>
                    </div>
                </Row>
                <Row>
                    <Col md={8} className="mx-auto">
                        <img src={props.image} className="img-fluid"></img>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col xs={12} className=" text-left title-project">
                        <span className="text-white font-weight-bold">{props.title}</span>
                    </Col>
                    <Col xs={12} className=" text-left description-project">
                    <small className="text-white">{props.description}</small>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default CvInformation;