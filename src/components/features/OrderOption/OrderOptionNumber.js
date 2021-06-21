import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOptionNumber = ({ price, limits, currentValue, setOptionValue }) => (
  <div className={styles.number} >
    <input className={styles.inputSmall} type='number' value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}></input>
    {price}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};



export default OrderOptionNumber;