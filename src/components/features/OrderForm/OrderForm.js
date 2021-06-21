import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import styles from '../OrderForm/OrderForm.scss';
import pricing from '../../../data/pricing.json';

const OrderForm = (props) => {
  return (
    <Row className={styles.component}>
      {pricing.map(option => (
        <Col md={4} key={option.id}  >
          <OrderOption  {...option} currentValue={props.options[option.id]} setOrderOption={props.setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  key: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;

