import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({ placeholder, id, setOptionValue, currentValue }) => (
  <div>
    <input type='text' id={id} placeholder={placeholder} rows='10' size='45' value={currentValue} onChange={event => setOptionValue(event.currentTarget.value)}></input>
  </div>
);

OrderOptionText.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.node,
};

export default OrderOptionText;