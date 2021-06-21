import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (

  <div className={styles.component}>
    {required ? '' : (
      <div setOptionValue={setOptionValue('')}> <Icon name={'times-circle'} />
        {'none'}</div>
    )}
    {values.map(value => (
      <div
        className={styles.icon, value.id == currentValue ? styles.iconActive : ''}
        key={value.id}
        id={value.id}
        onClick={event => setOptionValue(event.currentTarget.id)}
      >
        <Icon name={value.icon} />
        {value.name}
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);
OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.any,
};



export default OrderOptionIcons;