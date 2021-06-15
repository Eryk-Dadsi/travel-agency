import React from 'react';
import PropTypes from 'prop-types';

import styles from '../OrderSummary/OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';


const OrderSummary = (props) => {
  const cost = formatPrice(calculateTotal(props.tripCost, props.options));

  return (
    <h2 className={styles.component}>
      Total:
      <strong>{cost}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  cost: PropTypes.func,
};


export default OrderSummary;