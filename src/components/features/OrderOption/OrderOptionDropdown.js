import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionDropdown = ({ values, required, currentValue, setOptionValue }) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  id: PropTypes.node,
  values: PropTypes.array,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};



export default OrderOptionDropdown;