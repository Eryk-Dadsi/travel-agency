import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ setOptionValue }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => {
      setStartDate(date);
      setOptionValue(date);
    }} />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};


export default OrderOptionDate;