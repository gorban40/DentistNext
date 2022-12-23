import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import LoadingMessage from '../../Customization/Loading/LoadingMessage.js';


const Price = () => {
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/prices")
      .then((response) => response.json())
      .then((data) => setPrices(data.data))
      .then(() => setIsLoading(false))
      .catch((erorr) => alert(new Error().stack));
  }, []);

  const makePriceLeft = () => {
    if (prices != null) {
        return prices.map((item) => {
            return (
              <Row key={item.id} className="price__wrapper">
                <Col className="price__title">{item.attributes.title}</Col>
                <Col className="price__price">
                  {item.attributes.amount} ₴<span>{item.attributes.sale} ₴</span>
                </Col>
                <Col className="price__time">{item.attributes.time} часа</Col>
              </Row>
            );
          });
    } else {
        return (
            <h2>дані ще не надійшли або помилка на сервері</h2>
        )
    }

  };

  const makePriceRight = () => {
    if (prices != null) {
        return prices.map((item) => {
            return (
              <Row key={item.id} className="price__wrapper">
                <Col className="price__title">{item.attributes.title}</Col>
                <Col className="price__price">
                  {item.attributes.amount} ₴<span>{item.attributes.sale} ₴</span>
                </Col>
                <Col className="price__time">{item.attributes.time} часа</Col>
              </Row>
            );
          });
    } else {
        return (
            <h2>дані ще не надійшли або помилка на сервері</h2>
        )
    }
  };

  return (
    <motion.section
      id="price"
      className="price"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        {isLoading ? (
          <LoadingMessage/>
        ) : (
          <Row id="#price">
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="price__border">
              {makePriceLeft()}
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
              {makePriceRight()}
            </Col>
          </Row>
        )}
      </Container>
    </motion.section>
  );
};

export default Price;
